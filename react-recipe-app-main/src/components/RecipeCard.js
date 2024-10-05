import { useState } from "react";
import CustomImage from "./CustomImage"
import Popup from "./Popup";


export default function RecipeCard({recipe}){
    const [recipeOpen,setRecipeOpen]= useState(false);
    let text="Lorem Ipsum is simply dummy text of the printing and typesetting industry.";
    const togglePopup = () => {
        setRecipeOpen(!recipeOpen);
      };
    return (
        <div className="recipe-card">
            <CustomImage imgSrc={recipe.image} pt="65%"/>
            <div className="recipe-card-info">
                <img className="auther-img" src={recipe.authorImg} alt=""/>
                <p className="recipe-title">{recipe.title}</p>
                <p className="recipe-desc">{text}</p>
                <a className="view-btn" href="#!" onClick={()=>togglePopup()}>VIEW RECIPE</a>
                {/* {recipeOpen && <Popup recipe={text} recipeOpen={recipeOpen} />} */}
            </div>
        </div>
    )
}