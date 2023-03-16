const baseUrl = "https://dummyjson.com/products";

const getAllTops = () => {
    fetch(`${baseUrl}/category/tops`)
        .then(res => res.json())
        .then(console.log);      
}

const getTopById = (id) => {
    fetch(`${baseUrl}/${id}`)
        .then(res => res.json())
        .then(console.log);
}