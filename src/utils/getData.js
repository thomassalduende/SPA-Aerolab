const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzFiZTU3MzFmMWY0NTAwMjEwOTliNWYiLCJpYXQiOjE2NjI3NzI1OTV9.B0rJdttOSv2DhtG_7965w0dr6SgPmtybXu-54H-gB4Q';
const API = `https://coding-challenge-api.aerolab.co/products?token=${token}`;

const getData = async (id) => {
    const apiURL = id ? `${API}${id}` : API;

    try 
    {
        const response = await fetch(apiURL);
        const data = response.json();
        return data;
    } catch(error) 
    {
        console.log('Fetch Error..!!', error);
    };
    
};

export default getData;












