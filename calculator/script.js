

function add(a,b)
{

    return Number(a)+Number(b);
}

function sub(a,b)
{
    return Number(a)-Number(b);
}

function mul(a,b)
{
    return Number(a)*Number(b);
}

function div(a,b)
{   
    if (b==0)
    {
        return "undefined";
    }
    return Number(a)/Number(b);
}

function operate(op,a,b)
{
    switch (op){
        case '+':
            return add(a,b);
            break;
        case '-':
            return sub(a,b);
            break;
        case '*':
            return mul(a,b);
            break;
        case '/':
            return div(a,b);
            break;
    }
}

function action(event)
{

    content = event.target.textContent;
    switch (content)
    {
        case "Clear":
            clearDisplay();
            break;
        case "Back":
            backSpace();
            break;
        case "=":
            evaluate();
            break;
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
        case "0":
        case ".":
            processNum(content);
            break;
        case "/":
        case "x":
        case "-":
        case "+":
            let expr = innerDisplay.textContent;
            if (expr.includes('+') || expr.includes('-') || expr.includes('x') || expr.includes('/') )
            {
                evaluate();
            }
            processOp(content);
            break;
        
    }
} 

function clearDisplay()
{
    innerDisplay.textContent = "";
    outerDisplay.textContent = "";
}

function backSpace()
{
    innerDisplay.textContent = innerDisplay.textContent.slice(0,-1)
}

function evaluate()
{
    let expr = innerDisplay.textContent;
    let result = 0;
    let args;
    if (expr.includes('+'))
    {
        args = expr.split('+');
        result = operate('+',args[0],args[1]);
    }
    else if (expr.includes('-'))
    {
        args = expr.split('-');
        result = operate('-',args[0],args[1]);
    }
    else if (expr.includes('x'))
    {
        args = expr.split('x');
        result = operate('*',args[0],args[1]);
    }
    else if (expr.includes('/'))
    {
        args = expr.split('/');
        result = operate('/',args[0],args[1]);
    }
    innerDisplay.textContent = result;
}

function processNum(num)
{
    innerDisplay.textContent = innerDisplay.textContent  + num;
}

function processOp(op)
{
    innerDisplay.textContent = innerDisplay.textContent  + op;
 
}


const innerDisplay = document.querySelector("#inner");
const outerDisplay = document.querySelector("#outer");
const buttons = document.querySelectorAll("button");
buttons.forEach((button)=> button.addEventListener('click',action))
