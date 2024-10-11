import { useState } from "react";
import Header from "./Header.jsx";
import Form from "./Form.jsx";
import Footer from "./Footer.jsx";
import GroceryList from "./GroceryList.jsx";

const groceryList = [
  { id: 1, checked: true, quantity: 1, name: "Kopi" },
  { id: 2, checked: true, quantity: 1, name: "Gula Pasir" },
  { id: 3, checked: false, quantity: 1, name: "Air Mineral" },
];

export default function App() {
  const [items, setItems] = useState(groceryList);

  function handleToggleItem(id) {
    setItems((items) => items.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item)));
  }

  function handleAddItem(newItem) {
    setItems([...items, newItem]);
  }
  
  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleClearItems() {
    setItems([]);
  }
  return (
    <div className="app">
      <Header />
      <Form onAddItem={handleAddItem} />
      <GroceryList items={items} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem} onClearItems={handleClearItems} />
      <Footer items={items}/>
    </div>
  );
}