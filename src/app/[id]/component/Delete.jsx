"use client"
import { useRouter } from "next/navigation"

const Delete = ({recipeId})=>{
    const router = useRouter()
    const deleteRecipe =async ()=>{
    const response =   await fetch("http://localhost:3000/api/recip/" + recipeId,{
        method:"DELETE"
     })
    if(!response.ok ){
throw new Error("Failed to fetch")
    }
alert("Recipe deleted")
router.push("/")
}

    return(
        <div className="w-1/2 px-2">
        <button className="w-full bg-red-200 dark:bg-red-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600" onClick={deleteRecipe} >Delete</button>
    </div>
    )
}
export default Delete