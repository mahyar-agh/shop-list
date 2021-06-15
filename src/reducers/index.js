import { combineReducers } from "redux";

const foodsReducer = () => {
    const foods = [{
            title: "Raspberry Cake",
            description: "Cake with red Raspberry on it",
            imageSrc: "cake.jpg",
        },
        {
            title: "Baken",
            description: "Baken With eggs",
            imageSrc: "baken.jpg",
        },
        {
            title: "Pizza",
            description: "Peperony Pizza",
            imageSrc: "pizza.jpg",
        },
        {
            title: "Pasta",
            description: "Alferedo Pasta",
            imageSrc: "pasta.jpg",
        },
        {
            title: "Donut",
            description: "Donut with choklet",
            imageSrc: "donut.jpg",
        },
        {
            title: "Salad",
            description: "Diet Salad",
            imageSrc: "salad.jpg",
        },
        {
            title: "Fish",
            description: "Salmon Fish",
            imageSrc: "fish.jpg",
        },
        {
            title: "Burger",
            description: "Double Burger with Chesse",
            imageSrc: "burger.jpg",
        },
    ];
    return foods;
};

const shopListReducer = (shopList = [], action) => {
    switch (action.type) {
        case "ADD_TO_SHOPLIST":
            return [...shopList, action.payload];
        case "REMOVE_FROM_SHOPLIST":
            return [...shopList].filter((item) => item !== action.payload);
        default:
            return shopList;
    }
};

export default combineReducers({
    foods: foodsReducer,
    shopList: shopListReducer,
});