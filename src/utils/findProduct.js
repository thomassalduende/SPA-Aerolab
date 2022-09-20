import getHash from "../utils/getHash";

const findProduct = (products) => 
{
    const id = getHash();
    const product = products.find((element) => 
    {
      return element._id === id ? element : null;
    });
    return product
};

export default findProduct;