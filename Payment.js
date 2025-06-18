let cart = JSON.parse(localStorage.getItem('cart')) || [];
        let totalPrice = 0;

        cart.forEach(item => {
            totalPrice += item.price * (item.quantity || 1); 
        });

        document.getElementById('total-price').textContent = totalPrice.toFixed(2);

        document.getElementById('payment-form').addEventListener('submit', function(e) {
            e.preventDefault(); 

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const address = document.getElementById('address').value;
            const card = document.getElementById('card').value;

            alert(`Thank you, ${name}! Your payment of ${totalPrice.toFixed(2)} PKR has been processed successfully.`);
            
            const paymentDetails = {
                name: name,
                email: email,
                phone: phone,
                address: address,
                card: card,
                totalPrice: totalPrice.toFixed(2)
            };

            localStorage.setItem('paymentDetails', JSON.stringify(paymentDetails));
        });