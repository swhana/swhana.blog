"use client";

import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeBtn() {
    const [isComponentMounted, setIsComponentMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => setIsComponentMounted(true), [theme]);

    if (!isComponentMounted) return null;

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={() =>
                theme === "light" ? setTheme("dark") : setTheme("light")
            }
        >
            {theme === "light" ? <Sun /> : <Moon />}
        </Button>
    );
}
