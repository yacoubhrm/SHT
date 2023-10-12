let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let loi = document.getElementById("loi");
let next = document.getElementById("next");

btn1.onclick = function() {
    loi.style.display = "block";
    next.style.display = "block";
    btn1.className = "btn btn-danger btn-block";
    btn2.className = "btn btn-success btn-block";
    btn3.className = "btn btn-danger btn-block";
    btn4.className = "btn btn-danger btn-block";
}

btn2.onclick = function() {
    loi.style.display = "block";
    next.style.display = "block";
    btn1.className = "btn btn-danger btn-block";
    btn2.className = "btn btn-success btn-block";
    btn3.className = "btn btn-danger btn-block";
    btn4.className = "btn btn-danger btn-block";
}

btn3.onclick = function() {
    loi.style.display = "block";
    next.style.display = "block";
    btn1.className = "btn btn-success btn-block";
    btn2.className = "btn btn-danger btn-block";
    btn3.className = "btn btn-danger btn-block";
    btn4.className = "btn btn-danger btn-block";
}

btn4.onclick = function() {
    loi.style.display = "block";
    next.style.display = "block";
    btn1.className = "btn btn-success btn-block";
    btn2.className = "btn btn-danger btn-block";
    btn3.className = "btn btn-danger btn-block";
    btn4.className = "btn btn-danger btn-block";
}