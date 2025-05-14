/* 🌟 Extra Challenge #2 (Optional)
Create the following function:
The function should take one parameter.
Behavior: */
/* If the parameter is a string: return the string with "😎" added at the start and end 
If it’s a number:
Double the number
Convert to string
Return with "😎" at the start and end
If it’s a boolean:
If true, return "😎Yes😎"
If false, return "😎Relax😎"
If it’s any other datatype:
Return "😎Only primitive values😎" */

let emoji = "😎";
function typeOperations(param){
    let message="";
    if (typeof param === "string"){
        message = param;
    }else if (typeof param === "number"){
        param= (param*2).toString();
        message =param;
    }
    else if (typeof param === "boolean"){
        if(param){
            message="Ja"
        }else{
        message ="Slapp av";
        }
    }else{
        message="Kun primitive verdier"
    }
 message= emoji+message+emoji;
 return message;
}
console.log(typeOperations(3));
console.log(typeOperations(true));
console.log(typeOperations(false));
console.log(typeOperations("Coding is life"));
