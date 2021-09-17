/*
A partir da lista de 500 funcionários já definidos abaixo. Faça um programa que mostre como resultado os dados do funcionario com:
- O maior ou menor salário de um/a funcionário/a em algum país ou cidade ou empresa
- A média de salários entre todos os/as funcionários/as de algum país ou cidade ou empresa
- O maior ou menor salário da lista toda

O programa deve chamar uma função que recebe como parametros os filtros solicitados e retorne o objeto inteiro para impressão.
*/

/* Const prova
const funcionarios = [{"id":1,"nome":"Feodor","sobrenome":"Pheby","email":"fpheby0@163.com","genero":"M","cidade":"Bal’shavik","pais":"Belarus","empresa":"Dabjam","salario":1.10},
{"id":2,"nome":"Irwinn","sobrenome":"Pridmore","email":"ipridmore1@squarespace.com","genero":"M","cidade":"Pancoran","pais":"Indonesia","empresa":"Topicshots","salario":12347.24},
{"id":3,"nome":"Cedric","sobrenome":"Ormes","email":"cormes2@yale.edu","genero":"M","cidade":"Sanli","pais":"China","empresa":"Digitube","salario":22018.66},
{"id":4,"nome":"Reina","sobrenome":"Borth","email":"rborth3@furl.net","genero":"F","cidade":"Vysokovsk","pais":"Russia","empresa":"Jaxspan","salario":11064.27},
{"id":5,"nome":"Gwenny","sobrenome":"Burnhill","email":"gburnhill4@nature.com","genero":"F","cidade":"El Puente","pais":"Honduras","empresa":"Thoughtstorm","salario":19942.83},
{"id":6,"nome":"Sindee","sobrenome":"Lavington","email":"slavington5@howstuffworks.com","genero":"F","cidade":"El Valle del Espíritu Santo","pais":"Venezuela","empresa":"Jayo","salario":6907.48},
{"id":7,"nome":"Ingamar","sobrenome":"Ewdale","email":"iewdale6@drupal.org","genero":"M","cidade":"Paris 19","pais":"France","empresa":"Eare","salario":18069.60},
{"id":8,"nome":"Waverly","sobrenome":"Vassbender","email":"wvassbender7@nba.com","genero":"M","cidade":"Xiakou","pais":"China","empresa":"Digitube","salario":15995.70},
{"id":9,"nome":"Dunstan","sobrenome":"Wakeling","email":"dwakeling8@wsj.com","genero":"M","cidade":"Kakata","pais":"Liberia","empresa":"Devshare","salario":11287.61},
{"id":10,"nome":"Forrester","sobrenome":"Ciccottio","email":"fciccottio9@dot.gov","genero":"M","cidade":"Chaoyang","pais":"China","empresa":"Kayveo","salario":17309.69},
{"id":11,"nome":"Erick","sobrenome":"Cosgrive","email":"ecosgrivea@sakura.ne.jp","genero":"M","cidade":"Qızılhacılı","pais":"Azerbaijan","empresa":"Jabbertype","salario":16813.80},
{"id":12,"nome":"Trish","sobrenome":"Oleszczak","email":"toleszczakb@foxnews.com","genero":"F","cidade":"Meicheng","pais":"China","empresa":"Abatz","salario":16158.43},
{"id":13,"nome":"Ewart","sobrenome":"Tittershill","email":"etittershillc@printfriendly.com","genero":"M","cidade":"Mogapinyana","pais":"Botswana","empresa":"Fiveclub","salario":15565.55},
{"id":14,"nome":"Bethena","sobrenome":"Hatherley","email":"bhatherleyd@amazon.de","genero":"F","cidade":"Taiyuan","pais":"China","empresa":"Eidel","salario":7293.70},
{"id":500,"nome":"Pennie","sobrenome":"Batie","email":"pbatiedv@aol.com","genero":"F","cidade":"Awjilah","pais":"Libya","empresa":"Eabox","salario":2.29}]
*/

/* Const para teste */
const funcionarios =[{"id":1,"nome":"lucas","sobrenome":"Pheby","email":"fpheby0@163.com","genero":"M","cidade":"joinville","pais":"brasil","empresa":"neogrid","salario":5000.00},
{"id":2,"nome":"rodrigo","sobrenome":"Pheby","email":"fpheby0@163.com","genero":"M","cidade":"itajai","pais":"acre","empresa":"catolica","salario":2000.00},  
{"id":3,"nome":"kami","sobrenome":"Pheby","email":"fpheby0@163.com","genero":"F","cidade":"sao paulo","pais":"na","empresa":"neogrid","salario":1.00}]
                    

var salario     = false              // True = maior salario | False = menor salario
var gen         = "F"                // "M" = masculino | "F" = feminino | "todos" = todos generos
var cep         = "todos"            // "empresa" = consulta empresa | "pais" = consulta pais | "cidade" = consulta cidade | "todos" = consulta todos 
var cepValor    = "neogrid"          // valor da empresa, pais ou cidade.
var filtros     = [];

console.log(filtro(salario, gen, cep))

function filtro(salario, gen, cep){
    for (const funcionario of funcionarios) {
        if(funcionario.genero == gen){
            filtroCep(funcionario)   
        }else if (gen == "todos"){
            filtroCep(funcionario)
        }
    }

    for (let one of filtros) {
        console.log(desing(1))
        console.log(one.nome + " | Gênero: " + one.genero+ " | Pais: " + one.pais + " | Cidade: " + one.cidade +" | Empresa: " + one.empresa)
        console.log(desing(2))
    }

    console.log("A média salaria d@ " + cep + " e com genero " + gen + " é: " + mediaSalario());
    
    if(salario){
        let maior = filtros[0]
        for (let i=0; i<filtros.length;i++){
            if(filtros[i].salario > maior.salario){
                maior=filtros[i]
            }
        }   
        console.log(desing(3))
        console.log("O maio salário é: " + parseInt(maior.salario)) 
    }else if(!salario){
        let menor = filtros[0]
        for (let i=0; i<filtros.length;i++){
            if(filtros[i].salario < menor.salario){
                menor=filtros[i]
            }
        }
        console.log(desing(3))
        console.log("O menor salário é: " + parseInt(menor.salario))
    }

    return "Fim do programa"
}

function filtroCep(funcionario){
    if (cep == "empresa"){
        if (funcionario.empresa == cepValor){
            filtros.push(funcionario)
        }
    }else if (cep == "cidade"){
        if (funcionario.cidade == cepValor){
            filtros.push(funcionario)
        }
    }else if (cep == "pais"){
        if (funcionario.pais == cepValor){
            filtros.push(funcionario)
        }
    }else if (cep == "todos"){
        filtros.push(funcionario)
    }  
    
    return filtro
}

function mediaSalario(){
    let total = 0
    for (const filtro of filtros) {
        total += filtro.salario
    }
    const media = total / filtros.length
    return parseInt(media)
}

function desing(num){
    let result;
    if(num == 1){
        result = "---------------------------------- Funcionário ----------------------------------"
    }else if(num == 2){
        result = "---------------------------------------------------------------------------------"
    }else if(num == 3){
        result = "-----------------------------------"
    }
    
    return result
}
