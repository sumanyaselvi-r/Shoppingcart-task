



function CartItem({ item, RemoveCart }) {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-start">
      <div className="ms-2 me-auto">
        <div className="fw-bold"><h3>{item.name}</h3></div>
        Rs.{item.price}

      </div>
      <button onClick={() => { RemoveCart(item) }} style={{ backgroundColor: "blue", color: "white", borderRadius: "10px" }}>Remove</button>
    </li>

  )
}

export default CartItem;