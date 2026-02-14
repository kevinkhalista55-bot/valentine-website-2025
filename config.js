<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Happy Valentine 💕</title>
<style>
    body {
        margin: 0;
        padding: 0;
        font-family: 'Comic Sans MS', cursive, sans-serif;
        background: linear-gradient(to bottom right, #ff9a9e, #fad0c4);
        text-align: center;
        overflow: hidden;
    }

    h1 {
        margin-top: 80px;
        font-size: 3em;
        color: #fff;
        text-shadow: 2px 2px 5px rgba(0,0,0,0.3);
    }

    p {
        font-size: 1.5em;
        color: white;
    }

    button {
        padding: 15px 30px;
        font-size: 1.2em;
        border: none;
        border-radius: 30px;
        cursor: pointer;
        margin-top: 20px;
        background-color: #ff4b5c;
        color: white;
        transition: 0.3s;
    }

    button:hover {
        background-color: #ff1e42;
        transform: scale(1.1);
    }

    .heart {
        position: absolute;
        color: red;
        font-size: 20px;
        animation: fall 5s linear infinite;
    }

    @keyframes fall {
        0% { transform: translateY(-10vh); opacity: 1; }
        100% { transform: translateY(110vh); opacity: 0; }
    }

    #hiddenMessage {
        display: none;
        font-size: 1.7em;
        margin-top: 20px;
        color: yellow;
    }
</style>
</head>
<body>

<h1>💘 Happy Valentine Sayang 💘</h1>
<p>Kamu itu kayak WiFi... Tanpamu aku lemah sinyal 😆💕</p>

<button onclick="showLove()">Klik Kalau Kamu Cinta Aku 💌</button>

<p id="hiddenMessage">Aku sayang kamu lebih dari diskon 90% di tanggal kembar! 🥰💖</p>

<script>
function showLove() {
    document.getElementById("hiddenMessage").style.display = "block";
    alert("Yeay! Berarti kita jadian selamanya yaa 😍💞");
}

// Animasi hati jatuh
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 15 + "px";
    heart.style.animationDuration = Math.random() * 3 + 2 + "s";
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 300);
</script>

</body>
</html>
