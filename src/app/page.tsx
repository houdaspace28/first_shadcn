import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"



interface Recipe{
 title: string,
 image: string,
 time: number,
 description: string,
 vegan: boolean,
 id: string,
}

async function getRecipes(): Promise<Recipe[]> {
  const result = await fetch("http://localhost:4000/recipes");
  return result.json();
}
export default async function Home() {
  const recipes = await getRecipes();
  return (
    <main>
      <div className="grid grid-cols-3 ga-8">
         {recipes.map(recipe=>(
             <Card key={recipe.id} className="flex flex-col justify-between">  
             <CardHeader className="flex flex-col gap-4 items-center">
                 <CardTitle>{recipe.title}</CardTitle>
                 <CardDescription>{recipe.time} mins to cook</CardDescription>
             </CardHeader>
             <CardContent> 
              <p>{recipe.description}</p>            
              </CardContent> 
             <CardFooter className="flex justify-between">
              <button>View Recipe</button>
              {recipe.vegan && <span>Vegan</span>}
              </CardFooter>      
             </Card>
         ))}
      </div>
    </main>
  );
}
