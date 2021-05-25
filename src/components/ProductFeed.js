import Products from "./Products"




function ProductFeed({products}) {
    return (
        <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-30 z-50 mx-auto">
            
            

            {
                products.slice(0,4).map(({id, price, title, description, category, image}) => (
                    <Products
                        key={id}
                        id={id}
                        title={title}
                        description ={description}
                        category = {category}
                        image ={image}
                        price={price}
                    />
                ))
            }


            <img className="md:col-span-full" src="https://links.papareact.com/dyz" alt="" />


            <div className="md:col-span-2">

                {
                    products.slice(4,5).map(({id, price, title, description, category, image}) => (
                        <Products
                            key={id}
                            id={id}
                            title={title}
                            description ={description}
                            category = {category}
                            image ={image}
                            price={price}
                        />
                    ))
                }
            </div>




            {
                products.slice(5).map(({id, price, title, description, category, image}) => (
                    <Products
                        key={id}
                        id={id}
                        title={title}
                        description ={description}
                        category = {category}
                        image ={image}
                        price={price}
                    />
                ))
            }


        </div>
    )
}





export default ProductFeed
