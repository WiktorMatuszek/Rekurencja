function gl() {
    document.getElementById("content").innerHTML = "strona glownaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
    document.getElementById("headerPopup").style.display = "none";
    document.getElementById("fib").style.display = "none";
    document.getElementById("han").style.display = "none";
    document.getElementById("myForm").style.display = "none";
    document.getElementById("main").style.display = "block";
}

function f() {
    document.getElementById("content").innerHTML = "fraktale";
    document.getElementById("headerPopup").style.display = "block";
    document.getElementById("fib").style.display = "none";
    document.getElementById("han").style.display = "none";
    document.getElementById("myForm").style.display = "none";
    document.getElementById("main").style.display = "none";

}

function ci() {
    document.getElementById("content").innerHTML = "ciagi";
    document.getElementById("headerPopup").style.display = "none";
    document.getElementById("fib").style.display = "none";
    document.getElementById("han").style.display = "none";
    document.getElementById("myForm").style.display = "none";
    document.getElementById("main").style.display = "none";

}

function fr() {
    document.getElementById("content").innerHTML = "funkcje rekurencyjne";
    document.getElementById("headerPopup").style.display = "none";
    document.getElementById("fib").style.display = "block";
    document.getElementById("han").style.display = "none";
    document.getElementById("myForm").style.display = "block";
    document.getElementById("main").style.display = "none";

}

function wh() {
    document.getElementById("headerPopup").style.display = "none";
    document.getElementById("content").innerHTML = "wieza haonoi";
    document.getElementById("fib").style.display = "none";
    document.getElementById("han").style.display = "block";
    document.getElementById("myForm").style.display = "none";
    document.getElementById("main").style.display = "none";
}

function clear() {
    document.getElementById("fib").style.display = "none";
    document.getElementById("headerPopup").style.display = "none";
    document.getElementById("han").style.display = "none";
    document.getElementById("myForm").style.display = "none";
    document.getElementById("main").style.display = "block";
    document.getElementById("content").innerHTML = "Przygotowane przez Jeremiasza Moroza, Wiktora Matuszka, Jakuba Pacha";
}

function fibonacci(n) {
    if (n > 2) {
        let a = 1;
        let b = 1;
        let c = 0;
        for (let i = 0; i < n - 2; i++) {
            c = a + b;
            a = b;
            b = c;
        }
        return c;
    }
}

function odpal() {
    let n = document.getElementById("name").value;
    if (n < 1) document.getElementById("i1").innerHTML = "Wynik nie istnieje"
    else if (n === "1" || n === "2") document.getElementById("i1").innerHTML = "Wynik: 1";
    else if (n > 10000000000000000) {
        document.getElementById("i1").innerHTML = "Zabiłeś system";
    } else if (n > 1000000000000) document.getElementById("i1").innerHTML = "przestaniesz?";
    else if (n > 100000000) document.getElementById("i1").innerHTML = "Naprawde dużo";
    else if (n > 1000) document.getElementById("i1").innerHTML = "dużo";
    else document.getElementById("i1").innerHTML = "Wynik: " + fibonacci(n);
}