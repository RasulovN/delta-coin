let coinCount = localStorage.getItem('coinCount') ? parseInt(localStorage.getItem('coinCount')) : 0;
let livel = localStorage.getItem('livel') ? parseInt(localStorage.getItem('livel')) : 0;
let tapLimit = 500; // Asl qiymat

const limitSlider = document.getElementById('limitSlider');
const limitDisplay = document.getElementById('limit');
const livelDisplay = document.getElementById('livel');
const counter = document.getElementById('counter');

document.getElementById('coin-count').textContent = coinCount;
livelDisplay.textContent = livel;
limitDisplay.textContent = tapLimit;

function tapCoin() {
    coinCount++;
    localStorage.setItem('coinCount', coinCount); // coinCount ni localStorage ga saqlaymiz
    document.getElementById('coin-count').textContent = coinCount;
    tapLimit--; // Har ikkala soniyada limitni kamaytirish
    limitSlider.value = tapLimit; // Slider qiymatini yangilash
    limitDisplay.textContent = tapLimit; // HTML-da limitni yangilash

    // Har 1500 marta bosganda livelni oshirish
    if (coinCount % 1500 === 0) {
        livel++;
        localStorage.setItem('livel', livel); // livel ni localStorage ga saqlaymiz
        livelDisplay.textContent = livel; // livel qiymatini yangilash
    }

    if (tapLimit === 0) {
        alert('Limit tugadi! Siz yana 500 gacha ko\'payishingiz mumkin.');
        clearInterval(); // Intervalni to'xtatish
    }

    // +1 belgisini ko'rsatamiz
    counter.classList.add('visible');

    // Belgini 0.5 soniyadan so'ng yashirish uchun
    setTimeout(() => {
        counter.classList.remove('visible');
    }, 500);
}

setInterval(function() {
    if (tapLimit < 500) {
        tapLimit++; // Agar limit juft bo'lsa, uning qiymatini 1 ga oshiramiz
        document.getElementById('limit').textContent = tapLimit; // HTML-da limitni yangilash
        limitSlider.value++;
    }
}, 2000); // 2000 milisaniyada bir (2 sekund)
