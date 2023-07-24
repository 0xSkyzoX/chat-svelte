"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
function ListGroup() {
    const [inputValue, setInputValue] = (0, react_1.useState)("");
    let itemsList = [
        { key: 1, text: "1" },
        { key: 2, text: "2" },
        { key: 3, text: "3" },
        { key: 4, text: "4" },
    ];
    let [items, setItems] = (0, react_1.useState)(itemsList);
    let [selectedIndex, setSelectedIndex] = (0, react_1.useState)(-1);
    const NewInput = (k) => {
        if (k.key != "Enter")
            return;
        let text = document.getElementById("NewInput");
        setItems((prevItems) => [...prevItems, { key: items.slice(-1)[0].key + 1, text: inputValue }]);
        console.log(items);
    };
    return (<>
      <ul className="list-group" id="ToDoList">
        {items.map((item, index) => (<li className={`list-group-item${index == selectedIndex ? " active" : ""}`} key={item.key} onClick={() => {
                setSelectedIndex(index);
            }}>
            {" "}
            {item.text}
          </li>))}
        <input value={inputValue} onChange={(e) => setInputValue(e.target.value)}></input>
      </ul>
    </>);
}
exports.default = ListGroup;
