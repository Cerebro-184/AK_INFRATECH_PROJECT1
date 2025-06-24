const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const operators = ["%", "x", "÷", "+", "-", "=", "^", ".", "^"];
let output = "";

const calculate = (btn_val) => {
    // display.focus();
    console.log(btn_val);
    if(btn_val === "C"){
        output = ""
    }
    else if(btn_val === "DEL"){
        output = output.toString().slice(0, -1);
    }
    else if(btn_val === "=" && output !== ""){
        output = output.replace(/%/g, "/100*").replace(/x/g, "*").replace(/÷/g, "/").replace(/\^/g, "**");
        try {
            output = eval(output).toString();
        }
        catch {
            output = "Syntax Error";
        }
    }
    else{
        if(output === "" && operators.includes(btn_val)) {
            return;
        }
        if(output === "0" && !operators.includes(btn_val)){
            output = btn_val;
        }
        else{
            output += btn_val
        }
    }
    display.value = output || "0";
};
buttons.forEach((button) => {
    button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});
