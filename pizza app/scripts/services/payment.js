


var options = {
    "key": "rzp_test_7NzdVoSRudXyqP", // Enter the Key ID generated from the Dashboard
    "amount": "100000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    "currency": "INR",
    "name": "Pizza Shop", //your business name
    "description": "Order Transaction",
    "image": "https://imgs.search.brave.com/MfzXxVM1Xz795m9JVtNDke4dOZpkno4MVK-1l6Hp2k4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9sb2dv/LnBpenphL2ltZy9j/b2xsYWdlLXZvbDIu/cG5n",
    "handler": function (response){
        alert("Payment Done........");
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature)
    },
    "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information, especially their phone number
        "name": "Customer Name", //your customer's name
        "email": "cumtomerEmail@example.com", 
        "contact": "CumtomerPhone"  //Provide the customer's phone number for better conversion rates 
    },
    "notes": {
        "address": "Razorpay Corporate Office"
    },
    "theme": {
        "color": "#3399cc"
    }
};
var rzp1 = new Razorpay(options);
rzp1.on('payment.failed', function (response){
        alert("Payment Failed....")
        alert(response.error.code);
        alert(response.error.description);
        alert(response.error.source);
        alert(response.error.step);
        alert(response.error.reason);
        alert(response.error.metadata.order_id);
        alert(response.error.metadata.payment_id);
});
document.getElementById('rzp-button1').addEventListener('click',function(){
    rzp1.open();
    e.preventDefault();
});
