const input = document.querySelector('.text');
const div = document.querySelector(".redBlock");


input.addEventListener('focus', () => {
    div.style.display = 'block';
});

input.addEventListener('blur', () => {
    div.style.display = 'none';
});

input.addEventListener('input', () => {
    div.textContent = input.value;
});