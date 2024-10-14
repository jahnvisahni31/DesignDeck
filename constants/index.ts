export const COLORS = ["#DC2626", "#D97706", "#059669", "#7C3AED", "#DB2777"];

export const shapeElements = [
  {
    icon: "/assets/rectangle.svg",
    name: "Rectangle",
    value: "rectangle",
  },
  {
    icon: "/assets/circle.svg",
    name: "Circle",
    value: "circle",
  },
  {
    icon: "/assets/triangle.svg",
    name: "Triangle",
    value: "triangle",
  },
  {
    icon: "/assets/line.svg",
    name: "Line",
    value: "line",
  },
  {
    icon: "/assets/image.svg",
    name: "Image",
    value: "image",
  },
  {
    icon: "/assets/freeform.svg",
    name: "Free Drawing",
    value: "freeform",
  },
];

export const navElements = [
  {
    icon: "/assets/select.svg",
    name: "Select",
    value: "select",
  },
  {
    icon: "/assets/rectangle.svg",
    name: "Rectangle",
    value: shapeElements,
  },
  {
    icon: "/assets/text.svg",
    value: "text",
    name: "Text",
  },
  {
    icon: "/assets/delete.svg",
    value: "delete",
    name: "Delete",
  },
  {
    icon: "/assets/reset.svg",
    value: "reset",
    name: "Reset",
  },
  {
    icon: "/assets/comments.svg",
    value: "comments",
    name: "Comments",
  },
];

export const defaultNavElement = {
  icon: "/assets/select.svg",
  name: "Select",
  value: "select",
};

export const directionOptions = [
  { label: "Bring to Front", value: "front", icon: "/assets/front.svg" },
  { label: "Send to Back", value: "back", icon: "/assets/back.svg" },
];

export const fontFamilyOptions = [
  { value: "Helvetica", label: "Helvetica" },
  { value: "Times New Roman", label: "Times New Roman" },
  { value: "Comic Sans MS", label: "Comic Sans MS" },
  { value: "Brush Script MT", label: "Brush Script MT" },
];

export const fontSizeOptions = [
  {
    value: "10",
    label: "10",
  },
  {
    value: "12",
    label: "12",
  },
  {
    value: "14",
    label: "14",
  },
  {
    value: "16",
    label: "16",
  },
  {
    value: "18",
    label: "18",
  },
  {
    value: "20",
    label: "20",
  },
  {
    value: "22",
    label: "22",
  },
  {
    value: "24",
    label: "24",
  },
  {
    value: "26",
    label: "26",
  },
  {
    value: "28",
    label: "28",
  },
  {
    value: "30",
    label: "30",
  },
  {
    value: "32",
    label: "32",
  },
  {
    value: "34",
    label: "34",
  },
  {
    value: "36",
    label: "36",
  },
];

export const fontWeightOptions = [
  {
    value: "400",
    label: "Normal",
  },
  {
    value: "700",
    label: "Bold",
  },
];

export const alignmentOptions = [
  { value: "left", label: "Align Left", icon: "/assets/align-left.svg" },
  {
    value: "horizontalCenter",
    label: "Align Horizontal Center",
    icon: "/assets/align-horizontal-center.svg",
  },
  { value: "right", label: "Align Right", icon: "/assets/align-right.svg" },
  { value: "top", label: "Align Top", icon: "/assets/align-top.svg" },
  {
    value: "verticalCenter",
    label: "Align Vertical Center",
    icon: "/assets/align-vertical-center.svg",
  },
  { value: "bottom", label: "Align Bottom", icon: "/assets/align-bottom.svg" },
];

export const shortcuts = [
  {
    key: "1",
    name: "Chat",
    shortcut: "/",
  },
  {
    key: "2",
    name: "Undo",
    shortcut: "⌘ + Z",
  },
  {
    key: "3",
    name: "Redo",
    shortcut: "⌘ + Y",
  },
  {
    key: "4",
    name: "Reactions",
    shortcut: "E",
  },
];

export const faq = [
  {
    key: 1,
    question: "What is DesignDeck?",
    answer:
      "DesignDeck is a web-based collaborative design tool, similar to Figma, built using Next.js, TypeScript, Tailwind CSS, and LiveBlocks API. It allows teams to seamlessly collaborate on designing interfaces in real-time.",
  },
  {
    key: 2,
    question: "How do I get started with DesignDeck?",
    answer:
      "To get started, clone the repository from GitHub, install the dependencies, and run the project locally using npm. The full guide is available in the README.md file.",
  },
  {
    key: 3,
    question: "What features does DesignDeck offer?",
    answer:
      "DesignDeck offers live collaboration, shape manipulation, free drawing, text addition, export to PDF, and many more features to help you design interfaces collaboratively.",
  },
  {
    key: 4,
    question: "How can I contribute to DesignDeck?",
    answer:
      "You can contribute by forking the repository, creating a new branch, making your changes, and submitting a pull request. Contributions are always welcome!",
  },
  {
    key: 5,
    question: "Is DesignDeck open source?",
    answer:
      "Yes, DesignDeck is an open-source project, and we encourage contributions from the community.",
  },
  {
    key: 6,
    question: "Does DesignDeck support real-time collaboration?",
    answer:
      "Yes, with the LiveBlocks API integrated into DesignDeck, multiple users can collaborate in real-time. You can see live updates of cursor positions and design changes as they happen.",
  },
  {
    key: 7,
    question: "What technologies power DesignDeck?",
    answer:
      "DesignDeck is built using Next.js, TypeScript, Tailwind CSS, and LiveBlocks API for real-time collaboration, along with Fabric.js for manipulating graphics and interactive content.",
  },
  {
    key: 8,
    question: "How can I export my designs in DesignDeck?",
    answer:
      "DesignDeck allows you to export designs to PDF format. Simply select the elements you want to export and use the export option to generate a downloadable PDF.",
  },
  {
    key: 9,
    question: "Are there keyboard shortcuts available in DesignDeck?",
    answer:
      "Currently, DesignDeck does not supports keyboard shortcuts,the feature is under development, once prepare user will be abel to do faster design operations, such as Undo (Ctrl+Z), Redo (Ctrl+Y), and copy-pasting elements.",
  },
];
