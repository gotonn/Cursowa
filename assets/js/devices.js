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

function createDevices() {
    const container = document.getElementById('devicesContainer');
    if (!container) return;
    
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

document.addEventListener('DOMContentLoaded', createDevices);