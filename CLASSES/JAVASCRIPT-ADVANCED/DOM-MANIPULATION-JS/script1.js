console.log("Hello Worls!")
const gransparent= document.getElementById("grandparent");
const parents= document.querySelectorAll(".parent");
grandparent.style.backgroundColor
const yellowMaker = (element)=>{
element.style.backgroundColor="yellow";
}
yellowMaker(grandparent);
/* 
const parents=document.getElementsByClassName("parent")

for (parent of parents){
    yellowMaker(parent);
} */




const newElement = document.createElement("h1");
newElement.textContent= "Javascript babyyy!";
grandparent.append(newElement);



const fruits = ["Apple", "Banana", "Cherry", "Orange", "Grapes", "Mango"];

/* <ul>
    <li>Kiwi</li>
     <li>Kiwi</li>
    <li>Kiwi</li>
     <li>Kiwi</li>
     <li>Kiwi</li>
     <li>Kiwi</li>

</ul> */

const fruitList = document.createElement("ul");

for(let i=0; i<fruits.length; i++){
    const fruitItem=document.createElement("li");
    fruitItem.textContent= fruits [i];
    fruitItem.style.fontSize=`${Math.floor(Math.random()*40+10)}px`
    fruitItem.style.fontWeight="800";
    fruitList.append(fruitItem);
}
document.body.prepend(fruitList); //add on top
//document.body.append(fruitList); add on bottom
