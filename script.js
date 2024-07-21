let coinCount = 0;
let tapLimit = 500; // Asl qiymat
let livel = 0; // Livelni boshlang'ich qiymati

const limitSlider = document.getElementById('limitSlider');
const limitDisplay = document.getElementById('limit');
const livelDisplay = document.getElementById('livel');
const counter = document.getElementById('counter');

function tapCoin() {
coinCount++;
document.getElementById('coin-count').textContent = coinCount;
tapLimit--; // Har ikkala soniyada limitni kamaytirish
limitSlider.value = tapLimit; // Slider qiymatini yangilash
limitDisplay.textContent = tapLimit; // HTML-da limitni yangilash

// Har 1500 marta bosganda livelni oshirish
if (coinCount % 1500 === 0) {
   livel++;
   livelDisplay.textContent = livel; // livel qiymatini yangilash
}

if (tapLimit === 0) {
alert('Limit tugadi! Siz yana 500 gacha ko\'payishingiz mumkin.');
setInterval()
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
limitSlider.value ++;
}
}, 2000); // 2000 milisaniyada bir (2 sekund)
