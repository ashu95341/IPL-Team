const imageTop = document.querySelector('.image-main');
const productName = document.querySelector('#name-product');
// console.log(productName.innerHTML)
const brandName = document.querySelector('#name-brand');
const productPrice = document.querySelector('#price-product');
const productDescription = document.querySelector('#description-product');
const imageLower = document.querySelector('#all-images');
const imageLower1 = document.querySelector('.image-1');
const imageLower2 = document.querySelector('.image-2');
const imageLower3 = document.querySelector('.image-3');
const imageLower4 = document.querySelector('.image-4');
const imageLower5 = document.querySelector('.image-5');

const addToCart = document.querySelector('#add-to-cart');



let allUsers = {};
function getData(){
    const xhr = new XMLHttpRequest();
    
    xhr.open(
        "GET",
        "https://5d76bf96515d1a0014085cf9.mockapi.io/product",
        true
    );

    xhr.onreadystatechange = function(){
        if (xhr.readyState === xhr.DONE && xhr.status === 200){
            allUsers = JSON.parse(xhr.response);
            console.log(allUsers);
            // console.log(allUsers.id) //undefined case
            showDataToDom();
        }
    };
    xhr.send();
}
getData();

function showDataToDom(){
    const keys = Object.keys(allUsers);
    let i = localStorage.getItem('ProductNumber') - 1;
    // console.log(i);
    productName.innerHTML = allUsers[i].name;
    brandName.innerHTML = allUsers[i].brand;
    productPrice.innerHTML = allUsers[i].price;
    productDescription.innerHTML = allUsers[i].description;
    imageLower1.src = allUsers[i].photos[1];
    imageLower2.src = allUsers[i].photos[2];
    imageLower3.src = allUsers[i].photos[3];
    imageLower4.src = allUsers[i].photos[4];
    imageLower5.src = allUsers[i].photos[5];


    imageTop.src = allUsers[i].photos[1];


    addToCart.addEventListener('click', CartCount)
    let count = 0;
    function CartCount(){
        
        window.alert("Item sucessfully added to cart")
        count++ ;
    
        localStorage.setItem("CartItems", count);

        sendingCartData();
    }
    
    
    
}
//saving cart data in firebase 
//it is called on clicking add to cart button
function sendingCartData(){

    const productId = localStorage.getItem('ProductNumber') - 1;
    console.log(productId);
    const data = {
        id : productId
    };
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if (xhr.status === 1){ 
            console.log("req sent");
        }
        if (xhr.status === 4){ 
             console.log("save success");
        }
    };

    xhr.open(
        "POST",
        "https://todoapp-a57e1-default-rtdb.firebaseio.com/cart.json",
        true
    );
    xhr.send(JSON.stringify(data));
}

// function addToCart(){

// }

