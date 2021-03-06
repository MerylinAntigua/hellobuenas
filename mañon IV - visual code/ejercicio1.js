function hello(hi, buenas, gei) {
    hi = parseInt(prompt("numero1"));
    buenas = parseInt(prompt("numero2"));
    gei = parseInt(prompt("numero3"));

    djmor = Math.max(hi, buenas, gei);
    return djmor;
}
hello();
document.write("el mayor es " + djmor);