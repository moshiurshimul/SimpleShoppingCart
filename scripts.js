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
    
};

//Phone Price
let phonePrice = document.getElementById('phone-price');
let phonePriceValue = parseFloat(phonePrice.innerText);


// Adding new item using Plus icon

document.getElementById('phone-plus').addEventListener('click', function() {
    countBtn(true);
})

// Removing item using minus icon
document.getElementById('phone-minus').addEventListener('click', function() {
    countBtn(false);
})


// Incrase and decrase function

function countBtn(isIncrease) {
        let phoneInput = document.getElementById('phone-count');
        let phoneCurrentCount = parseInt(phoneInput.value);
        if(isIncrease == true) {
            let phoneNewCount = phoneCurrentCount + 1;
        }
        if(isIncrease == false && phoneCurrentCount > 0 ) {
            let phoneNewCount = phoneCurrentCount - 1;
        }

        phoneInput.value = phoneNewCount;
        
        // let phonePriceTotal = phonePriceValue * phoneNewCount;
        // document.getElementById('phone-price').innerText = phonePriceTotal;
}

// Case Price 

let casePrice = document.getElementById('case-Price');
let casePriceValue = parseFloat(casePrice.innerText);

document.getElementById('case-plus').addEventListener('click', function() {
    caseCount(true);
})

document.getElementById('case-minus').addEventListener('click', function() {
    caseCount(false);
})


function caseCount(isIncrease) {
    let caseInput  = document.getElementById('case-count');
    let caseCurrentCount = parseInt(caseInput.value);
    if (isIncrease == true) {
        caseNewCount = caseCurrentCount + 1;
    }
    if(isIncrease == false && caseCurrentCount > 0) {
        caseNewCount = caseCurrentCount - 1; 
    }
    caseInput.value = caseNewCount;

    let totalPrice = casePriceValue * caseNewCount;
    document.getElementById('case-Price').innerText = totalPrice;
}

