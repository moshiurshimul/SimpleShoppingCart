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

// Adding new item using Plus icon

//Phone Price

let phonePrice = document.getElementById('phone-price');
let phonePriceValue = parseFloat(phonePrice.innerText);

document.getElementById('phone-plus').addEventListener('click', function() {
    let phoneInput = document.getElementById('phone-count');
    let phoneCurrentCount = parseInt(phoneInput.value);
    let phoneNewCount = phoneCurrentCount + 1;
    phoneInput.value = phoneNewCount;
    
    let phonePriceTotal = phonePriceValue * phoneNewCount;
    document.getElementById('phone-price').innerText = phonePriceTotal;
    
})

// Removing item using minus icon

document.getElementById('phone-minus').addEventListener('click', function() {
    let phoneInput = document.getElementById('phone-count');
    let phoneCurrentCount = parseInt(phoneInput.value);
    let phoneNewCount = phoneCurrentCount - 1;
    phoneInput.value = phoneNewCount;

    let phonePriceTotal = phonePriceValue * phoneNewCount;
    document.getElementById('phone-price').innerText = phonePriceTotal;
})

