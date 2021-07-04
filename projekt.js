let alert1 = document.getElementById("alert1")
let alert2 = document.getElementById("alert2")
alert1.style.display = "none"
alert2.style.display = "none"


function pretplata_arrow(){
    let arrow = document.getElementById("arrow")
    let email = document.getElementById("email").value
    
    if(email.includes("@")){
        arrow.style.display = "inline"
    } else{
            arrow.style.display = "none"
        }

        }
function pretplata(){
    let email = document.getElementById("email").value

    if(email.length > 10){
        alert1.style.display = "inline"
        setTimeout(function(){
            alert1.style.display = "none"
        }, 3000)
    } else{
        alert2.style.display = "inline"
        setTimeout(function(){
            alert2.style.display = "none"
        }, 3000)
    }
}