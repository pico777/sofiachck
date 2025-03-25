function evetTikla() {
    window.location.href = "https://youtu.be/Cety_4QLwz0"; // Buraya istediğin video linkini koy
}

function hayirKac() {
    let noButton = document.getElementById("no");
    let x = Math.random() * (window.innerWidth - 100);
    let y = Math.random() * (window.innerHeight - 50);
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
}