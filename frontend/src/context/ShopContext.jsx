import { createContext, useState } from 'react';
import { products } from '../assets/assets';
import { toast } from 'react-toastify';

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const currency = '$';
    const delivery_fee = 8;
    const [cartItems, setCartItems] = useState({});

    // Function to add an item to the cart
    const addToCart = (itemId, size) => {
        if (!size) {
            toast.error('Please select a product size.');
            return;
        }

        setCartItems((prevCartItems) => {
            const updatedCartItems = { ...prevCartItems };

            if (!updatedCartItems[itemId]) {
                updatedCartItems[itemId] = {};
            }

            if (!updatedCartItems[itemId][size]) {
                updatedCartItems[itemId][size] = 0;
            }

            updatedCartItems[itemId][size] += 1;
            return updatedCartItems;
        });
    };

    // Function to calculate total amount in the cart
    const getCartAmount = async () => {
        let totalAmount = 0;

        for (const itemId in cartItems) {
            const itemInfo = products.find((product) => product._id === itemId);
            if (!itemInfo) continue;

            for (const size in cartItems[itemId]) {
                try {
                    if (cartItems[itemId][size] > 0) {
                        totalAmount += itemInfo.price * cartItems[itemId][size];
                    }
                } catch (error) {
                    console.error(`Error calculating cart amount: ${error.message}`);
                }
            }
        }

        return totalAmount;
    };

    // Function to remove an item from the cart
    const removeFromCart = (itemId, size) => {
        setCartItems((prevCartItems) => {
            const updatedCartItems = { ...prevCartItems };

            if (updatedCartItems[itemId] && updatedCartItems[itemId][size]) {
                delete updatedCartItems[itemId][size];

                if (Object.keys(updatedCartItems[itemId]).length === 0) {
                    delete updatedCartItems[itemId];
                }
            }

            return updatedCartItems;
        });

        toast.error('Item removed from cart.');
    };

    // Function to clear the cart
    const clearCart = () => {
        setCartItems({});
        toast.info('Cart has been cleared.');
    };

    // Function to calculate the total number of items in the cart
    const getCartCount = () => {
        return Object.values(cartItems).reduce(
            (total, sizes) => total + Object.values(sizes).reduce((subtotal, qty) => subtotal + qty, 0),
            0
        );
    };

    // Value provided by the context
    const value = {
        products,
        currency,
        delivery_fee,
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        getCartCount,
        getCartAmount,
    };

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
