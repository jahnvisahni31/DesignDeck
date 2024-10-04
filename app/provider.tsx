"use client";
import { NextUIProvider } from "@nextui-org/react";
import {ThemeProvider as NextThemesProvider} from "next-themes";
export default function ThemeProvider({children, ...props}) {
  return <NextThemesProvider {...props}>
    <NextUIProvider>{children}</NextUIProvider>
    </NextThemesProvider>;
}