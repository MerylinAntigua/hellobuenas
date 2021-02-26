let primero1 = prompt("primer numero");
let segundo2 = prompt("segundo numero");
if(primero1 > 0)
{
    document.writeln( primero1 + " Es positivo");
}
else if(primero1 < 0)
{
    document.writeln( primero1 + " Es negativo");
}
if(segundo2 > 0)
{
    document.writeln(segundo2 + " Es positivo");
}

else if(segundo2 < 0)
{
    document.writeln(segundo2 + " Es negativo");
}

if(primero1>0 && segundo2>0)
{
  document.writeln(" / dos de dos positivos");
}
else if(primero1 >0 && segundo2<0)
{
    document.writeln(" / uno de dos positivos");
}

else if(primero1<0 && segundo2<0)
{
  document.writeln(" / dos de dos negativos");
}