console.log("Website LKMM aktif");

// contoh
document.querySelectorAll("nav li").forEach(item => {
    item.addEventListener("click", () => {
        alert("Kamu klik:" + item.innerText);
    });
});
document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        target.scrollIntoView({ behavior: "smooth"});
    });
});