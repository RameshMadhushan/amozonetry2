import { StarIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import { useState } from 'react'
import Currency from 'react-currency-formatter'






function Products({id, price, title, description, category, image}) {


    const [rating] = useState(Math.floor(Math.random()* 5 ) + 1)


    const [hasPrime] = useState(Math.random() < 0.5)




    return (

        <div className="relative flex flex-col m-5 bg-white z-30 p-10">
            
            <p className="absolute top-2 right-6 text-xs italic text-gray-400"> {category} </p>

            <Image src={image} height={200} width={200} objectFit="contain" /> 

            <h4 className="my-3 font-semibold"> {title} </h4>

            <div className="flex">
                {
                    Array(rating).fill().map((_, i) => (
                        <StarIcon className="h-5 text-yellow-500" />
                    ))
                }
            </div>

            <p className="my-2 text-sm mt-6 line-clamp-2"> {description} </p>

            <div className="mb-5">
                <Currency  quantity={price} currency="USD" />
            </div>

            {
                hasPrime && (
                    <div className="flex items-center space-x-2 -mt-5">
                        <img className="w-12" src="https://links.papareact.com/fdw" alt="" />
                        <p>Free next day delivery</p>
                    </div>
                )
            }


            <button className="mt-auto button"> Add to basket </button>


        </div>

    )
}





export default Products
