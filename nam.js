let screen=Document.getElementById("screen");
buttons= document.querySelectorAll("button");
let screenValue = '';
for(item of buttons){
    item.addEventlistener("click", (e)=>{
        buttonText = e.target.innerText;
        console.log('button text is',buttonText);
        if (buttenText== 'X'){
            buttonText = '*' ;
            screen.value  = buttonText;
            screen.value  += buttonText;
        }
        else if (buttonText  == 'c'){
            screen.value  = '';
        }
    else if (buttonText  == '='){

    }
    })
}