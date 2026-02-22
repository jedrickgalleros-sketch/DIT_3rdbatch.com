cons button = document.getElementById('batones'); 

button.addEventListener('click', () => {
    window.location.href = 'students.html'; 
})

const toggleButtons = document.querySelectorAll('.toggle-btn');

toggleButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const fullDesc = btn.nextElementSibling;
        if (fullDesc.style.display === "none") {
            fullDesc.style.display = "block";
            btn.textContent = "Click to see less";
        } else {
            fullDesc.style.display = "none";
            btn.textContent = "Click to see more";
        }
    });
});
