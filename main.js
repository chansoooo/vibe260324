class LottoNumbers extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const numbers = this.getAttribute('numbers').split(',');
        const container = document.createElement('div');
        container.setAttribute('class', 'lotto-numbers');

        numbers.forEach(number => {
            const numEl = document.createElement('div');
            numEl.setAttribute('class', 'number');
            numEl.textContent = number;
            container.appendChild(numEl);
        });

        const style = document.createElement('style');
        style.textContent = `
            .lotto-numbers {
                display: flex;
                gap: 0.5rem;
            }
            .number {
                width: 3rem;
                height: 3rem;
                background-color: var(--number-color, #f5f5f5);
                color: var(--background-color, #121212);
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 1.5rem;
                font-weight: bold;
            }
        `;

        this.shadowRoot.append(style, container);
    }
}

customElements.define('lotto-numbers', LottoNumbers);

const generateButton = document.getElementById('generate');
const currentNumbersContainer = document.getElementById('current-numbers');
const historyContainer = document.getElementById('history');
const themeToggle = document.getElementById('theme-toggle');

// Market Widgets Rendering
function renderMarketWidgets(isLight) {
    const theme = isLight ? 'light' : 'dark';
    const widgets = [
        { id: 'wti-oil-widget', symbol: 'TVC:USOIL', title: 'WTI Oil' },
        { id: 'silver-widget', symbol: 'TVC:SILVER', title: 'Silver' }
    ];

    widgets.forEach(widget => {
        const container = document.getElementById(widget.id);
        if (!container) return;
        
        container.innerHTML = ''; // Clear previous widget
        
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js';
        script.async = true;
        script.innerHTML = JSON.stringify({
            "symbol": widget.symbol,
            "width": "100%",
            "height": "100%",
            "locale": "en",
            "dateRange": "1D",
            "colorTheme": theme,
            "trendLineColor": "rgba(41, 98, 255, 1)",
            "underLineColor": "rgba(41, 98, 255, 0.3)",
            "underLineBottomColor": "rgba(41, 98, 255, 0)",
            "isTransparent": true,
            "autosize": true,
            "largeChartUrl": ""
        });
        container.appendChild(script);
    });
}

// Theme Toggle Logic
function setTheme(isLight) {
    if (isLight) {
        document.body.classList.add('light-mode');
        themeToggle.textContent = 'Dark Mode';
        localStorage.setItem('theme', 'light');
    } else {
        document.body.classList.remove('light-mode');
        themeToggle.textContent = 'Light Mode';
        localStorage.setItem('theme', 'dark');
    }
    renderMarketWidgets(isLight);
}

// Initialize theme and widgets
const savedTheme = localStorage.getItem('theme');
const initialIsLight = savedTheme === 'light';
setTheme(initialIsLight);

themeToggle.addEventListener('click', () => {
    const isLight = document.body.classList.contains('light-mode');
    setTheme(!isLight);
});

function generateLottoNumbers() {
    const numbers = new Set();
    while (numbers.size < 6) {
        numbers.add(Math.floor(Math.random() * 45) + 1);
    }
    return Array.from(numbers).sort((a, b) => a - b);
}

generateButton.addEventListener('click', () => {
    const currentNumbers = currentNumbersContainer.querySelector('lotto-numbers');
    if (currentNumbers) {
        const oldNumbers = document.createElement('lotto-numbers');
        oldNumbers.setAttribute('numbers', currentNumbers.getAttribute('numbers'));
        
        // Limit history to 5 items
        if (historyContainer.children.length >= 5) {
            historyContainer.removeChild(historyContainer.lastElementChild);
        }
        
        historyContainer.prepend(oldNumbers);
    }

    const newNumbers = generateLottoNumbers();
    currentNumbersContainer.innerHTML = '';
    const newNumbersEl = document.createElement('lotto-numbers');
    newNumbersEl.setAttribute('numbers', newNumbers.join(','));
    currentNumbersContainer.appendChild(newNumbersEl);
});