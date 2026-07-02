const path = document.querySelector('.ecg-path');
const dot = document.querySelector('.pulse-dot');

function updateDotPosition() {
    const pathLength = path.getTotalLength();
    const point = path.getPointAtLength(pathLength - 10);
    const container = document.querySelector('.ecg-container');
    const svg = document.querySelector('.ecg-line');
    const svgRect = svg.getBoundingClientRect();
    
    const x = (point.x / 1400) * svgRect.width;
    const y = (point.y / 300) * svgRect.height;
    
    dot.style.left = x + 'px';
    dot.style.top = y + 'px';
}

updateDotPosition();
window.addEventListener('resize', updateDotPosition);