
function run() {

    let html = document.querySelector("#html").value;
    let css = "<style>"+document.querySelector("#css").value+"</style>";
    let js = document.querySelector("#js").value;

    let output = document.querySelector(".display");
    output.contentDocument.body.innerHTML = html+css;
    output.contentWindow.eval(js);
}

document.querySelector("#html").addEventListener("keyup",run);
document.querySelector("#css").addEventListener("keyup",run);
document.querySelector("#js").addEventListener("keyup",run);