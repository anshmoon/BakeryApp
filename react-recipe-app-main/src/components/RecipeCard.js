import { useState } from "react";
import CustomImage from "./CustomImage"
import Popup from "./Popup";


export default function RecipeCard({recipe}){
    let text="Lorem Ipsum is simply dummy text of the printing and typesetting industry.";
    const sendEmail = (dishName) => {
        const email = 'rekhachoubey42@gmail.com'; 
        const subject = 'Baking Order'; 
        const body = `i want to order ${dishName}`;
    
        
        const mailto = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        
        
        window.location.href = mailto;
      }
    
    return (
        <div className="recipe-card">
            <CustomImage imgSrc={recipe.image} pt="65%"/>
            <div className="recipe-card-info">
                <img className="auther-img" src={recipe.authorImg} alt=""/>
                <p className="recipe-title">{recipe.title}</p>
                <p className="recipe-desc">{text}</p>
                <a className="view-btn" href="#" onClick={()=>sendEmail(recipe.title)}>Order Now</a>
            </div>
        </div>
    )
}