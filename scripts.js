// Removing Cart item
let removeItemBtn = document.getElementsByClassName("remove-item");

for (let i = 0; i < removeItemBtn.length; i++) {
    const element = removeItemBtn[i];

    element.addEventListener('click', function() {
        let removeCartItem = document.getElementsByClassName("cart-item-product")

        for (let i = 0; i < removeCartItem.length; i++) {
            const element = removeCartItem[i];
            
            element.remove();
        }
    })
    
}