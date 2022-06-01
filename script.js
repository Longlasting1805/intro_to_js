// let a = 2; 

// if (a == 2){
//     console.log("True")
// }

function add(){
    const value1 = parseFloat(document.getElementById("value1").value);
    const value2 = parseFloat(document.getElementById("value2").value);
   

    if(!value1 || !value2){
        alert("please enter a number value")
        return;
    }

    const result = value1 + value2
    const resultDisplayer = document.getElementById("result");
    resultDisplayer.innerText = result
   

}

// const add2 = (val1, val2) => {
//     let result = val1 + val2;
//     console.log("result:", result)

// }



