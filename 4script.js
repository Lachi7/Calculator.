let display=document.querySelector(".display")
let buttons=document.querySelectorAll("button")
let string=""
let arr=Array.from(buttons)
arr.forEach(button=>{
    button.addEventListener("click",(e)=>{
        if(e.target.innerHTML=="="){
            string=eval(string)
            display.innerHTML=string
        }
        else if(e.target.innerHTML=="C"){
            string=""
            display.innerHTML=string
        }
        else if(e.target.innerHTML==  "←" ){
            string = string.slice(0,string.length-1);
            display.innerHTML=string
        }
        else if(e.target.innerHTML=="±"){
            //"&#177;"
            if(string!==0 ){
                string=-1*Number(string)
            }
            display.innerHTML=string
        }
        else if(e.target.innerHTML=="%"){
            string=eval(string)/100
            display.innerHTML=string
        }
        else if(e.target.innerHTML=="."){
            let count = Array.from(string).filter(char => char === e.target.innerHTML).length;
            if(count>=1){
                string="Error"
            }
            else{
                string+=e.target.innerHTML
            }
            display.innerHTML=string
        }
        else{
            string+=e.target.innerHTML
            display.innerHTML=string
        }
    })
})