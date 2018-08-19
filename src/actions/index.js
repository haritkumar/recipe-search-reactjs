export const SET_RECIPES = "SET_RECIPES";
export const FAVORITE_RECIPES = "FAVORITE_RECIPES";

export function setRecipes(items){
    return {
        type: SET_RECIPES,
        items
    }
}

export function favoriteRecipes(recipe){
    return {
        type: FAVORITE_RECIPES,
        recipe
    }
}
