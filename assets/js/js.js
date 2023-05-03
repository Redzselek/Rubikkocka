var c = ["red", "green", "blue", "yellow", "white", "orange"]
var counter = 0
var idozito 
function Kirak() 
{
    var a = document.getElementById("tablazat")
    var s = ""
    s="<table>"
    for (let i = 0; i < 3; i++) 
    {
        s+="<tr>"
        for (let j = 0; j < 3; j++) 
        {
            s+="<td onclick=\"Szinetker('"+i+j+"')\" id='"+i+j+"'></td>"
        }
        s+="</tr>"
    }
    s+="</table>"
    a.innerHTML=s

    var rnd2 = Math.floor(Math.random()*6)
    for (let h = 0; h < 3; h++) 
    {
        for (let s = 0; s < 3; s++) 
        {
            document.getElementById(h+""+s).style.background = c [rnd2]
        }
    }
}   

function Szinetker(szam) 
{
    var szin = document.getElementById(szam).style.backgroundColor
    for (let i = 0; i < 3; i++) 
    {
        for (let k = 0; k < 3; k++) 
        {
            document.getElementById(i+""+k).style.backgroundColor=szin
        }    
    }
}

function Random()
{
    for (let i = 0; i < 3; i++) 
    {
        for (let j = 0; j < 3; j++) 
        {
            var rnd = Math.floor(Math.random()*6)
            document.getElementById(i+""+j).style.background = c [rnd]
        }
    }
    counter++
    if (counter > 10) 
    {
        clearInterval(idozito)    
    }
}

function Kever() 
{
    counter = 0
    idozito = setInterval(Random,25)
}