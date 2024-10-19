"use client";

import { useEffect, useRef, useState } from "react";
import { LiveMap } from "@liveblocks/client";
import { fabric } from "fabric";
import {
  handleCanvasMouseDown,
  handleCanvasMouseUp,
  handleCanvasObjectModified,
  handleCanvasObjectScaling,
  handleCanvasSelectionCreated,
  handleCanvaseMouseMove,
  handlePathCreated,
  handleResize,
  initializeFabric,
  renderCanvas,
} from "@/lib/canvas";

import LeftSideBar from "@/components/LeftSideBar";
import Live from "@/components/Live";
import Navbar from "@/components/Navbar";
import RightSideBar from "@/components/RightSideBar";
import { ActiveElement, Attributes } from "@/types/type";
import { useMutation, useRedo, useStorage, useUndo } from "@/liveblocks.config";
import { defaultNavElement } from "@/constants";
import { handleDelete, handleKeyDown } from "@/lib/key-events";
import { handleImageUpload } from "@/lib/shapes";
import { useTheme } from "next-themes";

function Workspace() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fabricRef = useRef<fabric.Canvas | null>(null);
  const isDrawing = useRef(false);
  const shapeRef = useRef<fabric.Object | null>(null);
  const selectedShapeRef = useRef<string | null>(null);
  const activeObjectRef = useRef<fabric.Object | null>(null);
  const imageInputRef = useRef<HTMLInputElement | null>(null);
  const isEditingRef = useRef(false);

  const canvasObjects = useStorage((root) => root.canvasObjects);
  const undo = useUndo();
  const redo = useRedo();

  const [activeElement, setActiveElement] = useState<ActiveElement>({
    name: "",
    value: "",
    icon: "",
  });
  const [elementAttributes, setElementAttributes] = useState<Attributes>({
    width: "",
    height: "",
    fontSize: "",
    fontFamily: "",
    fontWeight: "",
    fill: "#aabbcc",
    stroke: "#000000",
  });

  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "dark" ? systemTheme : theme;
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    if (currentTheme === "dark") {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, [currentTheme]);

  const syncShapeInStorage = useMutation(({ storage }, object) => {
    if (!object) return;

    const objectId = object.objectId || Date.now().toString(); // Ensure objectId is defined
    const shapeData = object.toJSON();
    shapeData.objectId = objectId;

    // Get canvasObjects from storage; if undefined, initialize it as a new LiveMap
    let canvasObjects = storage.get("canvasObjects") as LiveMap<string, any>;
    if (!canvasObjects) {
      // Initialize LiveMap and store it in Liveblocks storage
      canvasObjects = new LiveMap<string, any>();
      storage.set("canvasObjects", canvasObjects);
    }

    // Set shape data in LiveMap
    canvasObjects.set(objectId, shapeData);
  }, []);

  const deleteAllShapes = useMutation(({ storage }) => {
    const canvasObjects = storage.get("canvasObjects") as LiveMap<string, any>;
    if (!canvasObjects || canvasObjects.size === 0) return;

    const entriesArray = Array.from(canvasObjects.entries());

    for (const [key] of entriesArray) {
      canvasObjects.delete(key);
    }

    return canvasObjects.size === 0;
  }, []);

  const deleteShapeFromStorage = useMutation(
    ({ storage }, objectId: string) => {
      const canvasObjects = storage.get("canvasObjects") as LiveMap<string, any>;
      if (!canvasObjects || canvasObjects.size === 0) return;

      // Delete object from LiveMap
      canvasObjects.delete(objectId);
    },
    []
  );

  const handleActiveElement = (element: ActiveElement) => {
    setActiveElement(element);

    // Ensure that fabricRef.current exists and is of the correct type
    if (!fabricRef.current || !(fabricRef.current instanceof fabric.Canvas)) {
      console.error("Canvas is not initialized or not of the correct type");
      return;
    }

    switch (element?.value) {
      case "reset":
        deleteAllShapes();
        fabricRef.current.clear();
        setActiveElement(defaultNavElement);
        break;

      case "delete":
        handleDelete(fabricRef.current, deleteShapeFromStorage);
        setActiveElement(defaultNavElement);
        break;

      case "image":
        imageInputRef.current?.click();
        isDrawing.current = false;
        fabricRef.current.isDrawingMode = false;
        break;

      case "text":
        // Enable text input mode
        if (fabricRef.current) {
          const text = new fabric.Textbox("Enter text", {
            left: 100,
            top: 100,
            fontSize: parseInt(elementAttributes.fontSize) || 20,
            fill: elementAttributes.fill || "#000",
            fontFamily: elementAttributes.fontFamily || "Arial",
            fontWeight: elementAttributes.fontWeight || "normal",
          });

          // Add the new text object and set it as active
          fabricRef.current.add(text);

          if ("setActiveObject" in fabricRef.current) {
            fabricRef.current.setActiveObject(text);
          }

          syncShapeInStorage(text);
        }

        isDrawing.current = false;
        fabricRef.current.isDrawingMode = false;
        break;

      default:
        break;
    }

    selectedShapeRef.current = element?.value as string;
  };

  // Canvas initialization and event handlers
  useEffect(() => {
    const canvas = initializeFabric({ canvasRef, fabricRef });

    canvas.on("mouse:down", (options) => {
      handleCanvasMouseDown({
        options,
        canvas,
        isDrawing,
        shapeRef,
        selectedShapeRef,
        setElementAttributes,
      });
    });
    canvas.on("mouse:move", (options) => {
      handleCanvaseMouseMove({
        options,
        canvas,
        isDrawing,
        shapeRef,
        selectedShapeRef,
        syncShapeInStorage,
      });
    });
    canvas.on("mouse:up", () => {
      handleCanvasMouseUp({
        canvas,
        isDrawing,
        shapeRef,
        selectedShapeRef,
        syncShapeInStorage,
        setActiveElement,
        activeObjectRef,
      });
    });
    canvas.on("object:modified", (options) => {
      handleCanvasObjectModified({
        options,
        syncShapeInStorage,
        setElementAttributes,
      });
    });
    canvas.on("selection:created", (options) => {
      handleCanvasSelectionCreated({
        options,
        isEditingRef,
        setElementAttributes,
      });
    });
    canvas.on("object:scaling", (options) => {
      handleCanvasObjectScaling({
        options,
        setElementAttributes,
      });
    });
    canvas.on("path:created", (options) => {
      handlePathCreated({
        options,
        syncShapeInStorage,
      });
    });

    window.addEventListener("resize", () => {
      handleResize({ canvas: fabricRef.current });
    });

    window.addEventListener("keydown", (e) => {
      handleKeyDown({
        e,
        canvas: fabricRef.current,
        undo,
        redo,
        syncShapeInStorage,
        deleteShapeFromStorage,
      });
    });

    return () => {
      canvas.dispose();
      window.removeEventListener("resize", () => {
        handleResize({
          canvas: null,
        });
      });
      window.removeEventListener("keydown", (e) =>
        handleKeyDown({
          e,
          canvas: fabricRef.current,
          undo,
          redo,
          syncShapeInStorage,
          deleteShapeFromStorage,
        })
      );
    };
  }, [canvasRef]);

  useEffect(() => {
    renderCanvas({ fabricRef, canvasObjects, activeObjectRef });
  }, [canvasObjects]);

  return (
    <div
      className={`${
        darkMode ? "bg-primary-grey-200 text-white " : " bg-slate-200 text-black"
      }`}
    >
      <main className="h-[100dvh] overflow-hidden">
        <Navbar
          activeElement={activeElement}
          handleActiveElement={handleActiveElement}
          imageInputRef={imageInputRef}
          handleImageUpload={(e: any) => {
            e.stopPropagation();
            handleImageUpload({
              file: e.target.files[0],
              canvas: fabricRef as any,
              shapeRef,
              syncShapeInStorage,
            });
          }}
        />

        <section className="flex h-full flex-row">
          <LeftSideBar allShapes={Array.from(canvasObjects)} />
          <Live canvasRef={canvasRef} undo={undo} redo={redo} />
          <RightSideBar
            elementAttributes={elementAttributes}
            setElementAttributes={setElementAttributes}
            fabricRef={fabricRef}
            isEditingRef={isEditingRef}
            activeObjectRef={activeObjectRef}
            syncShapeInStorage={syncShapeInStorage}
          />
        </section>
      </main>
    </div>
  );
}

export default Workspace;
