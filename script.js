document.getElementById('startButton').addEventListener('click', function() {
    const width = parseInt(document.getElementById('width').value);
    const growthAmount = parseInt(document.getElementById('growthAmount').value);
    const growRate = parseInt(document.getElementById('growRate').value);
    const numberCircles = parseInt(document.getElementById('numberCircles').value);
    
    const container = document.getElementById('circleContainer');
    container.innerHTML = ''; // Clear previous circles
    
    for (let i = 0; i < numberCircles; i++) {
        const circle = document.createElement('div');
        circle.className = 'circle';
        circle.style.width = `${width}px`;
        circle.style.height = `${width}px`;
        circle.style.top = `${Math.random() * (container.clientHeight - width)}px`;
        circle.style.left = `${Math.random() * (container.clientWidth - width)}px`;

        container.appendChild(circle);

        let interval = setInterval(function() {
            const currentWidth = parseInt(circle.style.width);
            const newWidth = currentWidth + growthAmount;
            circle.style.width = `${newWidth}px`;
            circle.style.height = `${newWidth}px`;
        }, growRate);

        circle.addEventListener('click', function() {
            clearInterval(interval);
            container.removeChild(circle);
        });
    }
});
