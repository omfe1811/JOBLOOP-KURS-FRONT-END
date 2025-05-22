const helloWorldBtn = document.querySelector("#helloWorldBtn");
const countBtn = document.querySelector("#countBtn")

helloWorldBtn.addEventListener(
    'click', () =>
    console.log('Hello World'));

let count = 0; //It needs to be let to modify the number later;
countBtn.addEventListener(
    'click', () => {  
        count++;
        countBtn.textContent=`Count: ${count}`;
    }
);

const form=document.querySelector("#loginForm")
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const formData= new FormData(form);
    const email=formData.get("email");
    const password=formData.get("password");
    console.log(email,password);
});
