const input_btn = document.getElementById("input");
const o_list = document.getElementById("list");
function add_to_list() {
    if(input_btn.value !== ""){
        const list = document.createElement("li");
        list.innerHTML = input_btn.value;
        o_list.appendChild(list);

        list.addEventListener('click', function(){
            this.classList.toggle('done');
        });
    }
    input_btn.value = "";
}
