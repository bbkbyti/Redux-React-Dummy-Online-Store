import ProductItem from "./ProductItem";

const Products = () => {
    return (
        <section>
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