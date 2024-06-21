let userInfo = document.querySelector("#user_info")
let userdata = document.querySelector("#user")
let links = document.querySelector("#links")

if (localStorage.getItem("username")) {
    links.remove()
    userInfo.style.display = "flex"
    userdata.innerHTML = "welcome  " + localStorage.getItem("username")

} else {
    userInfo.style.display = "none"
}



let logoutbtn = document.querySelector("#logout")
logoutbtn.addEventListener("click", function () {
    localStorage.clear();
    setTimeout(() => {
        window.location = "login.html";
    }, 1500)
}
)






let allproducts = document.querySelector(".products")

let products = [
    {
        id: 1,
        prouduct: "Shoes",
        price: "100$",
        color: "Baby blue",
        imageUrl: "image/Blue Drip Butterflies Custom Air Force 1.jpg"
        ,qty: 1
    }, {
        id: 2,
        prouduct: "Sweatshirt",
        price: "200$",
        color: "Purple",
        imageUrl: "image/Butterfly And Galaxy Print Thermal Lined Sweatshirt.jpg"
        ,qty: 1
    }, {
        id: 3,
        prouduct: "Coat",
        price: "500$",
        color: "Light pink roses",
        imageUrl: "image/Chica adolescente 1 pieza Abrigo de invierno de cintura con cordón ribete lanudo con capucha con forro térmico.jpg"
        ,qty: 1
    }, {
        id: 4,
        prouduct: "Sweater coat",
        price: "150%",
        color: "White,brown",
        imageUrl: "image/Daisy Flower Print Retro Sweater Cardigan with Dolman Long Sleeves Vneck Button Closure_ Super Soft Fabric in Black, Ivory, Green, Khaki.jpg"
        ,qty: 1
    }, {
        id: 5,
        prouduct: "Coat",
        price: "250$",
        color: "Black,white",
        imageUrl: "image/Harajuku cartoon printing on both sides wear quilted coat · Harajuku fashion · Online Store Powered by Storenvy.jpg"
        ,qty: 1
    }, {
        id: 6,
        prouduct: "Bage",
        price: "45$",
        color: "Light pink roses",
        imageUrl: "image/download (5).jpg"
        ,qty: 1
    }, {
        id: 7,
        prouduct: "Shoes",
        price: "200$",
        color: "Light pink roses",
        imageUrl: "image/Cool Shoes For Men Summer.jpg"
        ,qty: 1
    }, {
        id: 8,
        prouduct: "Coat",
        price: "450$",
        color: "White,black",
        imageUrl: "image/Damenbekleidung aus der Modewelt.jpg"
        ,qty: 1
    },
    {
        id: 9,
        prouduct: "Shoes",
        price: "200$",
        color: "Blue,bink",
        imageUrl: "image/Letter Graphic Colorblock High Top Skate Shoes.jpg"
        ,qty: 1
    },
    {
        id: 10,
        prouduct: "Sweater coat",
        price: "170$",
        color: "White,red",
        imageUrl: "image/download (3).jpg"
        ,qty: 1
    },
    {
        id: 11,
        prouduct: "Shoes",
        price: "320$",
        color: "Blue",
        imageUrl: "image/download (4).jpg"
        ,qty: 1
    },
    {
        id: 12,
        prouduct: "Bage",
        price: "65%",
        color: "Light pink roses",
        imageUrl: "image/download (6).jpg"
        ,qty: 1
    },
    {
        id: 13,
        prouduct: "Sweater coat",
        price: "420$",
        color: "Light pink roses",
        imageUrl: "image/Fashion Strawberry Sweater Coat.jpg"
        ,qty: 1
    },
    {
        id: 14,
        prouduct: "Shoes",
        price: "500$",
        color: "Light pink roses",
        imageUrl: "image/Korean shoes.jpg"
        ,qty: 1
    },
    {
        id: 15,
        prouduct: "Bage",
        price: "130$",
        color: "Black,white",
        imageUrl: "image/download (7).jpg"
        ,qty: 1
    },
    {
        id: 16,
        prouduct: "Hoodie",
        price: "542$",
        color: "Purple",
        imageUrl: "image/Women's Fleece Hoodie With Butterfly And Letter Print.jpg"
        ,qty: 1
    },
    {
        id: 17,
        prouduct: "Bage",
        price: "330$",
        color: "White",
        imageUrl: "image/fashion model.jpg"
        ,qty: 1
    },
    {
        id: 18,
        prouduct: "Shoes",
        price: "654$",
        color: "Purple",
        imageUrl: "image/Breakj Fashion Sneakers Women Shoes Platform Women Mesh Breathable Vulcanized Shoes Wedge Casual Shoes Woman Summer Zapatos Mujer7.jpg"
        ,qty: 1
    }
]



// onClick="heart(${item.id})"
function drawItem() {
    let y = products.map((item) => {
        return ` <section class="Home">
        <div class="container mt-5">
          <div class=" products">
            <div class=" product_item ">
                <img src="${item.imageUrl}" alt="TV" class="product_item_img">
                <div class="product_item_description">
                    <h3 class="add">${item.prouduct}</h3>
                    <p class="add">${item.price} </p>
                    <p class="add" id="add">${item.color}</p>
                    <div class="buttons">
                    <button class="add_to_cart purble" style="display:block;" onClick="addtocart(${item.id})">Add to cart</button>
                    <button class="add_to_cart remove_from_cart" style="background:red; display:none;" onClick="remove(${item.id})">remove from cart</button>
                    </div>
                    <div class="prouduct_item_action"style="display:inline" >
                        <i class="far fa-heart fav heart1" ></i>
                        <i class="fas fa-heart fav heart2" style="display:none;" onClick="addtofav(${item.id})"></i>
                    </div>
            
      </div>
      </div>
      </div>
        
    </section>`
    
    
    
}
)
allproducts.innerHTML=y;
}drawItem()








function search(){
    let searchBar = document.querySelector('.inp3').value.toUpperCase();
    let productlist=document.querySelectorAll('.product_item')
    let productname=document.getElementsByTagName('p')
    let productname2=document.getElementsByTagName('h3')

    for(let i=0;i<productname.length;i++){
        if((productname[i].innerHTML.toUpperCase().indexOf(searchBar) >= 0)||(productname2[i].innerHTML.toUpperCase().indexOf(searchBar) >= 0)){
            productlist[i].style.display="";
        }else{
            productlist[i].style.display="none";
        }
    }
    
}



{/* <span style="width:30px;height:20px;"></span> */}
// cartproductDiv.innerHTML += ` <p>   <img  src=" ${item.imageUrl}" 
// style="width:50px;height:60px; margin-righ= 50px !important;"/> <i class="fas fa-plus text-info  plus" style="font-size: 20px;margin-left=50px !important;
// color:rgb(189, 120, 214)!important ;" ></i> <span class="max">1</span> <i class="fas fa-minus text-info   minus" style="font-size: 20px;
// color:rgb(189, 120, 214)!important ;" ></i> <span class="min">200$</span> </p>`} )

let badge = document.querySelector(".badge")

let cartproductDiv = document.querySelector(".carts_product div ")
let addedItem = localStorage.getItem("productsINcart")? JSON.parse(localStorage.getItem("productsINcart")) : [];

if(addedItem){
    addedItem.map(item =>{
        cartproductDiv.innerHTML +=`<p>   <img  src=" ${item.imageUrl}" 
         style="width:50px;height:60px; margin-righ= 50px !important;"/> <i class="fas fa-plus text-info  plus" style="font-size: 20px;margin-left=50px !important;
         color:rgb(189, 120, 214)!important ;" onClick="addtocart(${item.id})" ></i> <span class="max">${item.qty}</span> <i class="fas fa-minus text-info   minus" style="font-size: 20px;
         color:rgb(189, 120, 214)!important ;"onClick="removetocart(${item.id})" ></i>  </p>`} )
        badge.style.display="block"
        badge.innerHTML = addedItem.length;
}


let allitems = [];
function addtocart(id){
            if(localStorage.getItem=("username")){
            let choosenItem = products.find((item) => item.id === id)
            let item = allitems.find((i) => i.id === choosenItem.id);
            if(item){
                choosenItem.qty += 1;
                
            }else{
                allitems.push(choosenItem);
                console.log("a",allitems);
            }
            cartproductDiv.innerHTML = "";
            allitems.forEach((item) => {
                cartproductDiv.innerHTML +=`<p>   <img  src=" ${item.imageUrl}" 
         style="width:50px;height:60px; margin-righ= 50px !important;"/> <i class="fas fa-plus text-info  plus" style="font-size: 20px;margin-left=50px !important;
         color:rgb(189, 120, 214)!important ;" onClick="addtocart(${item.id})"></i> <span class="max">${item.qty}</span> <i class="fas fa-minus text-info   minus" style="font-size: 20px;
         color:rgb(189, 120, 214)!important ;" onClick="removetocart(${item.id})"></i>  </p>`
            }
            )
            
            let cartproductlength = document.querySelectorAll(".carts_product div p")
            let uniqueitem = getuniquearr(addedItem , "id")
            addedItem=[...addedItem ,choosenItem]
            localStorage.setItem("productsINcart" ,JSON.stringify(uniqueitem) )
            let x = cartproductlength.length;
            badge.style.display="block"
            badge.innerHTML = x;
        }else{
            window.location="login.html"
        }
        }



        function removetocart(id){
            if(localStorage.getItem=("username")){
            let choosenItem = products.find((item) => item.id === id)
            let item = allitems.find((i) => i.id === choosenItem.id);
            if(item){
                choosenItem.qty -= 1;
                
            }else{
                allitems.push(choosenItem);
                console.log("a",allitems);
            }
            cartproductDiv.innerHTML = "";
            allitems.forEach((item) => {
                cartproductDiv.innerHTML -=`<p>   <img  src=" ${item.imageUrl}" 
         style="width:50px;height:60px; margin-righ= 50px !important;"/> <i class="fas fa-plus text-info  plus" style="font-size: 20px;margin-left=50px !important;
         color:rgb(189, 120, 214)!important ;" onClick="addtocart(${item.id})"></i> <span class="max">${item.qty}</span> <i class="fas fa-minus text-info   minus" style="font-size: 20px;
         color:rgb(189, 120, 214)!important ;" onClick="removetocart(${item.id})" ></i>  </p>`
            }
            )
            
            let uniqueitem = getuniquearr(addedItem , "id")
            addedItem=[...addedItem ,choosenItem]
            localStorage.setItem("productsINcart" ,JSON.stringify(uniqueitem) )
            
        }else{
            window.location="login.html"
        }
        }




function getuniquearr(arr , filtertype){
    let unique = arr.map((item) => item[filtertype])
    .map((item,i,final) => final.indexOf(item) ===i && i)
    .filter((item) => arr[item])
    .map((item) => arr[item]);
    return unique

}








let shoppingcartICON = document.querySelector(".shopping_cart")
let cartProducts = document.querySelector(".carts_product")

shoppingcartICON.addEventListener("click", opencart)

function opencart() { 
    if (cartproductDiv.innerHTML != "") {
        if (cartProducts.style.display == "block") {
            cartProducts.style.display = "none"
        } else {
            cartProducts.style.display = "block"
        }
    }
}
 
let hea4 = document.querySelectorAll(".prouduct_item_action");

hea4.forEach(item => {
    item.addEventListener("click", function() {
    
        let emptyheart = item.querySelector(".heart1");
        let fullheart = item.querySelector(".heart2");

        if (emptyheart.style.display === "block" || emptyheart.style.display === "") {
            emptyheart.style.display = "none";
            fullheart.style.display = "block";
        } else {
            emptyheart.style.display = "block";
            fullheart.style.display = "none";
        }
    });
});


let buttons = document.querySelectorAll(".buttons");

buttons.forEach(item => {
    item.addEventListener("click", function() {
    
        let add = item.querySelector(".purble");
        let remove = item.querySelector(".remove_from_cart");

        if (add.style.display === "block" || add.style.display === "") {
            add.style.display = "none";
            remove.style.display = "block";
        } else {
            add.style.display = "block";
            remove.style.display = "none";
        }
    });
});
function remove(id){
    let productsINcart =localStorage.getItem("productsINcart")
    if(productsINcart){
        let items=JSON.parse(productsINcart)
        let filltereditem=items.filter((e) => e.id!==id);
        localStorage.setItem("productsINcart",JSON.stringify(filltereditem));
        drawItem(filltereditem);
    }
}



let favorititems =localStorage.getItem("productsfav")? JSON.parse(localStorage.getItem("productsfav")) : [];


function addtofav(id){
            if(localStorage.getItem=("username")){
            let choosenItem = products.find((item) => item.id === id)
            choosenItem.liked=true;
            favorititems=[...favorititems ,choosenItem]
            let uniqueitem = getuniquearr(favorititems , "id")
            localStorage.setItem("productsfav" ,JSON.stringify(uniqueitem) )
           products.map(item => {
            if(item.id===choosenItem.id){
                item.liked=true
            }
           })
        localStorage.setItem('products',JSON.stringify(products))
           drawItem(products)
        }else{
            window.location="login.html"
        }
        }

