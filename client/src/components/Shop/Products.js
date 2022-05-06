import ProductItem from "./ProductItem";

import classes from './Products.module.css'

const Products = () => {
    return (
        <section className={classes.products}>
            <h2>Choose your favorite product!</h2>
            <ul>
                <ProductItem
                    title='Test'
                    price={6}
                    description='This is a test!'
                />
            </ul>
        </section>
    )
}
export default Products;