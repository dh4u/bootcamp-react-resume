// this handles the shopping cart
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
        sessionStorage.removeItem("cartItems");
        sessionStorage.setItem("cartItems", JSON.stringify(cartItems));
        sessionStorage.setItem("cartInitialized", true);
        
        // reset the discount
        sessionStorage.setItem("discount", 0);
        
        // reset the orderNumber
        sessionStorage.setItem("orderNumber", 0);
        
        // reset choseShippingFlag and shipping
        sessionStorage.setItem("choseShippingFlag", 0);
        sessionStorage.setItem("shippingAmount", 0)
    }
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
    //console.log(cartItems);
}

function buildCart(type){
    let cartItems = getCartItems()
        ,items = ""
        ,productDetails = []
        ,productPriceNoFormatting = 0
        ;
    
    //console.log(cartItems);
    if( cartItems.length ){
        //console.log("cart has items");
        for( i=0; i < cartItems.length; i++ ){
            productDetails = getProductDetails(cartItems[i].item_id);
            //console.log(productDetails);
            productPriceNoFormatting = productDetails.price.replace("$", "").replace(",", "");
            //console.log(productPriceNoFormatting);
            //console.log(cartItems[i].quantity);
            //console.log(getSubtotal(productPriceNoFormatting, cartItems[i].quantity));
            
            items += '<div class="product"> <div class="info">';
            items += '<div class="row" style="padding-left: 10px;">';
            items += '<div class="col-md-3"> <img class="img-fluid mx-auto d-block image" src="' + productDetails.image + '" alt="' + productDetails.longName + '">'; items += '</div><div class="col-md-5 product-name"> <div class="product-name">'; 
            items += '<a href="#">' + productDetails.longName + '</a> </div></div>';
            items += '<div class="col-md-2 quantity"> <label for="quantity">Quantity:</label>'; items += '<input id="quantity' + type + i + '" type="number" min="0" value="' + cartItems[i].quantity + '" class="form-control quantity-input" onChange="updateQuantity(' + i + ', this.value, \'subtotal' + type + i + '\')"' + ( typeof(type) == "string" && type.length ? 'disabled="true"' : '') + '>'; 
            items += '</div><div class="col-md-2 price"> <span id="subtotal' + type + i + '">$' + getSubtotal(productPriceNoFormatting, cartItems[i].quantity) + '</span> </div></div></div></div>' ; 
            
            // update the cart nav items
            $( "#cartLinkEnabled" ).show();
            $( "#cartLinkDisabled" ).hide();

        }
        
    }else{
        //console.log("cart is empty");
        items += '<div class="product"> <div class="info"> <div class="row" style="padding-left: 10px;">'; 
        items += '<div class="col-md-3"> </div><div class="col-md-5 product-name">'; 
        items += '<div class="product-name"> <a href="#">Your cart is empty</a> </div></div>';
        items += '<div class="col-md-2 quantity"> <label for="quantity">Quantity:</label>'; items += '<input id="quantity" type="number" min="0" value="0" class="form-control quantity-input" disabled> </div><div class="col-md-2 price">';
        items += '<span id="price0">$0</span> </div></div></div></div>';
        
        // update the cart nav items
        $( "#cartLinkEnabled" ).hide();
        $( "#cartLinkDisabled" ).show();
        
        //disable the checkout button
        $( "#checkoutButton" ).attr("disabled", true);
        
        //hide some text
        $( "#underHeading").hide();
    }
    //console.log(items)
    if( !type ){
        $( "#cartItems" ).html(items);
    }else{
        $( "#checkoutItems" ).html(items);
    }
    
    updateSummaryTotals();
}

function buildCheckout(){
    buildCart('Checkout');
}

function checkOut(){
    buildCheckout();
    // active the checkout fold
    $( "#accordion" ).accordion( {heightStyle: "content", active: 1 }  ).delay(500);
}

function completePurchase(){
    // get an order number
    let orderNumber = getOrderNumber().substring(1, 10)
        ;
    emptyCart(false);
    sessionStorage.setItem("orderNumber", orderNumber);
    window.location.href = "thank.you.html";
    // delay is necessary for sessionStorage to catch up
    setTimeout(function(){ window.location.href = "thank.you.html"; },500);
}

function emptyCart(confirmFlag){
    if( confirmFlag ){
        let answer = confirm( "Are you sure that you would like to empty your cart?\n" );  
        if( !answer ){ return false; }
    }
    
    sessionStorage.removeItem("cartInitialized");
    initializeCart();
    // delay is necessary for sessionStorage to catch up
    setTimeout(buildCart,500);
}

//sessionStorage.setItem("discount", 0);
function enableDiscount(){
    // give them a percentage off
    sessionStorage.setItem("discount", .25);
    updateSummaryTotals();
    $( "#noDiscount" ).hide();
    $( "#discountDiv" ).show(); 
}

function getBillingOptions(){
    // active the checkout fold
    $( "#accordion" ).accordion( {heightStyle: "content", active: 3 }  ).delay(500);
}

function getCartTotal(){
    let cartItems = getCartItems()
        ,i = 0
        ,price = 0
        ,subtotal = 0
        ,total = 0
        ;
    //console.log(cartItems);
    for ( i = 0; i < cartItems.length; i++ ){
        subtotal = 0;
        //console.log("price is " + cartItems[i].price);
        //console.log("quantity is " + cartItems[i].quantity);
        subtotal +=  getSubtotal(cartItems[i].price, cartItems[i].quantity);  
        //console.log("subtotal is " + subtotal);
        total += subtotal;
        //console.log("total is " + total);
    }
    return total;
}

function getCartItems(){
    return (JSON.parse(sessionStorage.getItem("cartItems")) !== null) ? JSON.parse(sessionStorage.getItem("cartItems")) : [];
}

function getItemIndex(item_id){
    let cartItems = getCartItems()
        ;
    return cartItems.findIndex(obj => obj.item_id == item_id);
}

function getOrderNumber(){
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15); // from https://gist.github.com/6174/6062387
}

function getShippingOptions(){
    $( "#accordion" ).accordion( {heightStyle: "content", active: 2 }  );
    //console.log(sessionStorage.getItem("choseShippingFlag"));
    console.log(sessionStorage.getItem("shippingAmount"));
    if( sessionStorage.getItem("choseShippingFlag") == 1 ){
        //console.log('has shipping');
        switch( (sessionStorage.getItem("shippingAmount")) ){
            case "10":
                $("input[name='deliveryMethod'][value=dhl]").prop('checked', true);
            break;
            case "15":
                $("input[name='deliveryMethod'][value=fedex]").prop('checked', true);
            break;
            case "20":
                $("input[name='deliveryMethod'][value=ups]").prop('checked', true);
            break;
            case "25":
                $("input[name='deliveryMethod'][value=usps]").prop('checked', true);
            break;
            default:
                $("input[name='deliveryMethod'][value=pickup]").prop('checked', true);
            break;
        }
    }
}

function getSubtotal(price, quantity){
    return price * quantity;
}

function getSummaryTotals(){
    let grandTotal = 0
        ,cartTotal = getCartTotal()
        ,discount = sessionStorage.getItem("discount")
        ,discountAmount = 0
        ,discountTotal = 0
        ,tax = getTax()
        ,taxAmount = 0
        ,choseShippingFlag = sessionStorage.getItem("choseShippingFlag")
        ,shippingAmount = Number(sessionStorage.getItem("shippingAmount"))
        ;
    
    discountAmount = Number(discount) === 0 ? 0 : cartTotal * Number(discount);
    discountTotal = cartTotal - discountAmount;
    
    //console.log(discount);
    //console.log(discountAmount);
    //console.log(discountTotal);
    taxAmount = discountTotal * tax;
    //console.log(taxAmount);
    //console.log('shippingAmount ' + shippingAmount);
    grandTotal = discountTotal + taxAmount + shippingAmount;
    //console.log(grandTotal);
    return [cartTotal.toFixed(2), discountAmount.toFixed(2), taxAmount.toFixed(2), choseShippingFlag, shippingAmount.toFixed(2), grandTotal.toFixed(2)];
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
        ,totals = getSummaryTotals()
        ;
    
    //return [cartTotal.toFixed(2), discountAmount.toFixed(2), taxAmount.toFixed(2), choseShippingFlag, shippingAmount.toFixed(2), grandTotal.toFixed(2)];
    
    modal += '<div class="modal fade" id="myModal" role="dialog">';
    modal += '<div class="modal-dialog modal-sm">';
    modal += '<div class="modal-content">';
    modal += '<div class="modal-header">';
    //modal += '<button type="button" class="close" data-dismiss="modal">&times;</button>';
    modal += '<h4 class="modal-title">Cart Total</h4> </div>';
    modal += '<div class="modal-body">';
    modal += '<h3 style="text-align: center;">$' + totals[5].toLocaleString(undefined, { currency: "USD" }) + '</h3>';
    modal += '</div>';
    
    modal += '<section class="shopping-cart dark"><div class="content"><div class="summary"> <h3>Summary</h3>'; 
    modal += '<div class="summary-item"><span class="text">Subtotal</span><span class="price" id="cartTotal">$' + totals[0].toLocaleString(undefined, { currency: "USD" }) + '</span></div>';
    if( totals[1] != 0 ){
        modal += '<div class="summary-item" id="discountDiv"><span class="text">Discount</span><span class="price" id="discount">$' + totals[1].toLocaleString(undefined, { currency: "USD" }) + '</span></div>';
    }
    modal += '<div class="summary-item"><span class="text">Tax</span><span class="price" id="tax">$' + totals[2].toLocaleString(undefined, { currency: "USD" }) + '</span></div>';
    if( totals[3] == 1 && totals[4] != 0 ){
        modal += '<div class="summary-item" id="shippingDiv"><span class="text">Shipping</span><span class="price" id="shipping">$' + totals[4].toLocaleString(undefined, { currency: "USD" }) + '</span></div>';
    }
    modal += '<div class="summary-item"><span class="text">Total</span><span class="price" id="grandTotal">$' + totals[5].toLocaleString(undefined, { currency: "USD" }) + '</span></div>';
    modal += '<div></div><div></div></div>';
    
    //modal += '<div></div><div></div>';
    //modal += '<div></div><div></div>';
    
    
    modal += '<div class="modal-footer"> ';
    modal += '<button type="button" class="btn btn-primary" data-dismiss="modal" onclick="window.open(\'shopping.cart.html\', \'_self\');">Go to Cart</button>';
    modal += '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>';
    modal += '</div></div></div></div></div>';
    
    if ( !$( "#modal" ).length ){
         $('body').append($('<div>', {id: 'modal'}));
    }
    
    $( "#modal" ).html(modal);
    $( "#myModal" ).modal('show');
}

function updateShipping(amount){
    sessionStorage.setItem("choseShippingFlag", Number(1));
    sessionStorage.setItem("shippingAmount", Number(amount));
    updateSummaryTotals();
}

function updateSummaryTotals(){
    let totals = getSummaryTotals()
        ;
    // totals is of the form [cartTotal [0], discountAmount [1], taxAmount [2], choseShippingFlag [3], shippingAmount [4], grandTotal [5]]
    // console.log(sessionStorage.getItem("choseShippingFlag"));
    $( "#cartTotal" ).html("$" + totals[0]);
    
    if( Number(totals[1]) > 0 ){
        $( "#discountDiv" ).show();
        $( "#discount" ).html("$" + totals[1]);
    }else{
        $( "#discountDiv" ).hide();
    }
    $( "#tax" ).html("$" + totals[2]);
    
    if( totals[3] == 1 ){
       $( "#shipping" ).html("$" + totals[4]);  
    }
    
    $( "#grandTotal" ).html("$" + totals[5]);
    
    
    if ( $("#checkoutItems").text().length ){
        //console.log('have checkout items to update');
        
        $( "#checkoutCartTotal" ).html("$" + totals[0]);
    
        if( Number(totals[1]) > 0 ){
            $( "#checkoutDiscountDiv" ).show();
            $( "#checkoutDiscount" ).html("$" + totals[1]);
        }else{
            $( "#checkoutDiscountDiv" ).hide();
        }
        $( "#checkoutTax" ).html("$" + totals[2]);

        if( totals[3] == 1 ){
           $( "#checkoutShipping" ).html("$" + totals[4]);  
        }

        $( "#checkoutGrandTotal" ).html("$" + totals[5]);
        
    }else{
        //console.log('no checkout items to update');
    }
}

// called when quantity changes in the cart
function updateQuantity(index, quantity, target){
    let answer = false
        ,cartItems = getCartItems()
        ;
    //console.log(cartItems);
    //console.log(index);
    //console.log(quantity);
    //console.log(target);
    //console.log(cartItems[index].price);
    if( quantity == 0){
        let answer = confirm( "Would you like to remove this from your cart?\n" );
        if( answer ){
            removeItemFromCart(index);
            // delay is necessary for sessionStorage to catch up
            setTimeout(buildCart,500);
        }
    }
    
    if( !answer && quantity !=0 ){
        cartItems[index].quantity = Number(quantity);
        sessionStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
    
    if( typeof(target) == "string" && target.length ){
        $( "#"+target ).html("$" + getSubtotal(cartItems[index].price, quantity));
    }
    
    updateSummaryTotals();
}