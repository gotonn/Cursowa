
// Дані для пристроїв
const devicesData = [
    { 
        icon: "phone", 
        title: "Смартфони", 
        desc: "StreamVibe оптимізовано для смартфонів на Android та iOS. Завантажте наш додаток з Google Play Store або Apple App Store" 
    },
    { 
        icon: "tablet", 
        title: "Планшети", 
        desc: "StreamVibe оптимізовано для планшетів на Android та iOS. Завантажте наш додаток з Google Play Store або Apple App Store" 
    },
    { 
        icon: "TV", 
        title: "Смарт-телевізори", 
        desc: "StreamVibe доступний на більшості сучасних смарт-телевізорів. Завантажте наш додаток з відповідного магазину додатків" 
    },
    { 
        icon: "laptop", 
        title: "Ноутбуки", 
        desc: "Переглядайте StreamVibe на своєму ноутбуці через будь-який сучасний веб-браузер" 
    },
    { 
        icon: "console", 
        title: "Ігрові консолі", 
        desc: "StreamVibe доступний на популярних ігрових консолях. Завантажте наш додаток з відповідного магазину" 
    },
    { 
        icon: "VR", 
        title: "VR-шоломи", 
        desc: "Занурюйтесь у контент з StreamVibe за допомогою віртуальної реальності" 
    }
];

// Функція для створення пристроїв
function createDevices() {
    const container = document.getElementById('devicesContainer');
    devicesData.forEach(device => {
        const deviceEl = document.createElement('div');
        deviceEl.className = 'devices-card';
        deviceEl.innerHTML = `
            <div class="box-kind-device">
                <div>
                    <img src="./assets/icons/${device.icon}.svg" alt="Іконка ${device.title.toLowerCase()}">
                </div>
                <h3>${device.title}</h3>
            </div>
            <p class="regular-text">${device.desc}</p>
        `;
        container.appendChild(deviceEl);
    });
}

// Ініціалізація пристроїв
document.addEventListener('DOMContentLoaded', createDevices);













// Дані для планів підписок
const plansData = [
    { 
        name: "Базовий план", 
        price: "$9.99", 
        desc: "Насолоджуйтесь великою бібліотекою фільмів та серіалів, включаючи нещодавно випущені назви." 
    },
    { 
        name: "Стандартний план", 
        price: "$12.99", 
        desc: "Доступ до ширшого вибору фільмів та серіалів, включаючи нові релізи та ексклюзивний контент" 
    },
    { 
        name: "Преміум план", 
        price: "$14.99", 
        desc: "Доступ до найширшого вибору фільмів та серіалів, включаючи всі нові релізи та офлайн-перегляд" 
    }
];

// Функція для створення планів підписок
function createPlans() {
    const container = document.getElementById('plansContainer');
    plansData.forEach(plan => {
        const planEl = document.createElement('div');
        planEl.className = 'plan-card';
        planEl.innerHTML = `
            <div class="text-wrap">
                <h3>${plan.name}</h3>
                <p class="regular-text">${plan.desc}</p>
            </div>
            <div class="box-price">
                <p class="price">${plan.price}<span class="kind">/місяць</span></p>
            </div>
            <div class="box-buttons">
                <a class="btn-start" href="">Почати безкоштовний пробний період</a>
                <a class="btn-choose" href="">Обрати план</a>
            </div>
        `;
        container.appendChild(planEl);
    });
}

// Ініціалізація планів підписок
document.addEventListener('DOMContentLoaded', createPlans);