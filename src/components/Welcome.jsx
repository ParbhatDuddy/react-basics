import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext.jsx";
import { CartContext } from "../context/CartContext.jsx";
import products from "../constants/products.js";

function Welcome() {
    const { cart, addToCart, removeFromCart } = useContext(CartContext);
    const { theme, toggletheme } = useContext(ThemeContext);

    const fruits = ["Apple", "Banana", "Mango", "Orange"];


    return (
        <div
            style={{
                background: theme === "light" ? "#f9f9f9" : "#222",
                color: theme === "light" ? "#222" : "#f9f9f9",
                minHeight: "100vh",
                padding: "20px",
            }}
        >
            <button
                onClick={toggletheme}
                style={{
                    marginBottom: "20px",
                    padding: "8px 12px",
                    cursor: "pointer",
                    border: "2px solid #222",      // added border
                    borderRadius: "5px",            // optional: rounded corners
                    backgroundColor: theme === "light" ? "#fff" : "#444",
                    color: theme === "light" ? "#222" : "#f9f9f9"
                }}
            >
                Toggle Theme
            </button>


            <div
                style={{
                    display: "flex",
                    gap: "50px",
                    alignItems: "flex-start",
                    justifyContent: "center",
                }}
            >
                {/* Left Side: Products + Fruits */}
                <div style={{ flex: 1 }}>
                    <h2>Products</h2>
                    {products.map((product) => (
                        <div
                            key={product.id}
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                marginBottom: "10px",
                                alignItems: "center",
                            }}
                        >
                            <span>
                                {product.name} - ${product.price}
                            </span>
                            <button
                                onClick={() => addToCart(product)}
                                style={{
                                    padding: "5px 10px",
                                    cursor: "pointer",
                                    border: "1px solid #222",     // border added
                                    borderRadius: "4px",
                                    backgroundColor: theme === "light" ? "#fff" : "#333",
                                    color: theme === "light" ? "#222" : "#f9f9f9"
                                }}
                            >
                                Add
                            </button>

                        </div>
                    ))}

                    <h2>Fruit List</h2>
                    <ul>
                        {fruits.map((fruit, index) => (
                            <li key={index}>{fruit}</li>
                        ))}
                    </ul>
                </div>

                {/* Right Side: Cart */}
                <div
                    style={{
                        flex: 1,
                        border: theme === "light" ? "1px solid #ccc" : "1px solid #555",
                        padding: "20px",
                        borderRadius: "8px",
                        minHeight: "200px",
                    }}
                >
                    <h2>Cart Items</h2>
                    {cart.length === 0 ? (
                        <p>No items in cart</p>
                    ) : (
                        cart.map((item) => (
                            <div
                                key={item.id}
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                    alignItems: "center",
                                }}
                            >
                                <span>
                                    {item.name} - ${item.price} x {item.qty}
                                </span>
                               <button
  onClick={() => removeFromCart(item.id)}
  style={{
    padding: "5px 10px",
    cursor: "pointer",
    border: "1px solid red",
    borderRadius: "4px",
    backgroundColor: "#fff",
    color: "red"
  }}
>
  Remove
</button>

                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}

export { Welcome };
