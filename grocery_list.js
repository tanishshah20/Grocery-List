const input_btn = document.getElementById("input")
const o_list = document.getElementById("list")

function add_to_list() {
    if(input_btn.value !== ""){
        o_list.innerHTML += "<li>"+input_btn.value+"</li>"
    }
    input_btn.value = ""
}


