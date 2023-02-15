import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <h1> This is my Header</h1>
            <img src="./Images/Eleceed" alt="A picture of my favorite manhwa" />
            <ol>
                <li> Eleceed </li>
                <li> Talent-Swallowing Magician</li>
                <li> I Obtained a Mythic Item</li>
            </ol>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <header className="App-header">
                Brandon Yeung UD CISC275 with React Hooks and TypeScript, Hello
                World
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <Container>
                <Row>
                    <Col>
                        <div className="rectangle"></div>Action
                    </Col>
                    <Col>
                        <div className="rectangle"></div>Romance
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
