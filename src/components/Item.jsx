export default function Item({ item, onDeleteItem, onToggleItem }) {
    return (
      <li>
        <input
          type="checkbox"
          checked={item.checked}
          onChange={() => onToggleItem(item.id)}
        />
        <span
          style={{
            textDecoration: item.checked ? "line-through" : "none",
          }}
        >
          {item.quantity} {item.name}
        </span>
        <button onClick={() => onDeleteItem(item.id)}>&times;</button>
      </li>
    );
  }