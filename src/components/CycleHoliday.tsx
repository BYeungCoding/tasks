import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    type Holiday =
        | "Chinese New Year"
        | "Christmas"
        | "Thanksgiving"
        | "New Year"
        | "Halloween";
    const [holiday, setHoliday] = useState<Holiday>("New Year");

    const nextByAlphabetic: Record<Holiday, Holiday> = {
        "Chinese New Year": "Christmas",
        Christmas: "Halloween",
        Halloween: "New Year",
        "New Year": "Thanksgiving",
        Thanksgiving: "Chinese New Year"
    };
    const nextByYear: Record<Holiday, Holiday> = {
        "New Year": "Chinese New Year",
        "Chinese New Year": "Halloween",
        Halloween: "Thanksgiving",
        Thanksgiving: "Christmas",
        Chirstmas: "New Year"
    };
    const emojis: Record<Holiday, string> = {
        "New Year": "🎉",
        "Chinese New Year": "🐉",
        Halloween: "🎃",
        Christmas: "🎄",
        Thanksgiving: "🦃"
    };
    return (
        <div>
            <span>Holiday: {emojis[holiday]}</span>
            <Button onClick={() => setHoliday(nextByAlphabetic[holiday])}>
                Cycle by Alphabet
            </Button>
            <Button onClick={() => setHoliday(nextByYear[holiday])}>
                Cycle by Year
            </Button>
            Cycle Holiday
        </div>
    );
}
