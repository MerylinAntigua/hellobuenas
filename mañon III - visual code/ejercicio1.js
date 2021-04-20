let primero = prompt("primer numero");
parseInt(primero);
let segundo = prompt("segundo numero");
parseInt(segundo);
if (segundo != 0)
{
    tercero = primero/segundo;
    document.writeln("El resultado de esta division es " + tercero);
}
else if(segundo == 0)
{
    document.writeln("No se puede dividir entre 0");
}
