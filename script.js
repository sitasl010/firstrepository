let name = prompt('как вас зовут?')
let money = +prompt("")

if(name === "Alex"){
    let account = +prompt('Номер счета?') 
    if(account === 7777 ){
        prompt ('Сколько обналичить')
    }else if (money >=10000){
        alert('Все отлично')
       
    } else{
        alert('Пользователь не найден, досвидули')}
}else{
    alert ("Not found")
}