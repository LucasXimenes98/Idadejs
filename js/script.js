var nome = prompt("Olá, qual é o seu nome:")
alert("Seja Bem Vindo(a) " +nome)
var idade = Number(prompt("Informe a sua idade:"))
// OPERADORES IF
// == verdadeiro caso o conteudo seja igual
// === verdadeiro caso o conteudo e o tipo seja igual
// != verdadeiro caso o conteudo for diferente
// > verdadeiro caso o elemento seja maior
// < verdadeiro caso o elemento seja menor
// >= verdadeiro caso o elemento seja maior ou igual
// <= verdadeiro caso o elemento seja menor ou igual

// OPERADORES LÓGICOS
// && - AND (e), verdadeiro apenas se ambas condições forem verdadeiras
// ! - NOT, verdadeiro apenas se a afirmação for falsa
// || - OR, verdadeiro apenas se uma condição ou mais sejam verdadeiras

if (idade >= "0" && idade < "15"){
    
    alert(nome +" você é Criança")
}
else if (idade >= "15" && idade < "30"){
    alert(nome +" você é Jovem")
}
else if (idade >= "30" && idade < "60"){
    alert(nome +" você é Adulto")
}
else if (idade >= "60"){
    alert(nome +" O Sr é Idoso")
}
else{
    alert("Insira uma idade válida!")
    location.reload();
}