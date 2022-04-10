function play(str) {

    let audio = document.getElementById(str);
    audio.play();

    let photo = document.getElementById("photo");

    if (str === "q" || str === "Q") {
        document.getElementById("display").innerText = "Q (Quack)";
        photo.innerHTML = `<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Bucephala-albeola-010.jpg/480px-Bucephala-albeola-010.jpg">`
    } else if (str === "w" || str === "W") {
        document.getElementById("display").innerText = "W (Wheek)";
        photo.innerHTML = `<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/George_the_amazing_guinea_pig.jpg/480px-George_the_amazing_guinea_pig.jpg">`
    } else if (str === "e" || str === "E") {
        document.getElementById("display").innerText = "E (Elk)";
        photo.innerHTML = `<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Jasper.Wapiti-Hirsch.P1033401.jpg/480px-Jasper.Wapiti-Hirsch.P1033401.jpg">`
    } else if (str === "a" || str === "A") {
        document.getElementById("display").innerText = "A (Alligator)";
        photo.innerHTML = `<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Alligator.jpg/220px-Alligator.jpg">`
    } else if (str === "s" || str === "S") {
        document.getElementById("display").innerText = "S (Songbird)";
        photo.innerHTML = `<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Eopsaltria_australis_-_Mogo_Campground.jpg/480px-Eopsaltria_australis_-_Mogo_Campground.jpg">`
    } else if (str === "d" || str === "D") {
        document.getElementById("display").innerText = "D (Donkey)";
        photo.innerHTML = `<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Donkey_in_Clovelly%2C_North_Devon%2C_England.jpg/480px-Donkey_in_Clovelly%2C_North_Devon%2C_England.jpg">`
    } else if (str === "z" || str === "Z") {
        document.getElementById("display").innerText = "Z (Zebra)";
        photo.innerHTML = `<img src="https://cdn.mos.cms.futurecdn.net/HjFE8NKWuCmgfHCcndJ3rK.jpg">`
    } else if (str === "x" || str === "X") {
        document.getElementById("display").innerText = "X (Wolf)";
        photo.innerHTML = `<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Kolm%C3%A5rden_Wolf.jpg/480px-Kolm%C3%A5rden_Wolf.jpg">`
    } else if (str === "c" || str === "C") {
        document.getElementById("display").innerText = "C (Cicada)";
        photo.innerHTML = `<img src="https://upload.wikimedia.org/wikipedia/commons/3/39/Neotibicen_linnei.jpg">`
    }
};



