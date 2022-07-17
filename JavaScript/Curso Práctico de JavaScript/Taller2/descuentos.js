// const originalPrice = 1240;
// const discount = 18;

const coupons = [
    {
        name: "Coupon 10% off",
        discount: 10,
    },
    {
        name: "Coupon 30% off",
        discount: 30,
    },
    {
        name: "Coupon 50% off",
        discount: 50,
    },
    {
        name: "Coupon 70% off",
        discount: 70,
    },
    {
        name: "Coupon 90% off",
        discount: 90,
    }
];

function calculatePriceWithDiscount(price, discount) {
    const pricePercentWithDiscount = 100 - discount;
    const priceWithDiscount = (price * pricePercentWithDiscount) / 100;

    return priceWithDiscount;
}

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;

    const inputCoupon = document.getElementById("inputCoupon");
    const couponValue = inputCoupon.value;

    const isCouponNameValid = function (coupon) {
        return coupon.name === couponValue;
    }

    const userCoupon = coupons.find(isCouponNameValid);

    let isValidPrice = 0;
    if (priceValue < 1) {
        document.getElementById("validPrice").innerText = "The price " + priceValue + " it's not valid";
    } else {
        document.getElementById("validPrice").innerText = "";
        isValidPrice = 1;
    }

    let isValidCoupon = 0;
    if (!userCoupon || userCoupon === "") {
        document.getElementById("validCoupon").innerText = "The coupon " + couponValue + " it's not valid";
    } else {
        document.getElementById("validCoupon").innerText = "";
        isValidCoupon = 1;
    }

    if(isValidPrice === 1 && isValidCoupon === 1){
        const discount = userCoupon.discount;
        const priceWithDiscount = calculatePriceWithDiscount(priceValue, discount);
        document.getElementById("resultPrice").innerText = "The discounted price are: $" + new Intl.NumberFormat().format(priceWithDiscount);
    } else {
        document.getElementById("resultPrice").innerText = "";
    }
}

// const pricePercentWithDiscount  = 100 - discount;
// const priceWithDiscount = (originalPrice * pricePercentWithDiscount) / 100;

// console.log({
//     originalPrice,
//     discount,
//     pricePercentWithDiscount,
//     priceWithDiscount
// });
