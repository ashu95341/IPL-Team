// /*===== SHOW NAVBAR  =====*/ 
// const showNavbar = (toggleId, navId, bodyId, headerId) =>{
//     const toggle = document.getElementById(toggleId),
//     nav = document.getElementById(navId),
//     bodypd = document.getElementById(bodyId),
//     headerpd = document.getElementById(headerId)

//     // Validate that all variables exist
//     if(toggle && nav && bodypd && headerpd){
//         toggle.addEventListener('click', ()=>{
//             // show navbar
//             nav.classList.toggle('show')
//             // change icon
//             toggle.classList.toggle('bx-x')
//             // add padding to body
//             bodypd.classList.toggle('body-pd')
//             // add padding to header
//             headerpd.classList.toggle('body-pd')
//         })
//     }
// }

// showNavbar('header-toggle','nav-bar','body-pd','header')

// /*===== LINK ACTIVE  =====*/ 
// const linkColor = document.querySelectorAll('.nav_link')

// function colorLink(){
//     if(linkColor){
//         linkColor.forEach(l=> l.classList.remove('active'))
//         this.classList.add('active')
//     }
// }
// linkColor.forEach(l=> l.addEventListener('click', colorLink))

//main content products
// const homepageComponent = document.getElementById("homepage");
// const productdetailsComponent = document.getElementById("productdetails");
// console.log(homepageComponent); //workinggud



// const productElements = document.querySelector()

const xhr = new XMLHttpRequest();
xhr.open(
    "GET",
    "https://5d76bf96515d1a0014085cf9.mockapi.io/product/",
    true
);
xhr.onreadystatechange = function(){
    if(this.readyState === 4 && this.status === 200){
        const allUsers = Object.values(JSON.parse(this.response));
        console.log(allUsers);
        
        const keys = Object.keys(allUsers);
        // console.log(Object.values(allUsers))
        
        // console.log(keys)
        // for(let i = 0; i < keys.length; i++){
        // console.log(keys[i]);
        // console.log(allUsers[i].name); //working
        // console.log(allUsers[i].photos[0]);//working
        // }

        // showProductCard();error giving
        for(let i = 0; i < keys.length; i++){
            

            const productCardDiv = document.createElement("div");
            productCardDiv.classList.add("productcard");
        
            const referenceOperator = document.createElement("a");
            // console.log(allUsers[i].id);//working gud
            // referenceOperator.href = '/details.html?p=' + allUsers[i].id;
            // console.log(referenceOperator.href);
            const productImage = document.createElement("img");
            productImage.classList.add("product-image");
            
            productImage.src = allUsers[i].photos[0];
            // productImage.onclick = console.log("1")//why its not working?
            // document.getElementsByClassName("productImage").src = allUsers[i].photos[0];//check why its not working
            // console.log(allUsers[i].photos[0]);//best tester
            // console.log([keys[i]].photos);

            // console.log(allUsers[i].name);
            // console.log(allUsers[i].isAccessory);

            const productName = document.createElement("h4");
            productName.innerText = allUsers[i].name;
            


            const brandName = document.createElement("h5");
            brandName.innerText = allUsers[i].brand;


            const productPrice = document.createElement("p");
            productPrice.innerText = "RS." + allUsers[i].price;
        
        
            productCardDiv.appendChild(referenceOperator);
            productCardDiv.appendChild(productImage);
            productCardDiv.appendChild(productName);
            productCardDiv.appendChild(brandName);
            productCardDiv.appendChild(productPrice);
    
            // document.getElementsByTagName("section")[0].append(productCardDiv);
            
            console.log(allUsers[i].isAccessory);
            if(allUsers[i].isAccessory === false){
                document.getElementsByTagName("section")[0].append(productCardDiv); //also try using class and id method
                // console.log("is clothing");//working gud
            }
            if(allUsers[i].isAccessory === true){
                document.getElementsByTagName("section")[1].append(productCardDiv);
                // console.log("is accessory");//working gud
            }

            //click events

            productCardDiv.id = keys[i];

            productCardDiv.onclick = userClicked;

            
            
                      
            
            function userClicked(event){
                event.target.style.color = "red";
                localStorage.setItem("ProductNumber", allUsers[i].id);
                // console.log("the id clicked is", allUsers[i].id);
                window.location.href = "./details.html";
                
            }  
        }
        
        // function productDetailsShow(){
        //     for(let i = 0; i < keys.length; i++){
        //         document.getElementById("name-products").innerText = allUsers[i].name;
        //     }
        // }
        // productDetailsShow();
    }

}
xhr.send();





// function showProductCard(event){
//     for(let i = 0; i < keys.length; i++){

//         const productCardDiv = document.createElement("div");
//         productCardDiv.classList.add("productcard");
    
//         const referenceOperator = document.createElement("a");
    
//         const productImage = document.createElement("img");
//         document.getElementsByTagName("img").src = allUsers[i].photos[0];
//         console.log([keys[i]].photos);
        
        
//         productImage.classList.add("product-image");
    
//         const productName = document.createElement("h4");
//         const brandName = document.createElement("h5");
//         const productPrice = document.createElement("p");
    
    
//         productCardDiv.appendChild(referenceOperator);
//         productCardDiv.appendChild(productImage);
//         productCardDiv.appendChild(productName);
//         productCardDiv.appendChild(brandName);
//         productCardDiv.appendChild(productPrice);

//         document.getElementsByTagName("section")[0].append(productCardDiv);


//     }

// const imageisclicked = document.

// if(productImage.onclick){
//     homepageComponent.remove();
// }
// else{
//     productdetailsComponent.remove();
// }

// function userClicked(event){
    
// }

    
    


    
