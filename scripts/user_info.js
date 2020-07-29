let people = JSON.parse(sessionStorage["people"]);

    if(people.email == undefined || people.password == null) {
      document.location.href = "login_form.html";
    }

    //alert info
 let info = 
               `Your name is: ${people.name} <br>
                Your surname is: ${people.surname} <br>
                Your age is: ${people.age} <br>
                And your email is: ${people.email}
 `;

 document.getElementById("heading").innerHTML = ("Welcome, dear user " + people.email).fontcolor("#388E3C").italics();
document.getElementById("information").innerHTML = info.fontsize("5em").italics().fontcolor("#388E3C");

//button work
    document.addEventListener("DOMContentLoaded", function () {
      document.getElementById("regback").addEventListener("click", function () {
          sessionStorage.clear();
      });
    });