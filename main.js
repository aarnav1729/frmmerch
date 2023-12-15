document.getElementById('menu').addEventListener('click', function() {
    document.body.classList.toggle('open');
});

document.getElementById('close').addEventListener('click', function() {
    document.body.classList.remove('open');
});

var products = [
    {id: "product1", image: "product_1.jpg", name: "Product 1", description: "Product 1 Description", price: "$99.99"},
    {id: "product2", image: "product_2.jpg", name: "Product 2", description: "Product 2 Description", price: "$99.99"},
    {id: "product3", image: "product_3.jpg", name: "Product 3", description: "Product 3 Description", price: "$99.99"},
    {id: "product4", image: "product_4.jpg", name: "Product 4", description: "Product 4 Description", price: "$99.99"},
    {id: "product5", image: "product_5.jpg", name: "Product 5", description: "Product 5 Description", price: "$99.99"},
    {id: "product6", image: "product_6.jpg", name: "Product 6", description: "Product 6 Description", price: "$99.99"},
    {id: "product7", image: "product_7.jpg", name: "Product 7", description: "Product 7 Description", price: "$99.99"},
    {id: "product8", image: "product_8.jpg", name: "Product 8", description: "Product 8 Description", price: "$99.99"},
    {id: "product9", image: "product_9.jpg", name: "Product 9", description: "Product 9 Description", price: "$99.99"},
    {id: "product10", image: "product_10.jpg", name: "Product 10", description: "Product 10 Description", price: "$99.99"},
    {id: "product11", image: "product_11.jpg", name: "Product 11", description: "Product 11 Description", price: "$99.99"},
    {id: "product12", image: "product_12.jpg", name: "Product 12", description: "Product 12 Description", price: "$99.99"},
    {id: "product13", image: "product_13.jpg", name: "Product 13", description: "Product 13 Description", price: "$99.99"},

];

function goToProductPage(productId) {
    window.location.href = `product.html?id=${productId}`;
}

function getProductIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}

function getProductInfo(productId) {
    var product = products.find(product => product.id === productId);
    return product;
}

window.onload = function () {
    var productId = getProductIdFromUrl();
    var productInfo = getProductInfo(productId);

    console.log("Product Info:", productInfo); 

    var productImageElement = document.getElementById('product-image');

    if (productInfo) {
        console.log("Setting image source:", productInfo.image);  // Check the image source
        document.getElementById('product-image').src = productInfo.image;
        document.getElementById('product-name').textContent = productInfo.name;
        document.getElementById('product-description').textContent = productInfo.description;
        document.getElementById('product-price').textContent = productInfo.price;
    } else {
        // Handle case where product info is not found
        document.getElementById('product-container').textContent = 'Product not found';
    }
};