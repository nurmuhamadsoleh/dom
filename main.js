// Type data Function Arrow Function
const ubahText = ()=>{
    // document.getElementById("submit_input").value
    let inputSubmit = document.getElementById('submit_input').value;
    let form = document.getElementById('submit_input');

    console.log(inputSubmit);

    let h1= document.getElementById("ubah");

    // h1.innerHTML += "<br/>" + inputSubmit
    // h1.innerHTML = inputSubmit
    h1.innerHTML += `
    <div class="msg_card">
    <input type="radio" name="radio" id="radio">
    <center>
    <h3 color ="red">${inputSubmit}</h3>
    </center>
    `;
    form.value = '';
};

const resetMsg = () => {
    window.location.reload();
};