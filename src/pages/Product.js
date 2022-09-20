import findProduct from '../utils/findProduct'
import Error404 from './Error404';

const productInfo = async (products) =>
{
    const product = findProduct(products);
    console.log(product)
    const view = product ? `
    <div class="Product-inner">
    <article class="Product-card">
        <img src="${product.img.hdUrl}" alt="${product.name}">
    </article>
    <article class="Product-card">
        <h3>Name: <span>${product.name}</span></h3>
        <h3>Category: <span>${product.category}</span></ </h3>
        <h3>Cost: $ <span>${product.cost}</span></</h3>
    </article>
    </div> `
    : Error404();

    return view;
};

export default productInfo;