function updatePrice(itemId, price) {
    const memoryCost = document.getElementById(itemId);
    memoryCost.innerText = price;

    const bestPrice = document.getElementById("best-price").innerText;
    const memoryPrice = document.getElementById("memory-cost").innerText;
    const storagePrice = document.getElementById("storage-cost").innerText;
    const deliveryPrice = document.getElementById("delivery-cost").innerText;

    const totalPrice = parseFloat(bestPrice) + parseFloat(memoryPrice) + parseFloat(storagePrice) + parseFloat(deliveryPrice);


    const total = document.getElementById("total-price");
    total.innerText = totalPrice;
}
function onClick(clickId, updateId, price) {
    document.getElementById(clickId).addEventListener("click", function () {
        updatePrice(updateId, price);
        //when click a button than change bg and text color
        document.getElementById(clickId).style.backgroundColor = "cornflowerblue";



    });

}
onClick("sixteenGb", "memory-cost", 200);
onClick("eightGb", "memory-cost", 0);
onClick("ssd1", "storage-cost", 0);
onClick("ssd2", "storage-cost", 300);
onClick("ssd3", "storage-cost", 500);
onClick("paid-delivery", "delivery-cost", 20);
onClick("free-delivery", "delivery-cost", 0);

const code = "gorib"
document.getElementById("apply-btn").addEventListener("click", function () {
    const promoCode = document.getElementById("promo-input").value;
    if (promoCode === code) {
        const total = document.getElementById("total-price");
        let totalPrice = parseFloat(total.innerText);
        const discount = (totalPrice * 20) / 100;
        totalPrice = totalPrice - discount;
        total.innerText = totalPrice;


    }
    else {

    }
});
function verifyPin() {

}
// document.getElementById("sixteenGb").addEventListener("click", function () {
//     updatePrice("memory-cost", 200);

// });
// document.getElementById("eightGb").addEventListener("click", function () {
//     updatePrice("memory-cost", 00);
// });
// document.getElementById("ssd3").addEventListener("click", function () {
//     updatePrice("storage-cost", 500);
// });
// document.getElementById("ssd2").addEventListener("click", function () {
//     updatePrice("storage-cost", 300);
// });
// document.getElementById("paid-delivery").addEventListener("click", function () {
//     updatePrice("delivery-cost", 20);
// });