"use client";

import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { LayoutGrid, List, Moon, Sun } from "lucide-react";

export default function GridBtn({ isGrid, onClick }) {
    return (
        <Button variant="ghost" size="icon" onClick={onClick}>
            {isGrid ? <LayoutGrid /> : <List />}
        </Button>
    );
}
