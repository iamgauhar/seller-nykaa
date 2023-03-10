
document.querySelector("#pass_msg_1").style.display = "none"
document.querySelector("#fail_msg_2").style.display = "none"
document.querySelector("#login-loader").style.display = "none"

document.querySelector("form").addEventListener("submit", async(e)=>{
    e.preventDefault()
document.querySelector("#login-loader").style.display = "block"
    
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;

    let sellersignup = {
        email,
        password,
    }
try {

    const res = await fetch("https://adventurous-pike-hat.cyclic.app/seller/login", {
        method: "POST",
        body: JSON.stringify(sellersignup),
        headers: {
            "content-type": "application/json"
        }
    })
    
    const result = await res.json()
    console.log(result)

    if(result.token){
        localStorage.setItem("sltoken",result.token)
        localStorage.setItem("seller", (result.seller))
        localStorage.setItem("sellerid", (result.sellerid))
    }
    
    document.querySelector("#login-loader").style.display = "none"

    if(result.msg == "Login successfull"){
        document.querySelector("#pass_msg_1").style.display = "block"
        document.querySelector("#pass_msg").innerHTML = result.msg
        passMsg()
    }else{
        document.querySelector("#fail_msg_2").style.display = "block"
        document.querySelector("#fail_msg").innerHTML = result.msg
        failMsg()
    }
} catch (error) {
    console.log(error)
}


})

function passMsg(){
    setTimeout(()=>{
        document.querySelector("#pass_msg_1").style.display = "none"
        location.href = "index.html"
    }, 2000)
}
function failMsg(){
    setTimeout(()=>{
        document.querySelector("#fail_msg_2").style.display = "none"
        // document.querySelector("#pass_msg").innerHTML = msg
    }, 3000)
}