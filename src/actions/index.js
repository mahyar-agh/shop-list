export const addToShopList = (item) => {
    return {
        type: "ADD_TO_SHOPLIST",
        payload: item,
    };
};

export const removeFromShopList = (item) => {
    return {
        type: "REMOVE_FROM_SHOPLIST",
        payload: item,
    };
};