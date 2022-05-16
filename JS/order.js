const wholeMenu = document.querySelector('.menu-items');
const filterBtns = document.querySelectorAll('.filter-btn');
const menuHeader = document.querySelector('.menu-header');

// filterBtns.forEach(btn => {
//     btn.addEventListener('click', event => {
//         const dataCategory = event.currentTarget.dataset.id;
//         const menuCategory = menu.filter(menuItem => 
//             menuItem.category === dataCategory
//         );
//         displayMenuItems(menuCategory);
//         displayMenuHead(menuCategory);
        
//         filterBtns.forEach(btn => {
//             btn.classList.remove('chosen');
//         });
//         btn.classList.add('chosen');
//     });
// });

// window.addEventListener('DOMContentLoaded', () => {
//     const appCategory = menu.filter(menuItem => 
//         menuItem.category === 'appetizers'
//         );
//     displayMenuItems(appCategory);
//     displayMenuHead(appCategory);
// });

// function displayMenuHead(menuItems){
//     let menuHead = menuItems.map(obj => {
//         return `<h2>
//                     ${obj.category}
//                 </h2>`;
//     });
//     menuHead = menuHead[0];
//     menuHeader.innerHTML = menuHead;
// }

// function displayMenuItems(menuItems){
//     let menuInfo = menuItems.map(item => {
//         return `<article class="menu-item">
//                     <img class="food-img" src=${item.img} alt="">
//                     <div class="item-cont">
//                         <div class="item-header">
//                             <h4 class="menu-title">
//                                 ${item.title}
//                             </h4>
//                             <p class="price">
//                                 $${item.price}
//                             </p>
//                         </div>
//                         <p class="menu-info">
//                             ${item.info}
//                         </p>
//                     </div>
//                 </article>`;
//     });
//     menuInfo = menuInfo.join('');
//     wholeMenu.innerHTML = menuInfo;
// };


const cartAccess = document.querySelector('.cart-access');
const closeCartBtn = document.querySelector('.close-cart');
const clearCartBtn = document.querySelector('.clear-cart');
const cartDOM = document.querySelector('.cart');
const cartOverlay = document.querySelector('.cart-overlay');
const itemCount = document.querySelector('.item-count');
const cartTotal = document.querySelector('.cart-total');
const cartContent = document.querySelector('.cart-content');
const productsDOM = document.querySelector('.menu-items');

let cart = [];
// buttons
let buttonsDOM = [];

// getting the products
class Products {
    async getProducts(){
        try {
            // let result = await fetch('/JS/menus.js');
            // let data = await result.json();
            // return data;
            let menus = menu.map(item => {
                const id = item.id;
                const title = item.title;
                const price = item.price;
                const info = item.info;
                const category = item.category;
                const img = item.img;
                return {id, title, category, price, info, img};
            })
            return menus;
        } catch (error) {
            console.log(error);
        }
    };
}

class UI{
    // display products
    displayProducts(menus){
        let result = '';
        menus.forEach(menu => {
            result += `
            <article class="menu-item">
                    <img class="food-img" src=${menu.img} alt="">
                    <div class="item-cont">
                        <div class="item-header">
                            <h4 class="menu-title">
                                ${menu.title}
                            </h4>
                            <p class="price">
                                ${menu.price}
                            </p>
                        </div>
                        <p class="menu-info">
                            ${menu.info}
                        </p>
                        <button class="cart-btn" data-id=${menu.id}>
                            <i>
                                <?xml version="1.0" encoding="UTF-8"?>
                                <svg width="66px" height="58px" viewBox="0 0 66 58" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                    <title>Shape</title>
                                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                        <path d="M2.25655008,-2.79043382e-06 C1.0596563,-2.79043382e-06 0.089,0.970614808 0.089,2.16754729 C0.089,3.36444107 1.05911445,4.33509737 2.25655008,4.33509737 L9.16533375,4.33509737 L16.6158437,39.4886029 C16.9106645,40.8120199 17.7779684,41.9131472 18.8735739,41.9048177 L54.9972584,41.9048177 C56.1422502,41.9207589 57.1955136,40.882603 57.1955136,39.7370822 C57.1955136,38.5920904 56.1422373,37.5534055 54.9972584,37.5695321 L20.6346036,37.5695321 L19.7088309,33.234432 L57.887695,33.234432 C58.8583126,33.2273766 59.7750285,32.4880651 59.9871262,31.5411343 L65.044313,9.86692359 C65.3260261,8.6090453 64.2339555,7.23479713 62.9448818,7.22512114 L14.2230624,7.22512114 L13.0488362,1.71638827 C12.8437311,0.753833998 11.9103983,-0.000647856228 10.9266988,-2.79043382e-06 L2.25655008,-2.79043382e-06 Z M15.1256127,11.5598343 L60.2131314,11.5598343 L56.1719232,28.8992028 L18.8071322,28.8992028 L15.1256127,11.5598343 Z M26.0983108,43.3486766 C22.1337365,43.3486766 18.8735739,46.6088391 18.8735739,50.5734135 C18.8735739,54.5379879 22.1337365,57.7981504 26.0983108,57.7981504 C30.0628852,57.7981504 33.3230477,54.5379879 33.3230477,50.5734135 C33.3230477,46.6088391 30.0628852,43.3486766 26.0983108,43.3486766 Z M47.7725215,43.3486766 C43.8079471,43.3486766 40.5477846,46.6088391 40.5477846,50.5734135 C40.5477846,54.5379879 43.8079471,57.7981504 47.7725215,57.7981504 C51.7370959,57.7981504 54.9972584,54.5379879 54.9972584,50.5734135 C54.9972584,46.6088391 51.7370959,43.3486766 47.7725215,43.3486766 L47.7725215,43.3486766 Z M26.0983108,47.6837768 C27.7200062,47.6837768 28.9879476,48.951731 28.9879476,50.5734135 C28.9879476,52.195096 27.7199933,53.4630502 26.0983108,53.4630502 C24.4766154,53.4630502 23.2086741,52.1945928 23.2086741,50.5734135 C23.2086741,48.9517181 24.4771315,47.6837768 26.0983108,47.6837768 Z M47.7725215,47.6837768 C49.3942169,47.6837768 50.6621582,48.951731 50.6621582,50.5734135 C50.6621582,52.195096 49.394204,53.4630502 47.7725215,53.4630502 C46.1508261,53.4630502 44.8828848,52.1945928 44.8828848,50.5734135 C44.8828848,48.9517181 46.1513422,47.6837768 47.7725215,47.6837768 Z" id="Shape" fill="currentColor" fill-rule="nonzero"></path>
                                    </g>
                                </svg>
                            </i>Add to cart
                        </button>
                    </div>
                </article>
            `;
        });
        productsDOM.innerHTML = result;
    }
    getCartButtons(){
        const buttons = [...document.querySelectorAll('.cart-btn')];
        buttonsDOM = buttons;
        buttons.forEach(button => {
            let id = button.dataset.id;
            let inCart = cart.find(item => item.id == id);
            if (inCart) {
                button.innerText = 'In Cart';
                button.disabled = true;
            }
            button.addEventListener('click', (event) => {
                event.target.innerText = 'In Cart';
                event.target.disabled = true;
                // 1. get product (that you clicked) from products (in the local storage) base on the id
                let cartItem = {...Storage.getProduct(id), amount:1};
                // 2. add product to the cart
                cart = [...cart, cartItem];
                // 3. save the cart to the local storage
                Storage.saveCart(cart);
                // 4. set cart values
                this.setCartValues(cart);
                // 5. display cart item
                this.addCartItem(cartItem);
                // 6. show the cart
                this.showCart();
                });
        });
    }
    setCartValues(cart){
        let tempTotal = 0;
        let itemsTotal = 0;
        cart.map(item => {
            tempTotal += item.price * item.amount;
            itemsTotal += item.amount;
        });
        cartTotal.innerText = parseFloat(tempTotal.toFixed(2));
        itemCount.innerText = itemsTotal;
    }
    addCartItem(item){
        const div = document.createElement('div');
        div.classList.add('cart-item');
        div.innerHTML = `
                    <img src=${item.img} alt="">
                    <div class="item-info">
                        <h4>${item.title}</h4>
                        <p>$${item.price}</p>
                        <span class="remove-item" data-id=${item.id} >remove</span>
                    </div>
                    <div class="amount-section">
                        <i class="incrementBtn" data-id=${item.id}>
                            <?xml version="1.0" encoding="UTF-8"?>
                            <svg width="15px" height="15px" viewBox="0 0 316 560" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <title>Path</title>
                                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <path d="M305.12,254.85 L60.33,10.06 C46.08,-3.354 24.283,-3.354 10.869,10.06 C-2.545,23.474 -2.545,45.271 10.869,59.521 L231.349,280.001 L10.869,500.481 C-2.545,513.895 -2.545,536.528 10.869,549.942 C24.283,563.356 46.08,563.356 60.33,549.942 L305.12,304.312 C318.534,290.898 318.534,269.101 305.12,254.851 L305.12,254.85 Z" id="Path" fill="currentColor" fill-rule="nonzero"></path>
                                </g>
                            </svg>
                        </i>
                        <p class="item-amount">${item.amount}</p>
                        <i class="substractBtn" data-id=${item.id}>
                            <?xml version="1.0" encoding="UTF-8"?>
                            <svg width="15px" height="15px" viewBox="0 0 316 560" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <title>Path</title>
                                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <path d="M305.12,254.85 L60.33,10.06 C46.08,-3.354 24.283,-3.354 10.869,10.06 C-2.545,23.474 -2.545,45.271 10.869,59.521 L231.349,280.001 L10.869,500.481 C-2.545,513.895 -2.545,536.528 10.869,549.942 C24.283,563.356 46.08,563.356 60.33,549.942 L305.12,304.312 C318.534,290.898 318.534,269.101 305.12,254.851 L305.12,254.85 Z" id="Path" fill="currentColor" fill-rule="nonzero"></path>
                                </g>
                            </svg>
                        </i>
                    </div> `;
        cartContent.appendChild(div);
    }
    showCart(){
        cartOverlay.classList.add('overlay-on');
        cartDOM.classList.add('show-cart');
    }
    setupAPP(){
        cart = Storage.getCart();
        this.setCartValues(cart);
        this.populateCart(cart);
        cartAccess.addEventListener('click', this.showCart);
        closeCartBtn.addEventListener('click', this.hideCart);
    }
    populateCart(cart){
        cart.forEach(item => {
            this.addCartItem(item);
        });
    }
    hideCart(){
        cartOverlay.classList.remove('overlay-on');
        cartDOM.classList.remove('show-cart');
    }
    cartLogic(){
        // clear cart button
        clearCartBtn.addEventListener('click', () => {
            this.clearCart();
        });
        // cart functionality
        cartContent.addEventListener('click', event => {
            if (event.target.classList.contains('remove-item')){
                let removeItem = event.target;
                let id = removeItem.dataset.id;
                this.removeItem(id);
                cartContent.removeChild(removeItem.parentElement.parentElement);
            } else if (event.target.classList.contains('incrementBtn')){
                let addAmount = event.target;
                let id = addAmount.dataset.id;
                let tempItem = cart.find(item => item.id == id);
                tempItem.amount = tempItem.amount + 1;
                Storage.saveCart(cart);
                this.setCartValues(cart);
                addAmount.nextElementSibling.innerText = tempItem.amount;
            }
            else if (event.target.classList.contains('substractBtn')){
                let decreaseAmount = event.target;
                let id = decreaseAmount.dataset.id;
                let tempItem = cart.find(item => item.id == id);
                tempItem.amount = tempItem.amount - 1;
                if (tempItem.amount > 0) {
                    Storage.saveCart(cart);
                    this.setCartValues(cart);
                    decreaseAmount.previousElementSibling.innerText = tempItem.amount;

                } else {
                    cartContent.removeChild(decreaseAmount.parentElement.parentElement);
                    this.removeItem(id);
                }
            }
        });
    }
    clearCart(){
        let cartItems = cart.map(item => item.id);
        cartItems.forEach(id =>  this.removeItem(id));
        while(cartContent.children.length > 0) {
            cartContent.removeChild(cartContent.children[0])
        }
        this.hideCart();
    }
    removeItem(id){
        cart = cart.filter(item => item.id != id);
        this.setCartValues(cart);
        Storage.saveCart(cart);
        let button = this.getSinglebutton(id);
        button.disabled = false;
        button.innerHTML = `<i>
                            <?xml version="1.0" encoding="UTF-8"?>
                            <svg width="66px" height="58px" viewBox="0 0 66 58" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <title>Shape</title>
                                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <path d="M2.25655008,-2.79043382e-06 C1.0596563,-2.79043382e-06 0.089,0.970614808 0.089,2.16754729 C0.089,3.36444107 1.05911445,4.33509737 2.25655008,4.33509737 L9.16533375,4.33509737 L16.6158437,39.4886029 C16.9106645,40.8120199 17.7779684,41.9131472 18.8735739,41.9048177 L54.9972584,41.9048177 C56.1422502,41.9207589 57.1955136,40.882603 57.1955136,39.7370822 C57.1955136,38.5920904 56.1422373,37.5534055 54.9972584,37.5695321 L20.6346036,37.5695321 L19.7088309,33.234432 L57.887695,33.234432 C58.8583126,33.2273766 59.7750285,32.4880651 59.9871262,31.5411343 L65.044313,9.86692359 C65.3260261,8.6090453 64.2339555,7.23479713 62.9448818,7.22512114 L14.2230624,7.22512114 L13.0488362,1.71638827 C12.8437311,0.753833998 11.9103983,-0.000647856228 10.9266988,-2.79043382e-06 L2.25655008,-2.79043382e-06 Z M15.1256127,11.5598343 L60.2131314,11.5598343 L56.1719232,28.8992028 L18.8071322,28.8992028 L15.1256127,11.5598343 Z M26.0983108,43.3486766 C22.1337365,43.3486766 18.8735739,46.6088391 18.8735739,50.5734135 C18.8735739,54.5379879 22.1337365,57.7981504 26.0983108,57.7981504 C30.0628852,57.7981504 33.3230477,54.5379879 33.3230477,50.5734135 C33.3230477,46.6088391 30.0628852,43.3486766 26.0983108,43.3486766 Z M47.7725215,43.3486766 C43.8079471,43.3486766 40.5477846,46.6088391 40.5477846,50.5734135 C40.5477846,54.5379879 43.8079471,57.7981504 47.7725215,57.7981504 C51.7370959,57.7981504 54.9972584,54.5379879 54.9972584,50.5734135 C54.9972584,46.6088391 51.7370959,43.3486766 47.7725215,43.3486766 L47.7725215,43.3486766 Z M26.0983108,47.6837768 C27.7200062,47.6837768 28.9879476,48.951731 28.9879476,50.5734135 C28.9879476,52.195096 27.7199933,53.4630502 26.0983108,53.4630502 C24.4766154,53.4630502 23.2086741,52.1945928 23.2086741,50.5734135 C23.2086741,48.9517181 24.4771315,47.6837768 26.0983108,47.6837768 Z M47.7725215,47.6837768 C49.3942169,47.6837768 50.6621582,48.951731 50.6621582,50.5734135 C50.6621582,52.195096 49.394204,53.4630502 47.7725215,53.4630502 C46.1508261,53.4630502 44.8828848,52.1945928 44.8828848,50.5734135 C44.8828848,48.9517181 46.1513422,47.6837768 47.7725215,47.6837768 Z" id="Shape" fill="currentColor" fill-rule="nonzero"></path>
                                </g>
                            </svg>
                        </i>Add to cart
        `;
    }
    getSinglebutton(id){
        return buttonsDOM.find(button => button.dataset.id == id);
    }
}
// local storage
class Storage{
    static saveProducts(menus){
        localStorage.setItem('menus', JSON.stringify(menus));
    }
    static getProduct(id){
        let products = JSON.parse(localStorage.getItem('menus'));
        return products.find(product => product.id == id);
    }
    static saveCart(cart){
        localStorage.setItem('cart', JSON.stringify(cart));
    }
    static getCart(){
        return localStorage.getItem('cart')?JSON.parse(localStorage.getItem('cart')):[];
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const ui = new UI();
    const products = new Products();

    // setup App
    ui.setupAPP();
    // get all products    
    products.getProducts()
    .then(menus => {
        ui.displayProducts(menus)
        Storage.saveProducts(menus);
    })
    .then(() => {
        ui.getCartButtons();
        ui.cartLogic();
    });

});

