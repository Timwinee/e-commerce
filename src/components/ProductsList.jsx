import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import { formatPrice } from '../utils/Index'

const ProductsList = () => {
    const {products} = useLoaderData()
    console.log(products);
    
  return (
    <div className='pt-12 flex flex-col gap-y-8'>
        {
            products.map((items) =>{
                const {title,  price, image, company} = items.attributes
                const dollars = formatPrice(price)
                return(
                    <Link to={`/products/${items.id}`} key={items.id} className='p-8 rounded-lg flex flex-col sm:flex-row flex-wrap gap-y-4 bg-base-100 shadow-lg hover:shadow-2xl transition-all duration-200 group'>
                        <img src={image} alt={title} className='w-24 h-24 rounded-lg s:h-32 object-cover group-hover:scale-105 transition duration-300'/>
                        <div className='ml-0 sm:ml-10 '>
                            <p className='capitalize font-medium text-lg '>{title}</p>
                            <h4 className='capitalize text-md text-neutral-content '>{company}</h4>
                        </div>
                        <p className='font-medium ml-0 sm:ml-auto'>{dollars}</p>
                    </Link>
                )
            })
        }
    </div>
  )
}

export default ProductsList