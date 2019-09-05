const burger = document.querySelector('.burger');
const navLink = document.querySelector('.nav-linky');
const navli = document.querySelectorAll('.nav-linky li')
burger.addEventListener('click', function (e) {

    navLink.classList.toggle('nav-active');

    navli.forEach(function (li, index) {
        if (li.style.animation) {
            li.style.animation = '';
        } else {


            li.style.animation = `navLinkFade 0.6s ease forwards ${index/7+0.5}s`
        }
    })
    burger.classList.toggle('toggle')

})


// tabbed area
function onTabclick(e) {
    var activeTabs = document.querySelectorAll('.active');
    activeTabs.forEach(function (tab) {
        tab.className = tab.className.replace('active', '');
    })
    e.target.parentElement.className += ' active';
    document.getElementById(e.target.href.split('#')[1]).className += ' active';
}




const element = document.getElementById('nav-tab');
element.addEventListener('click', onTabclick, false);



//// offer area
const offerForm = document.forms['offer-form'];
offerForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const offerBoxOne = document.querySelector('.offer-div');
    const offerBoxTwo = document.querySelector('.offer-div1');
    //    console.log(offerBoxTwo);
    const offerHeadOne = document.querySelector('.down');
    const offerHeadTwo = document.querySelector('.up');
    const feedBack = document.querySelector('.offer-feedback');

    const name = document.querySelector('.input-name').value;
    const lastName = document.querySelector('.input-lastname').value;
    const email = document.querySelector('.input-email').value;

    if (name === '' || lastName === '' || email === '') {
        feedBack.textContent = 'Please fill all fields to get offers';
        feedBack.classList.toggle('error')
    } else {
        feedBack.textContent = 'Congratulations your offer is buy two get one FREE';

        offerBoxOne.classList.toggle('offerBackg');
        offerBoxTwo.classList.toggle('offerBackg');
        offerHeadOne.classList.toggle('offerBackg');
        offerHeadTwo.classList.toggle('offerBackg');
        feedBack.classList.toggle('success')
    }


})


/// client slider part

const slides = document.querySelectorAll('.slide');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const auto = true;
const intervalTime = 3000;
let slideInterval;
const nextSlide = () => {
    //get class
    const current = document.querySelector('.current');
    //remove class
    current.classList.remove('current');
    //nextslide
    if (current.nextElementSibling) {
        current.nextElementSibling.classList.add('current');
    } else {
        slides[0].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'))
}

next.addEventListener('click', e => {
    nextSlide();
    if (auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
})

const prevSlide = () => {
    //get class
    const current = document.querySelector('.current');
    //remove class
    current.classList.remove('current');
    //nextslide
    if (current.previousElementSibling) {
        current.previousElementSibling.classList.add('current');
    } else {
        slides[slides.length - 1].classList.remove('current');
    }
    setTimeout(() => current.classList.remove('current'))
}
prev.addEventListener('click', e => {
    prevSlide();
    if (auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
})


if (auto) {
    slideInterval = setInterval(nextSlide, intervalTime);
}
///cart area




// modal area
const closeModal = document.querySelector('.cart-modal-close');
const cartModal = document.querySelector('.cart-modal');
closeModal.addEventListener('click', function (e) {
    cartModal.classList.remove('show');
    const remove = e.target.parentElement.previousElementSibling;
    while (remove.hasChildNodes) {
        remove.removeChild(remove.firstChild);
    }


})




/////purchase button
const purchaseBtn = document.querySelectorAll('.cart-shop-item');
purchaseBtn.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        const shopItem = e.target.parentElement.parentElement;
        const transperDiv = e.target.parentElement;

        const imageView = shopItem.querySelector('.prod-img').src;
        const priceName = transperDiv.querySelector('.shop-item-price').textContent;
        const title = transperDiv.querySelector('.shop-item-name').textContent;
        addItemToModal(imageView, priceName, title);



    })
})


function addItemToModal(imageView, priceName, title) {
    const divModalContent = document.createElement('div');
    const divDetails=document.createElement('div');
    const modalDiv = document.querySelector('.cart-modal-item');
    const modalBig = document.querySelector('.cart-modal');
    const detaily=document.querySelector('.detaily');
    

    const innerDivItems = `<div class="modal-product col-9 my-2 mx-auto">
   <div class="img-container">
<img class="img-fluid  prod-img" src="${imageView}" width="500" height="334">
<div class="transper">
<div class="price-top">
<h3 class="shop-item-price pl-3 pb-3">${priceName}</h3>
</div>     
<div class="img-title">
<h2 class="shop-item-name">${title}</h2>
</div>
    
</div>
</div>
    </div>
<div class="detaily">
<h2 class=" more-details-title">${title}</h2>
    <p style="color:wheat" class="lead text-light more-details-para">
    This is the latest<strong> ${title} </strong>  brought only a few days ago...It is now in the market and ready for purchase.It is with best makers...they say where classic to earn full respect.Thus <strong> ${title} </strong>  ensures a classy look....hurry up before they get finished in the market....
    
    </p>
</div>

`   
    divModalContent.innerHTML = innerDivItems;
    modalDiv.append(divModalContent);
    modalBig.classList.add('show');
}







//cart button

const cartBtn = document.querySelector('.cartbtn');
const overLay = document.querySelector('.overlay');
cartBtn.addEventListener('click', function (e) {
    overLay.classList.toggle("transperBg");
    cartBtn.classList.toggle('cliked');
})


//addBtn
const addBtn = document.querySelector('.cart-shop-itemyy');
addBtn.addEventListener('click', function (e) {
    const shopItem = document.querySelector('.cart-modal-item');
    const imageView = shopItem.querySelector('.prod-img').src
    const priceName = shopItem.querySelector('.shop-item-price');
    const price = priceName.textContent.slice(5);
    const title = shopItem.querySelector('.shop-item-name').textContent;
    const finalPrice = parseFloat(price);

    additemToCart(imageView, finalPrice, title);
    showTotals();

})

function additemToCart(imageView, finalPrice, title) {
    var prodTitle=document.getElementsByClassName('prodTitle');
    for(var i=0; i<prodTitle.length; i++){
        if(prodTitle[i].textContent===title){
            alert('Item already added to the cart');
            return;
        }
    }
    
    const cartDiv = document.createElement('div');
    const cartCont = document.querySelector('.cartArea');
    const cartInner = `    
<div class="cart-item">
<img src="${imageView}" class="cart-imgy">
                    <div>
                        <h4 class="prodTitle">${title}</h4>
                        <h5 class="cart-item-price" id="cart-item-price">${finalPrice}</h5>
                        <span class="remove-item"><img src="delete-forever%20(1).png" class="remove-item"></span>
                    </div>
                    <div>
                        
                <img class="decrement" src="prev.png" width="25" height="25">
                        <span id="item-amount" class="item-amount"><strong>1</strong></span>
                  <img class="increment" src="next.png" width="25" height="25">
                    </div>
                  </div>
                </div>`
    cartDiv.innerHTML = cartInner;
    cartCont.append(cartDiv);
    
}

////add event listeners
const cartContainer = document.querySelector('.cart-container');
cartContainer.addEventListener('click', function (event) {
    if (event.target.className == 'remove-item') {
        const remov = event.target.parentElement.parentElement.parentElement;
        remov.parentNode.removeChild(remov);
        showTotals();
    } else if (event.target.className == 'increment') {
        const valu = 1;
        const num = event.target.previousElementSibling

        const amount = parseFloat(num.textContent);
        num.textContent = amount + valu;
        updateTotals();
    } else if (event.target.className == 'decrement') {
        const valu = 1;
        const num = event.target.nextElementSibling
        const amount = parseFloat(num.textContent);
        if (amount > 1) {
            num.textContent = amount - valu;
            updateTotals();
        }
    }
});


//// update totals

function updateTotals(){
    var total=0;
    const cart=cartContainer.getElementsByClassName('cart-item');
    for(var i=0; i<cart.length; i++){
   var cartItems=cart[i];
    var cartPrice=cartItems.getElementsByClassName('cart-item-price')[0];
    var quantityELement=cartItems.getElementsByClassName('item-amount')[0];
     var price=parseFloat(cartPrice.innerText);
    var quantity=quantityELement.innerText;
        total+= (price*quantity);
    }
    total=Math.round(total*100)/100;

    document.getElementsByClassName('cart-total')[0].innerText=total;
}

//show totals

function showTotals(){
    const total=[];
    const items=document.querySelectorAll(".cart-item-price");
    items.forEach(function(item){
        total.push(parseFloat(item.textContent));
    })
      const totalprice=total.reduce(function(total,item){                                         
          total+=item;
          return total;
      },0)
     document.getElementById('cart-total').textContent=totalprice;
    document.getElementById('cart-items').textContent=total.length;
    
}

//purchase item and clear cart
const clearCartbtn=document.getElementById('clear-cart')
clearCartbtn.addEventListener('click',function(event){
    const cart=event.target.parentElement.previousElementSibling
    while(cart.hasChildNodes){
        cart.removeChild(cart.firstChild);
        showTotals();
    }
})
//purchaseBtn
 const purchaseeeeyBtn=document.getElementById('purchase-cart');
purchaseeeeyBtn.addEventListener('click',function(e){
    alert('thankyou for the purchase.... you will receive your products instanly!!')
     const cart=event.target.parentElement.previousElementSibling
    while(cart.hasChildNodes){
        cart.removeChild(cart.firstChild);
        overLay.classList.remove("transperBg");
    cartBtn.classList.remove('cliked');
        showTotals();
    }
})

// search filter

const searchBar=document.forms['searchBar'].querySelector('input');
const availableProducts=document.querySelector('.allCategories');
searchBar.addEventListener('keyup',function(e){
    
    const term=e.target.value.toLowerCase();
  const productContainer=availableProducts.getElementsByClassName('img-container');
    
    Array.from(productContainer).forEach(function(search){
        const title=search.querySelectorAll('.shop-item-name');
        title.forEach(function(searching){
          const name=searching.textContent;  
         
        if(name.toLowerCase().indexOf(term)!=-1){
        search.style.display='block'
    }
        else{
            search.style.display='none';
        }        
            
        })

        
    })
})

