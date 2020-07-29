//карды с картинками

let photoProduct = {
    getAllPictures: function () {
        return images;
    }
};

let imgManager = {
    showImageBox : function (image) {
        let img_box, picture, img_title, img_text;
        img_box = document.createElement("section");
        picture = document.createElement("img");
        img_title = document.createElement("h3");
        img_text = document.createElement("h6");

        img_box.className = "text-centre p-2 m-3 mt-5 shadow bg-light w-15";
        img_title.className = "text-center mt-3";
        img_text.className = "text-center";


        picture.src = `./photos/${image.photo}`;
        picture.width = 390;
        picture.height = 200;

        img_title.innerHTML = `${image.title}`;

        img_text.innerHTML = `${image.text}`;

        img_box.appendChild(picture);
        img_box.appendChild(img_title);
        img_box.appendChild(img_text);

        return img_box;
    }
}

document.addEventListener("DOMContentLoaded", function () {
    //подключение кардов к браузеру
    let all_cards = photoProduct.getAllPictures();
    let img_card = document.getElementById("cards");

    for (let img of all_cards) {
        let picture_card = imgManager.showImageBox(img);
        img_card.appendChild(picture_card);
    }
 });

document.addEventListener("DOMContentLoaded", function () {
            //time
            let cont =  document.getElementById("time");
            cont.className = "container w-25 vh-25 d-flex justify-content-center align-items-center mr-1";
            let cont_time = document.getElementById("time_box");
            cont_time.className = "time display-2";
            cont.appendChild(cont_time);
                
            setInterval(setTime, 1000);
                   
            function setTime() {
                let date = new Date();
                date = date.toString();
                date = date.substr(16, 8);
                cont_time.innerHTML = date;
            }
});