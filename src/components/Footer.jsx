export default function Footer({ items }) {

    if (items.length === 0) {
      return (<footer className="stats">
      Daftar Belanjaan Masih Kosong
      </footer>)
    };
  
    const totalItems = items.length;
    const totalCheckedItems = items.filter(item => item.checked).length;
    const percentage = Math.round(totalCheckedItems / totalItems * 100);
  
    return (
      <footer className="stats">
        Ada {totalItems} barang di daftar belanjaan, {totalCheckedItems} barang sudah dibeli ({percentage}%).
      </footer>
    );
  }