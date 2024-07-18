import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    productData: [],
    userInfo: JSON.parse(localStorage.getItem('user')) || null,
    orders: [],
    isToggleOn: false,
};

export const chicloomSlice = createSlice({
    name: "chicloom",
    initialState,
    reducers: {
        toggleMode: (state) => {
            state.isToggleOn = !state.isToggleOn;
            if (state.isToggleOn) {
                document.body.classList.add('bg-black');
                document.body.classList.add('text-gray-300');
            } else {
                document.body.classList.remove('bg-black');
                document.body.classList.remove('text-gray-300');
            }
        },
        addToCart: (state, action) => {
            const item = state.productData.find(
                (item) => item._id === action.payload._id
            );
            if (item) {
                item.quantity += action.payload.quantity
            }
            else {
                state.productData.push(action.payload);
            }
        },
        deleteItem: (state, action) => {
            state.productData = state.productData.filter(
                (item) => item._id !== action.payload
            );
        },
        resetCart: (state) => { state.productData = [] },
        incrementQuantity: (state, action) => {
            const item = state.productData.find(
                (item) => item._id === action.payload._id
            );
            if (item) {
                item.quantity++;
            }
        },
        decrementQuantity: (state, action) => {
            const item = state.productData.find(
                (item) => item._id === action.payload._id
            );
            if (item.quantity === 1) {
                item.quantity = 1;
            }
            else {
                item.quantity--;
            }
        },
        addUser: (state, action) => {
            state.userInfo = action.payload;
            localStorage.setItem('user', JSON.stringify(action.payload));
        },
        removeUser: (state) => {
            state.userInfo = null;
            localStorage.removeItem('user');
            state.orders = [];
        },
        addOrder: (state, action) => {
            state.orders.push(action.payload);
        },
        setOrders: (state, action) => {
            state.orders = action.payload;
        },
        
    },
})
export const { addToCart, resetCart, deleteItem, incrementQuantity, decrementQuantity, toggleMode, addUser, removeUser, addOrder, setOrders } = chicloomSlice.actions;
export default chicloomSlice.reducer;
