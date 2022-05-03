export default function Blur() {
}

function footerUp() {
    document.getElementById('footer-id').classList.remove("footer-down");
    document.getElementById('footer-id').classList.add("footer-up");

    document.getElementById('dashboard-id').classList.add("blur");
}
function footerDown() {
    document.getElementById('footer-id').classList.remove("footer-up");
    document.getElementById('footer-id').classList.add("footer-down");

    document.getElementById('dashboard-id').classList.remove("blur");
}
var hidden = true;
function handleClick(e) {
    (hidden) ? footerUp() : footerDown();
    hidden = !hidden;
}
window.onclick = handleClick;