

import Card from "./components/Card";


const fetchRecipes = async()=> {

try{
  const response = await fetch("http://localhost:3000/api/recip",{
    cache :"no-store"
   }) 
   if(!response.ok){
     throw new Error("Failed to fetch recipes ")
   }
     return response.json()
} catch (error){
  console.log(error.message)
  return []
}
}


export default async function Home() {
  const {recipes} = await fetchRecipes() 
 
  return (  
    <div className="flex flex-wrap justify-evenly">
{
  recipes.map((recipe)=>{
    return(
      <Card key={recipe.id}  recipe={recipe} />
    )
  })
}

    </div>

  )
}

//postgresql://postgres.zgmkdnqiujytxyohvxwb:[YOUR-PASSWORD]@aws-0-ap-south-1.pooler.supabase.com:6543/postgres
//bBCsVn6yL2OdagIi
