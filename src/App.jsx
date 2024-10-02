import { useState } from "react";

const groceryList = [
  { id: 1, checked: true, quantity: 1, name: "Kopi" },
  { id: 2, checked: true, quantity: 1, name: "Gula Pasir" },
  { id: 3, checked: false, quantity: 1, name: "Air Mineral" },
];

export default function App() {
  return (
    <div className="app">
      <Header />
      <Form />  
      <Footer />
    </div>
  );
}

function Header() {
  return <h1>Catatan Belanjaku 📝</h1>;
}



function Footer() {
  return (
    <footer className="stats">
      Ada 10 barang di daftar belanjaan, 5 barang sudah dibeli (50%)
    </footer>
  );
}

function Form() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    alert(quantity);    
  }

  const quantityNum = [...Array(20)].map((_, index) => (
    <option value="{index + 1}" key={index}>{index + 1}</option>
  ));
  return (
    <>
      <form className="add-form" onSubmit={handleSubmit}>
        <h3>Hari ini belanja apa kita?</h3>
        <div>
          <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
            {quantityNum}
          </select>
          <input type="text" placeholder="nama barang..." value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <button>Tambah</button>
      </form>
      <div className="list">
        <ul>
          {groceryList.map((item) => (
            <li key={item.id}>
              <input type="checkbox" checked={item.checked} />
              <span
                style={{
                  textDecoration: item.checked ? "line-through" : "none",
                }}
              >
                {item.quantity} {item.name}
              </span>
              <button>&times;</button>
            </li>
          ))}
        </ul>
      </div>
      <div className="actions">
        <select>
          <option value="input">Urutkan berdasarkan urutan input</option>
          <option value="name">Urutkan berdasarkan nama barang</option>
          <option value="checked">Urutkan berdasarkan ceklis</option>
        </select>
        <button>Bersihkan Daftar</button>
      </div>
    </>
  );
}
