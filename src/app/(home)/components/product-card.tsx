import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import Image from "next/image";
import React from 'react'
import ToppingList from './topping-list';
import { ShoppingCart } from 'lucide-react';


export type Product = {
   id: string;
   name:string;
   description:string;
   image: string;
   price:number;
}

type PropTypes = {product:Product};

const ProductCard = ({product}:PropTypes) => {
  return (
    <Card className='border-none rounded-xl mt-4'>
  <CardHeader>

    <Image alt="pizza-main" width={120} height={120} src={product.image}/>

  </CardHeader>

  <CardContent>
    <h2 className='text-ml font-bold'>{product.name}</h2>
    <p className=' text-sl mt-2'>{product.description}</p>
  </CardContent>

  <CardFooter className='flex items-center justify-between'>
    <p>
      <span className='text-sl '>From </span>
      <span className='text-sl font-bold'>₹{product.price}</span>
    </p>

    <Dialog>
  <DialogTrigger className=' text-sl bg-orange-200 hover:bg-orange-300 text-orange-500 px-3 py-1 rounded-full shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150'>Choose</DialogTrigger>
  <DialogContent className='max-w-3xl p-0'>
      <div className='flex '>
        <div className='w-1/3 bg-white rounded p-8 flex items-center justify-center'>
          <Image 
          src={'/pizza-main.png'}
          width={450}
          height={450}
          alt={product.name}
          />
        </div>
        <div className='w-2/3 p-8'>
                 <h3 className='text-xl font-bold'>{product.name}</h3>
                 <p className='mt-1'>{product.description}</p>
                 <div>
                    <h4 className="mt-6">Choose the size</h4>
                     <RadioGroup defaultValue="small"className="grid grid-cols-3 gap-4 mt-2">
                          <div>
                              <RadioGroupItem value="small" id="small"className="peer sr-only" aria-label="Small"/>
                                  <Label htmlFor="small"
                                                  className="flex flex-col items-center justify-between rounded-md border-2 bg-white p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary">
                                                  Small
                                  </Label>
                         </div>

                          <div>
                                              <RadioGroupItem
                                                  value="medium"
                                                  id="medium"
                                                  className="peer sr-only"
                                                  aria-label="Medium"
                                                  />
                                              <Label
                                                  htmlFor="medium"
                                                  className="flex flex-col items-center justify-between rounded-md border-2 bg-white p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary">
                                                  Medium
                                              </Label>
                         </div>

                          <div>
                                              <RadioGroupItem
                                                  value="large"
                                                  id="large"
                                                  className="peer sr-only"
                                                  aria-label="Large"
                                              />
                                              <Label
                                                  htmlFor="large"
                                                  className="flex flex-col items-center justify-between rounded-md border-2 bg-white p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary">
                                                  Large
                                              </Label>
                         </div>
                     </RadioGroup>
                 </div>

                <div>
                                      <h4 className="mt-6">Choose the crust</h4>
                                      <RadioGroup
                                          defaultValue="thin"
                                          className="grid grid-cols-3 gap-4 mt-2">
                                          <div>
                                              <RadioGroupItem
                                                  value="thin"
                                                  id="thin"
                                                  className="peer sr-only"
                                                  aria-label="Thin"
                                              />
                                              <Label
                                                  htmlFor="thin"
                                                  className="flex flex-col items-center justify-between rounded-md border-2 bg-white p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary">
                                                  Thin
                                              </Label>
                                          </div>

               <div>
                                              <RadioGroupItem
                                                  value="thick"
                                                  id="thick"
                                                  className="peer sr-only"
                                                  aria-label="Thick"
                                              />
                                              <Label
                                                  htmlFor="thick"
                                                  className="flex flex-col items-center justify-between rounded-md border-2 bg-white p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary">
                                                  Thick
                                              </Label>
                                          </div>
                                      </RadioGroup>
                                      
                </div>
                <ToppingList/>
                <div className="flex items-center justify-between mt-12">
                                    <span className="font-bold">₹400</span>
                                    <Button>
                                        <ShoppingCart size={20} />
                                        <span className="ml-2">Add to cart</span>
                                    </Button>
                                </div>
          </div>
        
      </div>
  </DialogContent>
</Dialog>

   
  </CardFooter>
</Card>

  )
}

export default ProductCard;