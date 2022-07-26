import React, { useEffect, useState } from 'react'
import { list } from '../api/Product'
import { ProductType } from './types/product'
import { Link } from 'react-router-dom'

type Props = {}

const Products = (props: Props) => {
  const [products, setProducts] = useState<ProductType[]>([])
  useEffect(() => {
    const getProduct = async () => {
      const { data } = await list();
      console.log(data);
      
      setProducts(data)
    }
    getProduct()
  }, [])
  return (
    //   <div><div className="bg-white">
    //   <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
    //     <h2 className="sr-only">Products</h2>
    //     <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
    //       {products?.map(item => 
    //         <Link to={`/product/${item.id}`} className="group">
    //           <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
    //             <img src={item.img} alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." className="w-full h-full object-center object-cover group-hover:opacity-75" />
    //           </div>
    //           <h3 className="mt-4 text-sm text-gray-700">{item.name}</h3>
    //           <p className="mt-1 text-lg font-medium text-gray-900">${item.price}</p>
    //         </Link>
    //       )}

    //       {/* More products... */}
    //     </div>
    //   </div>
    // </div></div>



    <div tabIndex={0} className="focus:outline-none">
      {/* Remove py-8 */}
      <div className="mx-auto container py-8">
        <div className="flex flex-wrap items-center lg:justify-between justify-center">
          {/* Card 1 */}
          {products?.map((item: any) =>
            <div tabIndex={0} className="focus:outline-none mx-2 w-72 xl:mb-0 mb-8">
              <div>
              <Link to={`/product/${item._id}`}><img className='aspect-square object-cover ' alt="person capturing an image" src={item.img} /></Link>
              </div>
              <div className="bg-white dark:bg-gray-800">
                <div className="flex items-center justify-between px-4 pt-4">
                  <div>
                    <img className="dark:bg-white focus:outline-none" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/4-by-2-col-grid-svg1.svg" alt="bookmark" />
                  </div>
                  <div className="bg-yellow-200 py-1.5 px-6 rounded-full">
                    <p tabIndex={0} className="focus:outline-none text-xs text-yellow-700"><Link to='#'>Mua ngay</Link></p>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center">
                    <h2 tabIndex={0} className="focus:outline-none text-lg dark:text-white font-semibold"><Link to={`/product/${item._id}`}>{item.name}</Link></h2>

                  </div>
                  <p tabIndex={0} className="focus:outline-none line-clamp-4 text-xs text-gray-600 dark:text-gray-200 mt-2">{item.desc}</p>

                  <div className="flex items-center justify-between py-4">
                    <h2 tabIndex={0} className="focus:outline-none text-indigo-700 text-xs font-semibold"><Link to={`/product/${item.id}`}>Mua đi :)</Link>  </h2>
                    <h3 tabIndex={0} className="focus:outline-none text-indigo-700 text-xl font-semibold">{item.price}</h3>
                  </div>
                </div>
              </div>
            </div>
          )}
          {/* Card 1 Ends */}

        </div>
      </div>
    </div>



  )
}

export default Products