import getData from "../utils/getData";

const Home = async () =>{
    const products = await getData();

    const view = `<div class="Products">
                ${products.map(product => `
                <a href="#/${product._id}/">
                    <article class="Product-items">
                            <img src="${product.img.url}" alt="${product.image}">
                            <div class="Product-items-description">
                                <h2 class="Product-items-name">${product.name}</h2>
                            </div>
                        
                    </article>
                </a>
                `).join('')}
            </div>
                `;

    return view;
}

export default Home;