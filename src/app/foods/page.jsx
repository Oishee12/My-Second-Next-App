import FoodCard from "@/components/FoodCard";

const FoodsPage = async() => {
  const res = await fetch('https://phi-lab-server.vercel.app/api/v1/lab/foods');
  const data = await res.json();
  const foods = await data.data;
  
    return (
    <div>
        <h2>Foods: {foods.length}</h2>
        {
          foods.map(food => (<FoodCard food={food} key={food.id}></FoodCard>))
        }
    </div>
  )
}

export default FoodsPage