
function checkBtn(){

    first = document.getElementById("firstPerson").value
second = document.getElementById("SecondPerson").value

    if (first === "" || second  === "")
    {
        alert("Input cannot be Empty")
    }

    else if(first == second )
    {
        alert("You can't input the same name")
    }
    else{
        ans = Math.round(Math.random()*100)

        show.innerHTML = ` <p> <span> ${first} </span> and <span> ${second} </span> are ${ans}% compatible </p>
        `
        
        document.getElementById("firstPerson").value =''
        document.getElementById("SecondPerson").value = ''
    }
}

