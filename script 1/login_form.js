document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("btn_login").addEventListener("click", function (e) {
        e.preventDefault();
        let emailInp = document.getElementById("emailBox").value;
        let passwordInp = document.getElementById("passwordBox").value;

        let enteredPeople = false;

        if ("database" in localStorage) {
            let persons = JSON.parse(localStorage["database"]);
            if ("length" in persons) {
                for (let person of persons) {
                    if (emailInp == person.email && passwordInp == person.password) {
                        enteredPeople = true;
                        let people = JSON.stringify(person);
                        sessionStorage["people"] = people;
                        break;
                    }
                }
            }
            else{
                if (emailInp == persons.email && passwordInp == persons.password) {
                    enteredPeople = true;
                    let people = JSON.stringify(persons);
                    sessionStorage["people"] = people;
                }
            }

            if (enteredPeople) {
                document.location.href = "user_info.html";
            } 
        }

    });
});