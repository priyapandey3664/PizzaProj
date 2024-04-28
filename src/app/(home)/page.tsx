import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductCard, { Product } from "./components/product-card";


const products:Product[]=[
  {
    id:'1',
    name:'Margarita Pizza',
    description:'Very Tasty Pizza',
    image:'/pizza-main.png',
    price:500,
  },
  {
    id:'2',
    name:'Margarita Pizza',
    description:'Very Tasty Pizza',
    image:'/pizza-main.png',
    price:500,
  },
  {
    id:'3',
    name:'Margarita Pizza',
    description:'Very Tasty Pizza',
    image:'/pizza-main.png',
    price:500,
  },
  {
    id:'4',
    name:'Margarita Pizza',
    description:'Very Tasty Pizza',
    image:'/pizza-main.png',
    price:500,
  },
  {
    id:'5',
    name:'Margarita Pizza',
    description:'Very Tasty Pizza',
    image:'/pizza-main.png',
    price:500,
  },
  {
    id:'6',
    name:'Margarita Pizza',
    description:'Very Tasty Pizza',
    image:'/pizza-main.png',
    price:500,
  },
  
]

export default function Home() {
  return (
    <>
     <section className="bg-white">
      <div className="container flex items-center justify-between py-24">
        <div>
          <h1 className=" text-7xl font-black font-sans leading-2">
            Super Delicious Pizza in <br /> 
            <span className="text-primary">Only 45 Minutes!</span>
          </h1>
          <p className="text-2xl mt-8 max-w-lg leading-snug">
            Enjoy a Free Meal if  Your Order Takes More Than 45 Minutes!
          </p>
          <Button className="mt-8 text-lg rounded-full py-7 p-6 font-blod ">
            Get Your Pizza Now
          </Button>
        </div>
        <div>
          <Image alt="pizza-main" src={"/pizza-main.png"} width={400} height={400}/>
        </div>
      </div>
     </section>
      <section>
        <div className="container py-12">
        <Tabs defaultValue="pizza" >
          <TabsList>
            <TabsTrigger value="pizza" className="text-md">Pizza</TabsTrigger>
            <TabsTrigger value="beverages" className="text-md">Beverages</TabsTrigger>
          </TabsList>
          <TabsContent value="pizza">
            <div  className="grid grid-cols-4 gap-1 mt-2">
            {
              products.map((product)=>(
                <ProductCard product={product}key={product.id}/>
              ))
            }
            </div>
          </TabsContent>
          <TabsContent value="beverages">Beverages List</TabsContent>
        </Tabs>

        </div>
      </section>
    </>
  );
}
