import PreviousSearches from "../components/PreviousSearches"
import RecipeCard from "../components/RecipeCard"

export default function Recipes(){
    const recipes = [
        {
            title: "Swiss Role",
            image: "/img/gallery/SwissRole.jpeg",
            authorImg: "/img/top-chiefs/rekha.jpeg",
        }, 
        {
            title: "Hot Cross Bun",
            image: "/img/gallery/hotCrossBun.jpeg",
            authorImg: "/img/top-chiefs/rekha.jpeg",
        },
        {
            title: "Fruit Cake",
            image: "/img/gallery/FruitCake.jpeg",
            authorImg: "/img/top-chiefs/rekha.jpeg",
        },
        {
            title: "Focaccia",
            image: "/img/gallery/Focaccia.jpeg",
            authorImg: "/img/top-chiefs/rekha.jpeg",
        },
        {
            title: "Cinnamon Buns",
            image: "/img/gallery/CinnamonBuns.jpeg",
            authorImg: "/img/top-chiefs/rekha.jpeg",
        },
        {
            title: "Chocolate Creame Fingures",
            image: "/img/gallery/ChocolateCreameFingures.jpeg",
            authorImg: "/img/top-chiefs/rekha.jpeg",
        }, 
        {
            title: "Burger Bun",
            image: "/img/gallery/Bun.jpeg",
            authorImg: "/img/top-chiefs/rekha.jpeg",
        },
        {
            title: "Braided Bread",
            image: "/img/gallery/BreadedBread.jpeg",
            authorImg: "/img/top-chiefs/rekha.jpeg",
        },
        {
            title: "Black Forest Cake",
            image: "/img/gallery/BlackForestCake.jpeg",
            authorImg: "/img/top-chiefs/rekha.jpeg",
        },
    ].sort(() => Math.random() - 0.5)

    return (
        <div>
            <PreviousSearches />
            <div className="recipes-container">
                {/* <RecipeCard /> */}
                {recipes.map((recipe, index) => (
                    <RecipeCard key={index} recipe={recipe} />
                ))}
            </div>
        </div>
    )
}