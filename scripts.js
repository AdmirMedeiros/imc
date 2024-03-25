var nome = prompt('Digite seu nome: ')
var tamanho = prompt('Digite sua altura: ')
var peso = prompt('Digite seu peso: ')

var altura = tamanho / 100

var imc = (peso / (altura*altura)).toFixed(2)

if (imc < 16){
    alert(`Nome: ${nome}\nÍndice de massa corporal: ${imc} \nClassificação: Baixo peso muito grave`)
}
else if (imc >= 16 && imc <=16.99){
    alert(`Nome: ${nome}\nÍndice de massa corporal: ${imc} \nClassificação: Baixo peso grave`)
}

else if (imc >= 17 && imc <= 18.49){
    alert(`Nome: ${nome}\nÍndice de massa corporal: ${imc} \nClassificação: Baixo peso`)
}
else if (imc >= 18.50 && imc <= 24.99){
    alert(`Nome: ${nome}\nÍndice de massa corporal: ${imc} \nClassificação: Peso normal`)
}
else if (imc >= 25 && imc <= 29.99){
    alert(`Nome: ${nome}\nÍndice de massa corporal: ${imc} \nClassificação: Sobrepeso`)
}
else if (imc >= 30 && imc <= 34.99){
    alert(`Nome: ${nome}\nÍndice de massa corporal: ${imc} \nClassificação: Obesidade grau I`)
}

else if (imc >= 35 && imc <= 39.99){
    alert(`Nome: ${nome}\nÍndice de massa corporal: ${imc} \nClassificação: Obesidade grau II`)
}

else{
    alert(`${nome, imc} Obesidade grau III`)
}