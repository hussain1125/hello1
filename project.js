let inputElement = document.querySelector("#input");
let what = document.querySelector("#what");
let answer = document.querySelector("#answer");
let symbol = document.querySelector("#symbol");
let halka = document.querySelector("#halka");
let buttonElement=document.querySelector("button");



inputElement.addEventListener("keydown", (event) => {
    if (event.keyCode === 13) { 
        const userInput = parseInt(inputElement.value);

        if (userInput == 86) {
            what.innerText = "Name of Candidate:";
            what.style.fontSize = "34px";
            answer.innerText = "Miqdad Khan";
            halka.innerText = ` Halka Number:  ${userInput}`;
            halka.style.fontSize = "34px";
            halka.style.fontWeight = "bolder";

            answer.style.fontSize = "34px";
            answer.style.fontWeight = "bolder";
            answer.classList.add("answernew");
            symbol.innerText = "Electoral Symbol:";
            symbol.style.fontSize = "34px";

            let image = document.createElement("img");
            image.src = "https://scontent.xx.fbcdn.net/v/t1.15752-9/418392820_774553937851208_2568043624264073471_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=510075&_nc_eui2=AeHhhRovThPxp-Iea5tkQLpgSPQwt9otsNxI9DC32i2w3Ak4BvB7yrzc3J3QFNNW02Oruj4h-mLoe5xcWJqWzzOi&_nc_ohc=CvJlzSg3I24AX-sqfQN&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdSvwvXPi6z4vbgGS0pacvBcWlIKUkCJFXrdxzSNUZXLdw&oe=65D838FB";
            symbol.appendChild(image);
            image.style.display = "block";
        }


        else if (userInput == 5) {
            what.innerText = "Name of Candidate:";
            what.style.fontSize = "34px";
            answer.innerText = "Sahibzada Sibghatullah";
            answer.style.fontSize = "34px";
            answer.style.fontWeight = "bolder";
            answer.classList.add("answernew");
            symbol.innerText = "Electoral Symbol:";
            symbol.style.fontSize = "34px";
            halka.innerText = ` Halka Number:  ${userInput}`;
            halka.style.fontSize = "34px";
            halka.style.fontWeight = "bolder";


            let image = document.createElement("img");
            image.src = "https://scontent.xx.fbcdn.net/v/t1.15752-9/414194770_2112636375756254_1902613169119213678_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=510075&_nc_eui2=AeHrlOD03bKbY6Nv6DhNcY4B1El5xCpCFYHUSXnEKkIVgeMuAmydnfs-1dcCCzBJbZyBcNsb1k3dPSz6QlY4epGo&_nc_ohc=enlT3cVrlbMAX-QtPPj&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdSBOcTdgkujqm1_xzDg-2nplyl-9uQZa5gKf4T-uJlusg&oe=65D81F8C";
            symbol.appendChild(image);
            image.style.display = "block";
        }

        else if (userInput == 52) {



            what.innerText = "Name of Candidate:";
            what.style.fontSize = "34px"

            answer.innerText = " Farrukh Siyal";
            answer.style.fontSize = "34px";
            answer.style.fontWeight = "bolder";
            answer.classList.add("answernew");

            halka.innerText = ` Halka Number:  ${userInput}`;
            halka.style.fontSize = "34px";
            halka.style.fontWeight = "bolder";


            symbol.innerText = "Electoral Symbol:";
            symbol.style.fontSize = "34px"



            let image = document.createElement("img");

            image.src = "https://scontent.xx.fbcdn.net/v/t1.15752-9/414368899_1100193990986737_4527058527134262080_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=510075&_nc_eui2=AeEqnOl0o0nqce4cMPdixiUQxN6jFD6OwE_E3qMUPo7AT8g1ikpxh1_fESN2jgHTUdWpbzAyO-CufHBUkyIutOlJ&_nc_ohc=fQOy7wE7Aa8AX-3f3yj&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdSr5VCbXVGkg33DnLVhNuweqE4F4qKjKyZsn2EFnSBoXw&oe=65D84C11";
            symbol.appendChild(image);

            image.style.display = "block";


        }


        inputElement.value = "";
    }
});




buttonElement.addEventListener("click",()=>{

    const userInput = parseInt(inputElement.value);

    if (userInput == 86) {
        what.innerText = "Name of Candidate:";
        what.style.fontSize = "34px";
        answer.innerText = "Miqdad Khan";
        halka.innerText = ` Halka Number:  ${userInput}`;
        halka.style.fontSize = "34px";
        halka.style.fontWeight = "bolder";

        answer.style.fontSize = "34px";
        answer.style.fontWeight = "bolder";
        answer.classList.add("answernew");
        symbol.innerText = "Electoral Symbol:";
        symbol.style.fontSize = "34px";

        let image = document.createElement("img");
        image.src = "https://scontent.xx.fbcdn.net/v/t1.15752-9/418392820_774553937851208_2568043624264073471_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=510075&_nc_eui2=AeHhhRovThPxp-Iea5tkQLpgSPQwt9otsNxI9DC32i2w3Ak4BvB7yrzc3J3QFNNW02Oruj4h-mLoe5xcWJqWzzOi&_nc_ohc=CvJlzSg3I24AX-sqfQN&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdSvwvXPi6z4vbgGS0pacvBcWlIKUkCJFXrdxzSNUZXLdw&oe=65D838FB";
        symbol.appendChild(image);
        image.style.display = "block";
    }


    else if (userInput == 5) {
        what.innerText = "Name of Candidate:";
        what.style.fontSize = "34px";
        answer.innerText = "Sahibzada Sibghatullah";
        answer.style.fontSize = "34px";
        answer.style.fontWeight = "bolder";
        answer.classList.add("answernew");
        symbol.innerText = "Electoral Symbol:";
        symbol.style.fontSize = "34px";
        halka.innerText = ` Halka Number:  ${userInput}`;
        halka.style.fontSize = "34px";
        halka.style.fontWeight = "bolder";


        let image = document.createElement("img");
        image.src = "https://scontent.xx.fbcdn.net/v/t1.15752-9/414194770_2112636375756254_1902613169119213678_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=510075&_nc_eui2=AeHrlOD03bKbY6Nv6DhNcY4B1El5xCpCFYHUSXnEKkIVgeMuAmydnfs-1dcCCzBJbZyBcNsb1k3dPSz6QlY4epGo&_nc_ohc=enlT3cVrlbMAX-QtPPj&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdSBOcTdgkujqm1_xzDg-2nplyl-9uQZa5gKf4T-uJlusg&oe=65D81F8C";
        symbol.appendChild(image);
        image.style.display = "block";
    }

    else if (userInput == 52) {



        what.innerText = "Name of Candidate:";
        what.style.fontSize = "34px"

        answer.innerText = " Farrukh Siyal";
        answer.style.fontSize = "34px";
        answer.style.fontWeight = "bolder";
        answer.classList.add("answernew");

        halka.innerText = ` Halka Number:  ${userInput}`;
        halka.style.fontSize = "34px";
        halka.style.fontWeight = "bolder";


        symbol.innerText = "Electoral Symbol:";
        symbol.style.fontSize = "34px"



        let image = document.createElement("img");

        image.src = "https://scontent.xx.fbcdn.net/v/t1.15752-9/414368899_1100193990986737_4527058527134262080_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=510075&_nc_eui2=AeEqnOl0o0nqce4cMPdixiUQxN6jFD6OwE_E3qMUPo7AT8g1ikpxh1_fESN2jgHTUdWpbzAyO-CufHBUkyIutOlJ&_nc_ohc=fQOy7wE7Aa8AX-3f3yj&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdSr5VCbXVGkg33DnLVhNuweqE4F4qKjKyZsn2EFnSBoXw&oe=65D84C11";
        symbol.appendChild(image);

        image.style.display = "block";


    }


    inputElement.value = "";

    
});














