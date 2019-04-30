// this handles the shopping cart
$(document).ready(function() {    
    
    //if there is a hash we are very likely on the cart page (otherwise the URL is being manipulated)
    let hash = location.hash
        ,fold = 0
        ;

    if( hash != undefined ){
        //console.log('folding');
        //console.log(hash);
        switch (location.hash){

            case "#cart" :
                fold = 0;
            break;
            case "#shipping" :
                fold = 1;
            break;
            case "#credit" :
                fold = 2;
            break;
            default:
                fold = 0;
            break;

        }
        $( "#accordion" ).accordion( {heightStyle: "content", active: fold}  );
    }
    
});

// initialize some variables
var cartItems = [] //Create an empty array that we will use to store all the Cart objects created.
    ;

//Below we create the constructor function that will be used to create all Cart objects.
function Cart (item_id, price, quantity) {
    this.item_id = item_id;
    this.price = price;
    this.quantity = quantity;
}

/* 
When the page loads, we check to see whether it is the first time we are loading this page or not. If it is the first time we are loading the page, we initialize the values we want to store in sessionStorage. If it is not the first time we are loading the page, then we can assume that we already have some information about cartItems and foodItems objects stored in SessionStorage. We use this information in sessionStorage to update information about each cartItem and fooditem object as we update on our HTML page. 
*/
function initializeCart() {
    // console.log(sessionStorage.getItem("cartInitialized"));
    // console.log("initializeCart");
    // uncomment the next line if you want to re-initialize
    // sessionStorage.removeItem("cartInitialized");
    
    if (sessionStorage.getItem("cartInitialized") === null) {
        console.log("initialize cart!!");
        // initialize our cart items
        sessionStorage.setItem("cartItems", null);
        sessionStorage.setItem("cartItems", JSON.stringify(cartItems));
        sessionStorage.setItem("cartInitialized", true);
        
        // reset the discount
        sessionStorage.setItem("discount", 0);
    }
    console.log(JSON.parse(sessionStorage.getItem("cartItems")));
}

function addToCart(item_id, price, quantity, target){
    let cartItems = getCartItems()
        ,i = getItemIndex(item_id)
        ,itemQuantity
        ;
    // see if the item is already in the cart and update the quantity if so. otherwise add to array
    //console.log('add to cart is is ' + i);
    if( i != -1 ){
        //console.log("update item quantity");
        itemQuantity = cartItems[i].quantity;
        quantity += itemQuantity;
        updateQuantity(i, quantity, target);  
    }else{
        //console.log("add new item");
        cartItems.push(new Cart(item_id, price, quantity));
        sessionStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
}

function emptyCart(){
    sessionStorage.removeItem("cartInitialized");
    initializeCart();
}

function enableDiscount(){
    // give them a percentage off
    sessionStorage.setItem("discount", .75);
}

function getCartTotal(){
    let cartItems = getCartItems()
        ,i = 0
        ,price = 0
        ,subtotal = 0
        ,total = 0
        ;
    for ( i = 0; i < cartItems.length; i++ ){
        subtotal = 0;
        price = cartItems[i].price.replace("$", "").replace(",", "");
        //console.log("price is " + price);
        subtotal +=  getSubtotal(price, cartItems[i].quantity);  
        //console.log("subtotal is " + subtotal);
        total += subtotal;
        //console.log("total is " + total);
    }
    return total;
}

function getCartItems(){
    return (JSON.parse(sessionStorage.getItem("cartItems")) !== null) ? JSON.parse(sessionStorage.getItem("cartItems")) : [];
}

//var cartItems = getCartItems();
//cartItems[0].quantity = 2;
//sessionStorage.setItem("cartItems", JSON.stringify(cartItems));

function getGrandTotal(){
    let grandTotal = 0
        ,cartTotal = getCartTotal()
        ,discount = sessionStorage.getItem("discount")
        ,discountTotal = 0
        ,tax = getTax()
        ,taxAmount = 0;
        ;
    discountTotal += cartTotal * discount;
    taxAmount = discountTotal * tax;
    grandTotal = discountTotal + taxAmount;
    return [cartTotal, discountTotal, taxAmount, grandTotal];
}

function getSubtotal(price, quantity){
    return price * quantity;
}

function getItemIndex(item_id){
    let cartItems = getCartItems()
        ;
    return cartItems.findIndex(obj => obj.item_id == item_id);
}

function getOrderNumber(){
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15); // from https://gist.github.com/6174/6062387
}

function getTax(){
    return .1;
}

function removeItemFromCart(index){
    let cartItems = getCartItems()
        ;
    cartItems.splice(index, 1);
    sessionStorage.setItem("cartItems", JSON.stringify(cartItems));
}

function showTotalModal(){
    let modal = ""
        ,modalDiv
        ,total = getCartTotal()
        ;
    
    modal += '<div class="modal fade" id="myModal" role="dialog">';
    modal += '<div class="modal-dialog modal-sm">';
    modal += '<div class="modal-content">';
    modal += '<div class="modal-header">';
    //modal += '<button type="button" class="close" data-dismiss="modal">&times;</button>';
    modal += '<h4 class="modal-title">Cart Total</h4> </div>';
    modal += '<div class="modal-body"> <p style="text-align: center;">$' +              total.toLocaleString(undefined, { currency: "USD" }) + '</p></div>';
    modal += '<div class="modal-footer"> ';
    modal += '<button type="button" class="btn btn-primary" data-dismiss="modal" onclick="window.open(\'index.html#cart\', \'_self\');">Go to Cart</button>';
    modal += '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>';
    modal += '</div></div></div></div></div>';
    
    if ( !$( "#modal" ).length ){
         $('body').append($('<div>', {id: 'modal'}));
    }
    
    $( "#modal" ).html(modal);
    $( "#myModal" ).modal('show');
}

// called when quantity changes in the cart
function updateQuantity(index, quantity, target){
    let answer = false
        ,cartItems = getCartItems()
        ;
    
    if( quantity == 0){
        let answer = confirm( "Are you sure you want to remove this from your cart?\n" );
        if( answer ){
            removeItemFromCart(index);
        }
    }
    
    if( !answer ){
        cartItems[index].quantity = Number(quantity);
        sessionStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
    
    if( typeof(target) == "string" && target.length ){
        $( "#"+target ).html("$" + getSubtotal(cartItems[index].price, quantity));
    }
}