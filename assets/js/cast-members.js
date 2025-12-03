// Додавання карток акторів через JS
const castContainer = document.getElementById('castContainer');
for (let i = 0; i < 8; i++) {
    const castImg = document.createElement('div');
    castImg.className = 'cast-img';
    castContainer.appendChild(castImg);
}