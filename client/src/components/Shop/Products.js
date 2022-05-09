import ProductItem from "./ProductItem";

import classes from './Products.module.css'

const Dummy_Products = [
    {
        id: 'a1',
        price: '10',
        title: 'my first item',
        description: 'this is my first item in shopping cart!'
    },
    {
        id: 'a2',
        price: '20',
        title: 'my second item',
        description: 'this is my second item in shopping cart!'
    }
]

const Products = () => {
    return (
        <section className={classes.products}>
            <h2>Choose your favorite product!</h2>
            <ul>
                {Dummy_Products.map((product) => (
                    <ProductItem
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        price={product.price}
                        description={product.description}
                    />
                ))}

            </ul>
        </section>
    )
}
export default Products;