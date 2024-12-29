import { recipes } from "@/db/schema"
import { db } from "../../../../db/db"
import { eq } from "drizzle-orm"


export async function GET(request,urlko){
    const idd = parseInt(urlko)
  try{
  let recipe = db.select().from(recipes).where(eq(recipes.id,idd))
     if(recipe.length == 0){
        return Response.json({
            message : "no recipe found"
        })
     }else{
     return Response.json({
        message : "Data fetched",
        recipe :recipe 
    })
}
} catch(error){
return Response.json({
    message : error.message
})
  }
}

/*export async function DELETE(request,urlko){
const id = url*1
try{
    await db.delete(recipes).where(eq(recipes.id,id))

}
}*/