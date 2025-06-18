let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
        function updateCartDisplay() {
            const cartItemsContainer = document.getElementById('cart-items');
            const totalPriceContainer = document.getElementById('total-price');
            cartItemsContainer.innerHTML = ''; 
    
            let totalPrice = 0;
    
            cart.forEach((item, index) => {
                const row = document.createElement('tr');
                
                const nameCell = document.createElement('td');
                nameCell.textContent = item.name;
                row.appendChild(nameCell);
    
                const quantityCell = document.createElement('td');
                quantityCell.textContent = item.quantity || 1; 
                row.appendChild(quantityCell);
    
                const priceCell = document.createElement('td');
                priceCell.textContent = item.price;
                row.appendChild(priceCell);
    
                const totalCell = document.createElement('td');
                const totalItemPrice = item.price * (item.quantity || 1); 
                totalCell.textContent = totalItemPrice;
                row.appendChild(totalCell);
    
                const removeCell = document.createElement('td');
                const removeBtn = document.createElement('button');
                removeBtn.textContent = 'Remove';
                removeBtn.classList.add('remove-btn');
                removeBtn.addEventListener('click', () => {
                    removeFromCart(index);
                });
                removeCell.appendChild(removeBtn);
                row.appendChild(removeCell);
    
                cartItemsContainer.appendChild(row);
    
                totalPrice += totalItemPrice; 
            });
    
            totalPriceContainer.textContent = totalPrice.toFixed(2); 
        }
    
        function removeFromCart(index) {
            cart.splice(index, 1); 
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartDisplay();
        }
    
        updateCartDisplay();