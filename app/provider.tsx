"use client";
import { NextUIProvider } from "@nextui-org/react";
import {ThemeProvider as NextThemesProvider} from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
export default function ThemeProvider({children, ...props}: ThemeProviderProps) {
  return <NextThemesProvider {...props}>
    <NextUIProvider>{children}</NextUIProvider>
    </NextThemesProvider>;
}