document.querySelectorAll('.gallery-image').forEach(image => {
    image.addEventListener('click', function(event) {
        // Check if the left mouse button was clicked
        if (event.button === 0) { // 0 is the left mouse button
            // Create a message element
            const message = document.createElement('div');
            message.textContent = 'click!';
            message.className = 'click-message'; // Apply the class for styling
            message.style.left = event.pageX + 'px'; // Set the X position to the cursor's X position
            message.style.top = event.pageY + 'px'; // Set the Y position to the cursor's Y position
            document.body.appendChild(message); // Add the message to the body

            // Remove the message after 1 second
            setTimeout(() => {
                message.remove();
            }, 1000);

            // Optionally, change the image source to another random image
            this.src = 'https://picsum.photos/200/300?random=' + Math.floor(Math.random() * 100);
        }
    });
});
