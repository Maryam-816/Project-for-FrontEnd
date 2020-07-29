class Person {
    constructor(name, surname, age, email, password) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.email = email;
        this.password = password;
    }
}
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("btn_register").addEventListener("click", function (e) {
        e.preventDefault();
        let name = document.getElementById("nameBox").value;
        let surname = document.getElementById("surnameBox").value;
        let age = document.getElementById("ageBox").value;
        let email = document.getElementById("emailBox").value;
        let password = document.getElementById("passwordBox").value;

        let person = new Person(name, surname, age, email, password);
        alert("You registered!");

        if ("database" in localStorage) {
            let database = JSON.parse(localStorage["database"]);
            if ("length" in database) {
                database.push(person);
                localStorage["database"] = JSON.stringify(database);
            }
            else{
                let new_array = [];
                new_array.push(database);
                new_array.push(person);
                localStorage["database"] = JSON.stringify(new_array);
            }
        } 
        else {
            let first_user =  JSON.stringify(person);
            localStorage["database"] = first_user;
        }
    });
});