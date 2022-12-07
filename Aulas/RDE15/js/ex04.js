var nome, n1, n2, total
nome=prompt("Qual o seu nome")
n1=parseFloat(prompt(nome+" digite um valor: "))
if(n1==0){
    n1=parseFloat(prompt(nome+" digite novemente outro valor: "))
}
n2=parseFloat(prompt(nome+" digite outro valor: "))
if(n2==0){
    n2=parseFloat(prompt(nome+" digite novamente outro valor: "))
}

total=n1/n2
if(total==0){
   alert("Divisões por 0 não existem.")
}
else{
alert("resultado da soma:"+total)
document.write("<h2>"+nome+"o resultado é "+total+"</h2>")
}

