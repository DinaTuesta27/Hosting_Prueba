alert("El pato se llama Morgan :3")

document.onmousemove = function(event) {
        var pato = document.getElementById('pato');
        var x = event.clientX;
        var y = event.clientY;
        var patoRect = pato.getBoundingClientRect();
        var patoX = patoRect.left + patoRect.width / 2;
        var patoY = patoRect.top + patoRect.height / 2;
        var dx = x - patoX;
        var dy = y - patoY;
        var angle = Math.atan2(dy, dx);
        var distance = Math.sqrt(dx * dx + dy * dy);
        var speed = 5; // Velocidad de movimiento del pato

        var moveX = Math.cos(angle) * speed;
        var moveY = Math.sin(angle) * speed;
        pato.style.left = (patoRect.left + moveX) + 'px';
        pato.style.top = (patoRect.top + moveY) + 'px';
};

//Boton
function irArriba(){
        window.scrollTo({
                top: 0,
                behavior: 'smooth'
        })
}
