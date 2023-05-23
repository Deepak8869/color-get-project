const zodiac = document.getElementById("zodiac");



const body = document.body;
const changeBackground = () =>{
    switch (zodiac.value) {
        case "aries":
            body.style.backgroundColor = "#fc0303";
            break;
        case "tarus":
            body.style.backgroundColor = "#03fc6f";
            break;
        case "gemini":
            body.style.backgroundColor = "#fce514";
            break;
            case "cancer":
            body.style.backgroundColor = "aqua";
            break;
            case "leo":
            body.style.backgroundColor = "brown";
            break;
            case "virgo":
            body.style.backgroundColor = "orange";
            break;
            case "scorpio":
            body.style.backgroundColor = "yellow";
            break;
            case "sagittarius":
            body.style.backgroundColor = "#994ead";
            break;
            case "aquarius":
                body.style.backgroundColor = "#579eeb";
                break;
    
        default:
            body.style.backgroundColor = "#fff";
            break;
    }
}