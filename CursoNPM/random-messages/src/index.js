const messages = [
    "oscar",
    "diego",
    "laura",
    "ana",
    "nicole",
    "carolina",
    "paulina"
]

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
};

module.exports = { randomMsg };