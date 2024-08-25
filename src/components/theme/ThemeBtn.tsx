"use client";

import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Switch } from "../ui/switch";

export default function ThemeBtn() {
    const [isComponentMounted, setIsComponentMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => setIsComponentMounted(true), [theme]);

    if (!isComponentMounted) return null;

    return (
        <div className="flex items-center">
            <Switch
                checked={theme !== "light"}
                onClick={() =>
                    theme === "light" ? setTheme("dark") : setTheme("light")
                }
            />
            <Button
                variant="ghost"
                size="icon"
                onClick={() =>
                    theme === "light" ? setTheme("dark") : setTheme("light")
                }
            >
                {theme === "light" ? <Sun /> : <Moon />}
            </Button>
        </div>
    );
}
