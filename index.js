paypal.Buttons({
    style : {
        color: 'blue',
        shape: 'pill'
    },
    createOrder: function (data, actions) {
        return actions.order.create({
            purchase_units : [{
                amount: {
                    value: '1300'
                }
            }]
        });
    },
    onApprove: function (data, actions) {
        return actions.order.capture().then(function (details) {
            console.log(details)
            window.location.replace("http://localhost/myprograms/paypal/success.php")
        })
    },
    onCancel: function (data) {
        window.location.replace("http://localhost/myprograms/paypal/OnCancel.php")
    }
}).render('#paypal-payment-button'); 