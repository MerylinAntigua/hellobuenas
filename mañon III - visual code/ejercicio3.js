let primeroo1 = prompt("primer numero");
parseInt(primeroo1)
let segundoo2 = prompt("segundo numero");
parseInt(segundoo2)
let terceroo3 = prompt("tercer numero");
parseInt(terceroo3)
if((primeroo1 == segundoo2) && (segundoo2 == terceroo3))
{
    document.writeln("Son iguales todos");
}
else if(primeroo1 > segundoo2 && primeroo1 > terceroo3)
{
    document.writeln( primeroo1 + " Es el mayor");
}
else if(segundoo2 > primeroo1 && segundoo2 > primeroo1)
{
    document.writeln(segundoo2 + " Es el mayor");
}

else if(terceroo3 > segundoo2 && terceroo3 > primeroo1)
{
    document.writeln(terceroo3 + " Es el mayor");
}