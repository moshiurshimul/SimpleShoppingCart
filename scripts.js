//Phone Price
let phonePrice = document.getElementById('phone-price');
let phonePriceValue = parseFloat(phonePrice.innerText);

// Case Price 

let casePrice = document.getElementById('case-price');
let casePriceValue = parseFloat(casePrice.innerText);


// Adding phone and removeing

document.getElementById('phone-plus').addEventListener('click', function() {
    addingAndRemovingProduct('phone', true);
});

document.getElementById('phone-minus').addEventListener('click', function() {
    addingAndRemovingProduct('phone', false);
});

// Adding Case and removing

document.getElementById('case-plus').addEventListener('click', function() {
    addingAndRemovingProduct('case', true);
})

document.getElementById('case-minus').addEventListener('click', function() {
    addingAndRemovingProduct('case', false);
})


// Incrase and decrase function

function addingAndRemovingProduct(product, isIncrease) {
    let productInput = document.getElementById(product + '-count');
    let productCurrentCount = parseInt(productInput.value);

    // checking incrase and decrase
    if(isIncrease == true) {
        productNewCount = productCurrentCount + 1;
    }
    if(isIncrease == false && productCurrentCount > 0) {
        productNewCount = productCurrentCount - 1;
    }

    productInput.value = productNewCount;

    // checking Phone or case 

    if(product == 'phone') {
        productPrice = productNewCount * phonePriceValue;
    }
    if(product == 'case') {
        productPrice = productNewCount * casePriceValue;
    }

    document.getElementById(product + '-price').innerText = productPrice;

    subTotal();
};

// Total

function subTotal() {
    let subPriceTotal = (phonePriceValue * document.getElementById('phone-count').value) + (casePriceValue * document.getElementById('case-count').value);
    
    document.getElementById('subTotal').innerText = subPriceTotal;

    // No Tex
    document.getElementById('grandTotal').innerText = subPriceTotal;

}
