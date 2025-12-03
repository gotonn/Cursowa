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

function createPlans() {
    const container = document.getElementById('plansContainer');
    if (!container) return;
    
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

function switchPlan(period) {
    const monthlyPrices = ['₴99.99', '₴120.99', '₴140.99'];
    const yearlyPrices = ['₴990.99', '₴1290.99', '₴1490.99'];
    
    const priceElements = document.querySelectorAll('.price');
    
    priceElements.forEach((priceElement, index) => {
        const kindElement = priceElement.querySelector('.kind');
        const newPrice = period === 'monthly' ? monthlyPrices[index] : yearlyPrices[index];
        
        const textNodes = Array.from(priceElement.childNodes);
        const textNode = textNodes.find(node => node.nodeType === 3);
        
        if (textNode) textNode.textContent = newPrice;
        if (kindElement) kindElement.textContent = period === 'monthly' ? '/month' : '/year';
    });
    
    document.querySelectorAll('.text-plan').forEach(item => item.classList.remove('highlighted'));
    const activeElement = document.querySelector(`[onclick="switchPlan('${period}')"]`);
    if (activeElement) activeElement.classList.add('highlighted');
}

document.addEventListener('DOMContentLoaded', createPlans);