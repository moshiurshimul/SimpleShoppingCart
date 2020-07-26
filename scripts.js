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

document.getElementById('phone-plus').addEventListener('click', function() {
    let phonePlus = document.getElementById('phone-count');
    let phoneCurrentCount = parseInt(phonePlus.value);
    let phoneNewCount = phoneCurrentCount + 1;
    phonePlus.value = phoneNewCount;
    
    let phonePrice = document.getElementById('phone-price');
    let phonePriceValue = parseFloat(phonePrice.innerText);
    let phonePriceTotal = phonePriceValue * phoneNewCount;
    document.getElementById('phone-price').innerText = phonePriceTotal;
})

// Removing item using minus icon

document.getElementById('phone-minus').addEventListener('click', function() {
    let phoneMinus = document.getElementById('phone-count');
    let phoneCurrentCount = parseInt(phoneMinus.value);
    let phoneNewCount = phoneCurrentCount - 1;
    phoneMinus.value = phoneNewCount;
    
    let phonePrice
})