function ir() {
    var mensagem = document.getElementById('mens')
    var menssalario = document.getElementById('mensS')
    var hora = new Date
    var tempo = hora.getDate
    var time = new Date
    var hora = time.getHours
    var name = document.getElementById('nome').value
    var age = Number(document.getElementById('idade').value)
    var salary = Number(document.getElementById('salario').value)
    mensagem.innerHTML = ''
    mensagem.style.textAlign = 'center'
    menssalario.innerHTML = ''
    menssalario.style.color = 'red'

    //sexo
    var sex = document.getElementsByName('sexo')
    var genero = ''

    if (sex[0].checked) {
        genero = "Homem"
    } else if (sex[1].checked) {
        genero = "Mulher"
    } else {

    }

    //Estado civil
    var EC = document.getElementsByName('civil')
    var EC1 = ''

    if (EC[0].checked) {
        EC1 = "Solteiro(a)"
    } else if (EC[1].checked) {
        EC1 = "Casado(a)"
    } else if (EC[2].checked) {
        EC1 = "Divorciado(a)"
    } else if (EC[3].checked) {
        EC1 = "Viúvo(a)"
    }

    if (name.length > 3 && salary > 0 && age < 150) {
        mensagem.innerHTML += `Seu nome é ${name}, você tem ${age} anos e você é ${genero}. Além disso,
        você recebe R$ ${salary} e você é ${EC1}`
    } else {

        //Aplicando o laço de repetição

        do {

            // Condição do salário
            if (salary <= 0) {
                menssalario.innerHTML += "Digite um salário válido"
            }

            if (name.length < 3) {
                alert('Seu nome deve ter mais de 3 caractéries')
            }
            if (age > 150) {
                alert(" Idade permitida até 150 anos, caso você seja um vampiro.")
            }



        } while (name.value.length < 3 && salary <= 0 && age > 150)
    }

}