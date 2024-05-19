const product = [
    {
        id: 0,
        image: 'cam1.webp',
        title: 'Lomo Apparat 35MM Point and Shoot Camera',
        price: 5000,
    },
    {
        id: 1,
        image: 'cam2.webp',
        title: 'Kodak Ektar H35 Film Camera (Striped Black)',
        price: 3000,
    },
    {
        id: 2,
        image: 'cam3.webp',
        title: 'Kodak Ektar H35 Film Camera (Glazed Pink)',
        price: 3000,
    },
    {
        id: 3,
        image: 'cam4.webp',
        title: 'Lomo Apparat 35MM Point and Shoot Camera - Neubau Special Edition',
        price: 5500,
    },
    {
        id: 4,
        image: 'cam5.webp',
        title: 'Kodak Ektar H35 Film Camera (Glazed Blue)',
        price: 3000,
    },
    {
        id: 5,
        image: 'cam6.webp',
        title: 'Lomo Fisheye No 2 Camera Pack (FCP200)',
        price: 4000,
    },
    {
        id: 6,
        image: 'cam7.webp',
        title: 'Lomo Instand Wide Camera and Lenses - BLACK',
        price: 10000,
    },
    {
        id: 7,
        image: 'cam8.webp',
        title: 'Yashica MF-1 - GREY',
        price: 2000,
    },
    {
        id: 8,
        image: 'cam9.webp',
        title: 'Kodak Ektar H35 Film Camera (Striped Silver)',
        price: 3000,
    },
    {
        id: 9,
        image: 'cam10.webp',
        title: 'Yashica MF-1 - RED',
        price: 2000,
    },
    {
        id: 10,
        image: 'cam11.webp',
        title: 'Kodak M38 Reusable Camera - SCARLET',
        price: 1000,
    },
    {
        id: 11,
        image: 'cam12.webp',
        title: 'Kodak M38 Reusable Camera - CLASSIC BLUE',
        price: 1000,
    },
];

function formatCurrency(amount) {
return '₱' + amount.toFixed(2);
}
document.addEventListener('DOMContentLoaded', function () {
    const root = document.getElementById('root');

    product.forEach(item => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('box');

        productDiv.innerHTML = `
            <div class="img-box">
                <img class="images" src="${item.image}" alt="${item.title}">
            </div>
            <div class="bottom">
                <p>${item.title}</p>
                <h2>₱${item.price}.00</h2>
                <button onclick="addToCart(${item.id})">Add to Cart</button>
            </div>
        `;

        root.appendChild(productDiv);
    });
});

var cart = [];
var total = 0; 

function addToCart(productId) {
    cart.push({...product[productId]});
    total += product[productId].price; 
    displaycart();
}

function delElement(a) {
    total -= cart[a].price; 
    cart.splice(a, 1);
    displaycart();
}

function displaycart() {
    let j = 0;
    document.getElementById("count").innerHTML = cart.length;

    if (cart.length == 0) {
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "₱0.00";
    } else {
        document.getElementById("cartItem").innerHTML = cart.map((items) => {
            var {image, title, price} = items;
            return (
                `<div class='cart-item'>
                    <div class='row-imgg'>
                        <img class='rowimg' src=${image}>
                    </div>
                    <p style='font-size:12px;'>${title}</p>
                    <h2 style='font-size: 15px;'>₱${price}.00</h2>
                    <i class='bx bxs-trash' onclick='delElement(${j++})'></i>
                </div>`
            );
        }).join('');

        document.getElementById("total").innerHTML = "₱" + total + ".00"; 
    }
}

function checkout() {
    console.log('Checkout function called');
    const infoForm = document.getElementById('infoForm');
    const name = infoForm.querySelector('input[name="name"]').value;
    const email = infoForm.querySelector('input[name="email"]').value;
    const address = infoForm.querySelector('input[name="address"]').value;
    const contact = infoForm.querySelector('input[name="contact"]').value;
    const paymentMethod = infoForm.querySelector('input[name="payment"]:checked').nextElementSibling.textContent.trim();

    const infoDetails = `
        Name: ${name}
        Email: ${email}
        Address: ${address}
        Contact No.: ${contact}
        Payment Method: ${paymentMethod}
        Total: ${formatCurrency(total)}
    `;

    alert('Your order has been confirmed!\n\nInformation Details:\n' + infoDetails);
}
