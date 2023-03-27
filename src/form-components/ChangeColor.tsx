import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const [color, setColor] = useState<string>("red");
    const colors = [
        "red",
        "blue",
        "green",
        "magenta",
        "indigo",
        "crimson",
        "mediumspringgreen",
        "limegreen"
    ];
    return (
        <div>
            <h3>Change Color</h3>
            {colors.map((col) => (
                <Form.Check
                    inline
                    key={col}
                    type="radio"
                    name="color"
                    onChange={(e) => setColor(e.target.value)}
                    id={`color-${col}`}
                    label={col}
                    value={col}
                    checked={color === col}
                    style={{ backgroundColor: col }}
                />
            ))}
            <p>
                You have chosen{" "}
                <span
                    style={{ backgroundColor: color }}
                    data-testid="colored-box"
                >
                    {color}
                </span>
            </p>
        </div>
    );
}
