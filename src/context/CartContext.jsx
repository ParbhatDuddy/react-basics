import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState([])
    const addToCart = (item) => {
        console.log(item)
        setCart((prev) => {
            //check for exist
            const exist = prev.find((p) => p.id === item.id)
            if (exist) {
                // increase quantity
                return prev.map((p) => p.id === item.id ? { ...p, qty: p.qty + 1 } : p)
            }
            return [...prev, { ...item, qty: 1 }];
        });
    }
    console.log(cart)

    const removeFromCart = (id) => {
        setCart((prev) =>
            prev
                .map((p) => (p.id === id ? { ...p, qty: p.qty - 1 } : p))
                .filter((p) => p.qty > 0)
        );
    };

    console.log(cart)
    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    )
}
