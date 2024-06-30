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
        price: "150$",
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
        price: "65$",
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
//

function drawItem() {
    let y = products.map((item) => {
        x= ` <section class="Home">
        <div class="container mt-5">
          <div class=" products">
            <div class=" product_item ">
                <img src="${item.imageUrl}" alt="TV" class="product_item_img">
                <div class="product_item_description">
                    <h3 class="add">${item.prouduct}</h3>
                    <p class="add">${item.price} </p>
                    <p class="add" id="add">${item.color}</p>
                    <div class="buttons" id=${item.id}>
                    <button class="add_to_cart purble" style="display:block;" onClick="addtocart(${item.id})">Add to cart</button>
                    <button class="add_to_cart remove_from_cart" style="background:red; display:none;" onClick="removetocart(${item.id})">remove from cart</button>
                    </div>
                    <div class="prouduct_item_action"style="display:inline"id=${item.id} >
                    <i class="far fa-heart fav heart1"style="display:block" onClick="addtofav(${item.id})"></i>
                        <i class="fas fa-heart fav heart2" style="display:none" onClick="removeaddtofav(${item.id})" ></i>
                    </div>
            
      </div>
      </div>
      </div>
        
    </section>`
    
    
    
    allproducts.innerHTML+=x;
}
)
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





let badge = document.querySelector(".badge")

let cartproductDiv = document.querySelector(".carts_product div ")
let cartproduct = document.querySelector(".carts_product")
let addedItem = localStorage.getItem("productsINcart")? JSON.parse(localStorage.getItem("productsINcart")) : [];
view()
function view(){
if(addedItem){
    addedItem.map(item =>{
        cartproductDiv.innerHTML +=`<p>   <img  src=" ${item.imageUrl}" 
         style="width:50px;height:60px; margin-righ= 50px !important;"/> <i class="fas fa-plus text-info  plus" style="font-size: 20px;margin-left=50px !important;
         color:rgb(189, 120, 214)!important ;" onClick="plusCart(${item.id})" ></i> <span class="max">${item.qty}</span> <i class="fas fa-minus text-info   minus" style="font-size: 20px;
         color:rgb(189, 120, 214)!important ;"onClick="minsCart(${item.id})" ></i>  </p>`} )
        badge.style.display="block"
        badge.innerHTML = addedItem.length;
}
}
let buttons = document.querySelectorAll(".buttons");


let rendercart = (item)=>{
    return     cartproductDiv.innerHTML +=`<p>   <img  src=" ${item.imageUrl}" 
    style="width:50px;height:60px; margin-righ= 50px !important;"/> <i class="fas fa-plus text-info  plus" style="font-size: 20px;margin-left=50px !important;
    color:rgb(189, 120, 214)!important ;" onClick="plusCart(${item.id})"></i> <span class="max">${item.qty}</span> <i class="fas fa-minus text-info   minus" style="font-size: 20px;
    color:rgb(189, 120, 214)!important ;" onClick="minsCart(${item.id})"></i>  </p>`
} 
let arrlocalstorage = JSON.parse(localStorage.getItem("productsINcart"))||[]
let numberBadge = arrlocalstorage.length||0

function addtocart(id){
    let selector = products.filter(e=>e.id == id)
    rendercart(selector[0])
    if(localStorage.getItem("username")){
        arrlocalstorage = JSON.parse(localStorage.getItem("productsINcart")) || []
        arrlocalstorage.push(selector[0])
        localStorage.setItem("productsINcart",JSON.stringify(arrlocalstorage))
        badge.innerHTML = arrlocalstorage.length
    }else{
        window.location="login.html"
    }
}
buttons.forEach(e=>{

     let check = arrlocalstorage.filter(el=>el.id ==e.id)
    if(check.length>0){
        e.children[0].style.display = "none"
        e.children[1].style.display = "block"
    }
})

function removetocart(id){
    let newstorage =[]
    buttons.forEach(e=>{
        if(e.id == id){
            cartproductDiv.innerHTML = ""
            e.children[0].style.display = "block !important"
            e.children[1].style.display = "none"
            let arrlocalstorage = JSON.parse(localStorage.getItem("productsINcart"))
            newstorage = arrlocalstorage.filter(e=>e.id != id)
            newstorage.forEach(e=>rendercart(e))
            localStorage.setItem("productsINcart",JSON.stringify(newstorage))
            badge.innerHTML = newstorage.length
            if( cartproductDiv.innerHTML==""){
                cartproduct.style.display="none"
            }
        }
    })
}        

function plusCart(id){
    let arrlocalstorage = JSON.parse(localStorage.getItem("productsINcart"))
     arrlocalstorage.forEach((e,ind)=>{
        if(e.id == id){
            arrlocalstorage[ind].qty +=1
        }
    })
    cartproductDiv.innerHTML = ""
    arrlocalstorage.forEach(e=>rendercart(e))
    localStorage.setItem("productsINcart",JSON.stringify(arrlocalstorage))
}

function minsCart(id){
    let arrlocalstorage = JSON.parse(localStorage.getItem("productsINcart"))
     arrlocalstorage.forEach((e,ind)=>{
        if(e.id == id){
            arrlocalstorage[ind].qty -=1
            if(arrlocalstorage[ind].qty  == 0){
                arrlocalstorage.splice(ind,1)
                buttons.forEach(e=>{
                    if(e.id == id){
                        e.children[0].style.display = "block"
                        e.children[1].style.display = "none"
                    }
                })
            }
        }
    })

    cartproductDiv.innerHTML = ""
    arrlocalstorage.forEach(e=>rendercart(e))
    badge.innerHTML = arrlocalstorage.length
    localStorage.setItem("productsINcart",JSON.stringify(arrlocalstorage))
    if( cartproductDiv.innerHTML==""){
        cartproduct.style.display="none"
    }
}





  



function getuniquearr(arr , filtertype){
    let unique = arr.map((item) => item[filtertype])
    .map((item,i,final) => final.indexOf(item) ===i && i)
    .filter((item) => arr[item])
    .map((item) => arr[item]);
    return unique

}








// let shoppingcartICON = document.querySelector(".shopping_cart")
let shoppingcartICON = document.querySelector(".carticon")
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




buttons.forEach(item => {
    item.addEventListener("click", function() {
        
        let add = item.querySelector(".purble");
        let remove1 = item.querySelector(".remove_from_cart");
        
        if (add.style.display === "block" || add.style.display === "") {
            add.style.display = "none";
            remove1.style.display = "block";
        } else {
            
                add.style.display = "block";
                remove1.style.display = "none";
            
        }
    });
});
function remove(id){
    let productsINcart =localStorage.getItem("productsINcart")
    
    if(productsINcart){
        let items=JSON.parse(productsINcart)
     
        let filltereditem=items.filter((e) => e.id!==id);
        console.log(filltereditem)
        localStorage.setItem("productsINcart",JSON.stringify(filltereditem));
        drawItem(filltereditem);
    }
}



let favorititems =localStorage.getItem("productsfav")? JSON.parse(localStorage.getItem("productsfav")) : [];

let arrlocalstorage2 = JSON.parse(localStorage.getItem("productsfav"))||[]
function addtofav(id){
            
       
        let selector2 = products.filter(e=>e.id == id)
   
       
        arrlocalstorage2 = JSON.parse(localStorage.getItem("productsfav")) || []
        arrlocalstorage2.push(selector2[0])
        localStorage.setItem("productsfav",JSON.stringify(arrlocalstorage2))
       
        }
        hea4.forEach(e=>{
   
            let check2 = arrlocalstorage2.filter(el=>el.id ==e.id)
           if(check2.length>0){
               e.children[0].style.display = "none"
               e.children[1].style.display = "block"
           }
       })
        function removeaddtofav(id){
       
        let newstorage2 =[]
        hea4.forEach(e=>{
            if(e.id == id){
                cartproductDiv.innerHTML = ""
                e.children[0].style.display = "block !important"
                e.children[1].style.display = "none"
                let arrlocalstorage2 = JSON.parse(localStorage.getItem("productsfav"))
                newstorage2 = arrlocalstorage2.filter(e=>e.id != id)
                newstorage2.forEach(e=>rendercart(e))
                localStorage.setItem("productsfav",JSON.stringify(newstorage2))
                
            }
        })
        }


