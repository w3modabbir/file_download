let inputUrl = document.querySelector(".input_url");
let button = document.querySelector(".input_btn");

button.addEventListener("click", (e) =>{
    e.preventDefault();
    fetchFile(inputUrl.value);
})

function fetchFile(url) {
    fetch(url).then(res => res.blob()).then(file =>{
        let tempUrl = URL.createObjectURL(file);
        let a = document.createElement("a")
        a.href = tempUrl
        a.download = "filename"
        document.body.appendChild(a);
        a.click();
        a.remove();
    });
}