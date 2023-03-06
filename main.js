const database = {
    "Mango": "qwer123", 
}
const isLoginValid = function (login) {
    if (login.length < 4 && login.length > 16);
};



const isLoginUnique = function (database, login) {
    let user = login;
    if (login === null) {
        message = 'Операцію скасовано!';
    } else if (database.includes(database.key(login))) {
        const temppass = (`Вітаю, ${user}! Введіть пароль: `)
        if (temppass === database.key(user)) {
            
        }
    } 
};

const userLogin = prompt('Ведіть свій логін:');
const result = isLoginUnique(database, userLogin);
alert(result);
console.log(database);
