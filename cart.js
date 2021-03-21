const itemCount = document.querySelector("#item-count");



function showCartData(){
    const xhr = new XMLHttpRequest();
    
    xhr.open(
        "GET",
        "https://todoapp-a57e1-default-rtdb.firebaseio.com/cart.json",
        true
    );

    xhr.onreadystatechange = function(){
        if (xhr.readyState === xhr.DONE && xhr.status === 200){
            cartData = JSON.parse(xhr.response);
            console.log(cartData);
            // console.log(allUsers.id) //undefined case
            showDataToDom();
        }
    };
    xhr.send();
};

showCartData()

function showDataToDom(){
   
    const keys = Object.keys(cartData);
    // console.log(cartData[keys[1]])
    getData()
    // for(let i = 0; i < keys.length; i++){
    // //get method on api
        
    // }
}

let allUsers = {};//once initialised allUsers here
function getData(){
    const xhr = new XMLHttpRequest();
    
    xhr.open(
        "GET",
        "https://5d76bf96515d1a0014085cf9.mockapi.io/product/",
        true
    );

    xhr.onreadystatechange = function(){
        if (xhr.readyState === xhr.DONE && xhr.status === 200){
            allUsers = JSON.parse(xhr.response);
            // console.log(allUsers);
            // console.log(allUsers.id) //undefined case
            //function
            userCartShown();
        }
    };
    xhr.send();
}

const itemsList = document.querySelector("#items-list");
function userCartShown(){
    const keys = Object.keys(cartData);
    let amount = 0;
    for(let i = 0; i < keys.length; i++){
        
        itemCount.innerHTML = keys.length;

        let id = cartData[keys[i]].id;
        // console.log(id)
        // console.log(allUsers[id])
        // console.log(allUsers)

        const itemDiv = document.createElement("div");
        itemDiv.classList.add("cart-items")

        const itemImg = document.createElement("img");
        itemDiv.classList.add("cart-items-image")
        
        const itemName = document.createElement("p");
        itemDiv.classList.add("cart-items-name")

        const itemQuantity = document.createElement("p");
        itemDiv.classList.add("cart-items-quantity")

        const itemAmount = document.createElement("p");
        itemDiv.classList.add("cart-items-amount")

        itemsList.appendChild(itemDiv);
        itemDiv.appendChild(itemImg);
        itemDiv.appendChild(itemName);
        itemDiv.appendChild(itemQuantity);
        itemDiv.appendChild(itemAmount);

        itemImg.src = allUsers[id].photos[1];
        itemName.innerHTML = allUsers[id].name;
        itemAmount.innerHTML = allUsers[id].price;


        //total amount
        amount += allUsers[id].price;
        console.log(amount)

        const totalAmount = document.querySelector("#total-amount");
        totalAmount.innerHTML = amount;


    }
}

function placeOrder(){
    window.location.href = "./confirm.html";
}