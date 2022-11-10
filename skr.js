function gl() {
    document.getElementById("content").innerHTML = "Rekurencja posiada ";
    document.getElementById("headerPopup").style.display = "none";
    document.getElementById("fib").style.display = "none";
    document.getElementById("han").style.display = "none";
    document.getElementById("myForm").style.display = "none";
    document.getElementById("main").style.display = "block";
}

function f() {
    document.getElementById("content").innerHTML = "Fraktal (łac. fractus – złamany, cząstkowy, ułamkowy) w znaczeniu potocznym oznacza zwykle obiekt samopodobny (tzn. taki, którego części są podobne do całości) albo „nieskończenie złożony” (ukazujący coraz bardziej złożone detale w dowolnie wielkim powiększeniu). Ze względu na olbrzymią różnorodność przykładów matematycy obecnie unikają podawania ścisłej definicji i proponują określać fraktal jako zbiór, który posiada wszystkie poniższe charakterystyki albo przynajmniej ich większość:\n" +
        "\n" +
        "ma nietrywialną strukturę w każdej skali,\n" +
        "struktura ta nie daje się łatwo opisać w języku tradycyjnej geometrii euklidesowej,\n" +
        "jest samopodobny, jeśli nie w sensie dokładnym, to przybliżonym lub stochastycznym,\n" +
        "jego wymiar Hausdorffa jest większy niż jego wymiar topologiczny,\n" +
        "ma względnie prostą definicję rekurencyjną,\n" +
        "ma naturalny („poszarpany”, „kłębiasty” itp.) wygląd.";
    document.getElementById("headerPopup").style.display = "block";
    document.getElementById("fib").style.display = "none";
    document.getElementById("han").style.display = "none";
    document.getElementById("myForm").style.display = "none";
    document.getElementById("main").style.display = "none";

}


function fr() {
    document.getElementById("content").innerHTML = "Rekurencja (zwana też rekursją) w przypadku funkcji, to odwołanie się funkcji do samej siebie w celu uzyskania pętli. Jest to pojęcie matematyczne, spotykane również (i to dość często) w informatyce. Definicja ta w podstawowej wersji jest niesamowicie krótka, dlatego opowiedzmy sobie o różnych rzeczach, które z rekursją są związane. \n" +
        "\n" +
        "Warto wspomnieć, że rekurencja nie odnosi się tylko do funkcji. Rekurencyjne (w informatyce) mogą być też typy i struktury danych.\n" +
        "\n" +
        "To, co należy jeszcze wiedzieć, to żeby rekurencja nie działała w nieskończoność, musimy zdefiniować część wartości funkcji bez zapętlenia rekursją. Przykładowo, ustalamy, że dla argumentu funkcji równego 1 zwracamy wartość 0, a resztę definiujemy już przez pętlę.";
    document.getElementById("headerPopup").style.display = "none";
    document.getElementById("fib").style.display = "block";
    document.getElementById("han").style.display = "none";
    document.getElementById("myForm").style.display = "block";
    document.getElementById("main").style.display = "none";

}

function wh() {
    document.getElementById("headerPopup").style.display = "none";
    document.getElementById("content").innerHTML = "Wieże Hanoi – problem polegający na odbudowaniu, z zachowaniem kształtu, wieży z krążków o różnych średnicach (popularna układanka), przy czym podczas przekładania wolno się posługiwać buforem (reprezentowanym w tym przypadku przez dodatkowy słupek), jednak przy ogólnym założeniu, że nie wolno kłaść krążka o większej średnicy na mniejszy ani przekładać kilku krążków jednocześnie. Jest to przykład zadania, którego złożoność obliczeniowa wzrasta niezwykle szybko w miarę zwiększania parametru wejściowego, tj. liczby elementów wieży.";
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
