fetch("./header.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("header").innerHTML = data;   
    })
    .catch(error => console.error("Error loading header:", error));

// Animation Viewport configuration:
document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".animate-on-scroll");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.2 });

    elements.forEach(element => observer.observe(element));
});
