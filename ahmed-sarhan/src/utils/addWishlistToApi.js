import { Axios } from "../api/axios";

export const addWishlistToApi = async(recipe) => {
    const response = await Axios.post(`/wishlist.json`, recipe);
}