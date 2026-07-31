import Image from "next/image";

const FoodDetailsPage = async({params}) => {
    const {foodId} = await params;
const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/foods/${foodId}`);
const data = await res.json();
const {id, dish_name, image_link, main_ingredients} = data.data;

  return (
    <div>
        <h2>Show details of food: {foodId}</h2>
        <h3 className="text-3xl">Dish Name: {dish_name}</h3>
        <Image
        src= {image_link}
        alt= {dish_name}
        width={300}
        height={300}
        ></Image>
        <h2 className="text-2xl">Ingredients: </h2>
        <ul>
          {main_ingredients.map(ingredient=><li> {ingredient}</li>)  }
        </ul>
    </div>
  )
}

export default FoodDetailsPage