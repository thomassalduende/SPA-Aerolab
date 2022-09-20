import Home from '../pages/Home'
import Header from '../templates/Header'
import Product from '../pages/Product';
import Error404 from '../pages/Error404';

import getHash from '../utils/getHash'
import resolveRoutes from '../utils/getResolveRoute'
import getData from '../utils/getData';

const routes = {
    '/': Home,
    '/:id':Product,
    '/about': 'about'
}

const router = async () =>{

    const products = await getData();

    const header = null || document.getElementById('header');
    const content = null || document.getElementById('content');
   
    header.innerHTML = await Header();

    let hash = getHash();
    let route = await resolveRoutes(hash);
    let render = routes[route] ? routes[route] : Error404;

    content.innerHTML = await render(products);


}

export default router;