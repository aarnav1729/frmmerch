document.getElementById('menu').addEventListener('click', function() {
    document.body.classList.toggle('open');
});

document.getElementById('close').addEventListener('click', function() {
    document.body.classList.remove('open');
});