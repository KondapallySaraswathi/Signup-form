const title = document.getElementById("title")
const firstName = document.getElementById("full-name")
const button = document.getElementById("button")
const toggles = document.getElementById("toggle");
const textcontent = document.getElementById("text-content")

toggles.addEventListener("click",()=>{
    if(title.textContent === 'Sign Up'){
        title.textContent = "Login"
        button.textContent = "Login"
        firstName.classList.remove("add")
        firstName.classList.add('remove');
        textcontent.innerHTML = "There is no Account ? <span id='toggle'>create Account</span>";
    }else{
        title.textContent = "Sign Up"
        button.textContent = "Sign Up"
        firstName.classList.remove("remove")
        firstName.classList.add('add');
        textcontent.innerHTML = "Already have an Account ? <span id='toggle'>Login</span>";
    }

    const newtoggle = document.getElementById("toggle");
newtoggle.addEventListener('click',()=>{
    toggles.click();
})
})

