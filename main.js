const display = document.querySelector("#display");
const button = document.querySelectorAll(".button");
const operator = document.querySelectorAll(".operators");


button.forEach(button => {

    button.addEventListener("click", (e) => {
        switch(e.target.textContent) {
            case "AC":
                display.textContent = "";
                break;
            default:
                display.textContent += e.target.textContent;
        }
        
    });
});

operator.forEach(operators => {

    operators.addEventListener("click", (e) => {
        switch(e.target.textContent) {
            case "=":
                try{
                    display.textContent = eval(display.textContent);
                } catch{
                    display.textContent = " ";
                }
                    
                    break;
            default:
                display.textContent += e.target.textContent;
        }
    })
})

