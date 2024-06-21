// let productsINcart =localStorage.getItem("productsINcart")
let noproducts = document.querySelector(".noproduct")
let allproducts2 = document.querySelector(".products")
let favproduct = document.querySelector(".fav")
// if(productsINcart){
//     let item = JSON.parse(productsINcart);
//     drawcartproduct(item);
// }
function drawcartproduct(allproducts=[]){
  if(JSON.parse(localStorage.getItem('productsINcart')).length===0){
    noproducts.innerHTML="there is no items"
  }


    let products= JSON.parse(localStorage.getItem('productsINcart'))|| allproducts;
    let y=products.map((item) => {
            return `
        
            <section class="Home">
            <div class="container mt-5">
          <div class=" products">
            <div class=" product_item ">
                <img src="${item.imageUrl}" alt="TV" class="product_item_img">
                <div class="product_item_description">
                    <h3 class="add">${item.prouduct}</h3>
                    <p class="add">${item.price} </p>
                    <p class="add" id="add">${item.color}</p>
                    <p class="add">${item.qty} </p>
                    <button class="add_to_cart remove_from_cart" style="background:red;" onClick="remove(${item.id})">remove from cart</button>
                    
            
      </div>
      </div>
      </div>
        
      </section>
        
    `
    }
    )
    
    allproducts2.innerHTML = y;
    
}drawcartproduct()

// 
    // <button class="add_to_cart remove_from_cart" style="background:red;" onClick="remove(${item.id})">remove from cart</button>
    // allproducts.innerHTML=y;}






    function drawcartproduct2(allproducts2=[]){
        // if(JSON.parse(localStorage.getItem('productsfav')).length===0){
        //   noproducts.innerHTML="there is no items"
        // }
      
      
          let products= JSON.parse(localStorage.getItem('productsfav'))|| allproducts2;
          let y=products.map((item) => {
                  return `
              
                  <section class="Home">
                  <div class="container mt-5">
                <div class=" products">
                  <div class=" product_item ">
                      <img src="${item.imageUrl}" alt="TV" class="product_item_img">
                      <div class="product_item_description">
                          <h3 class="add">${item.prouduct}</h3>
                          <p class="add">${item.price} </p>
                          <p class="add" id="add">${item.color}</p>
                          <p class="add">${item.qty} </p>
                          <button class="add_to_cart remove_from_cart" style="background:red;" onClick="remove(${item.id})">remove from cart</button>
                          
                  
            </div>
            </div>
            </div>
              
            </section>
              
          `
          }
          )
          
          favproduct.innerHTML = y;
          
      }drawcartproduct2()
      












function remove(id){
    let productsINcart =localStorage.getItem("productsINcart")
    if(productsINcart){
        let items=JSON.parse(productsINcart)
        let filltereditem=items.filter((e) => e.id!==id);
        localStorage.setItem("productsINcart",JSON.stringify(filltereditem));
        drawcartproduct(filltereditem);
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
    
// let remove_bottom = document.querySelector(".remove_from_cart")
// remove_bottom.addEventListener("click",removefromcart)
//  function removefromcart(id){
//     let choosenItem = products.remove((item) => item.id === id)
//  }
 