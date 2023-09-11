import React from "react";
import ReactDOM from "react-dom";
// src/Name.js
import product from "./product";
// src/App.js
import { Card } from "react-bootstrap";
import Name from "./Name";
import Price from "./Price";
import Description from "./Description";
import Image from "./Image";
import product from "./product";

const App = () => {
  const firstName = "YourFirstName"; // Replace with your first name

return (
    <div className="container">
    <Card style={{ width: "18rem" }}>
        <Image />
        <Card.Body>
        <Name />
        <Price />
        <Description />
        </Card.Body>
    </Card>
    <p>Hello, {firstName ? firstName : "there"}!</p>
{firstName && <img src={product.image} alt="Product" />}
    </div>
);
};

export default App;






const rootElement = document.getElementById("root"); // we call this a "root" DOM node because everthing inside will be managed ny React DOM
ReactDOM.render(<App/>,rootElement);


















function Name() {
    return <h2>{product.name}</h2>;
    }
    export default Name;