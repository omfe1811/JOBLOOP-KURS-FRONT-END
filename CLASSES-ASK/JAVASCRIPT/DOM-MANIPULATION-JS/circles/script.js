
const inputNum=document.querySelector("#inputNum");
const circleContainer= document.querySelector("#circleContainer");

const makeCircles = () => {
    if (inputNum.value < 1 || inputNum.value > 1000){
        window.alert("don't do that");
    }else{
        //if circles exist anihilate them
        const circles=document.querySelectorAll(".circle");
        for( circle of circles){
        circle.remove();
        }

        //make circles
        for(let i=0; i<inputNum.value; i++){
            const circle= document.createElement("div");
            circle.classList.add("circle");
            circle.textContent=i+1;
            circle.style.background=`#${Math.floor(Math.random()*16777215).toString(16)}`; 
            circleContainer.append(circle);
        }
    }
};