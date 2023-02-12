function Send(x)
{
    let div = document.getElementById("Result");
    
    if(div.textContent == 0)
    {
        div.textContent = x;
    }
    else if(div.textContent.length >= 9)
    {
        return;
    }
    else
    {
        div.append(x);
    }
}

function Clear()
{
    let div = document.getElementById("Result");
    div.textContent = 0;
}

function Equals()
{
    let result = document.getElementById("Result");
    let operation = document.getElementById("Operation");
    operation.textContent = result.textContent;
    result.textContent = eval(result.textContent);/*
    if((result.textContent = eval(result.textContent).length) > 9)
    {
        result.textContent = result.textContent.slice(9);         TODO: LIMIT RESULT CHAR SIZE
    }
    */
}