import ProductsGrid from '../components/ProductsGrid'

export default function About(){
    return(
        <>
        {/* <ProductsGrid/> */}
            <div className="flex max-w-200 outline-1 mx-auto w-full flex-wrap gap-2 sm:gap-6 items-center justify-center mt-24">
                <h1 className="text-4xl font-bold sm:text-6xl leading-none">
                    We love
                </h1>
                <div className="stats bg-primary">
                    <div className="stat">
                        <div className="stat-title text-primary-content text-4xl font-bold tracking-widest">
                            comfy
                        </div>
                    </div>
                </div>
                <article className="text-lg leading-8 max-w-2xl mx-auto">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore earum corporis magni expedita illo consequatur assumenda, in reiciendis ipsum modi ab sunt iure distinctio ratione, eius quae maxime sapiente nemo nisi harum alias!
                </article>
            </div>
        </>
    )
}