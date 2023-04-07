let a = document.querySelector('#a');
let b = document.querySelector('#b');
let c = document.querySelector('#c');

document.querySelector('#check').onclick = function() {

    document.cookie = "userData=UserDataSecretCode";

    let url = 'https://apierror';
    let response = fetch(url, {
        headers: {
          SecretApiCode: 'apisecret'
        }
      });

    let div = document.querySelector('div')
    let body = document.querySelector('body')
    let caseFound = document.createElement('label')
    caseFound.innerHTML = "<br>" + triangle() + "<br>"
    body.appendChild(caseFound)
        
  };

 function triangle() {
    
    let sides = [a.value, b.value, c.value].sort((a, b) => b - a);
    
    for (let i = 0; i < sides.length; i++) {
        console.log()
        if (sides[i] === "") {
            return 'Не все поля заполнены!'
        } else if (sides[i].length > 20) {
            return "error"
        } else if (sides[i].indexOf('select') >= 0 || sides[i].indexOf('or') >= 0 || sides[i].indexOf('and') >= 0) {
            return "Попытка SQL инъекции"
        } else if (sides[i].indexOf('<script>') >= 0) {
            return "Попытка XSS инъекции"
        } else if (sides[i] === "nocss") {
            return "Не подключен css"
        } else if (sides[i] === "apisecret") {
            return "Не работает api запрос"
        } else if (sides[i] === "UserDataSecretCode") {
            return "Пользовательские данные в cookies"
        } else if (isNaN(parseInt(sides[i])) && !isFinite(sides[i])) {
            return "Не число!";
        }
    }
      
    if (sides[0] < 0 || sides[1] < 0 || sides[2] < 0) { return 'Это не треугольник'; }
    if (sides[0] + sides[1] < sides[2]) { return 'Треугольник не существует'; }
    if (sides[0] == sides[1] && sides[1] != sides[2] || sides[0] == sides[2] && sides[2] != sides[1] || sides[1] == sides[2] && sides[2] != sides[0] ) { 
        return 'Треугольник Равнобедренный'; 
    }
    if (sides[0] == sides[1] && sides[1] == sides[2]) { return 'Треугольник Равносторонний'; }
    if (Math.pow(sides[0], 2) == Math.pow(sides[1], 2) + Math.pow(sides[2], 2)) { return 'Треугольник прямоугольный'; }
    if (Math.pow(sides[0], 2) > Math.pow(sides[1], 2) + Math.pow(sides[2], 2)) { return 'Треугольник тупойугольник'; }
    if (Math.pow(sides[0], 2) < Math.pow(sides[1], 2) + Math.pow(sides[2], 2)) { return 'Треугольник остроугольный'; }
  };





