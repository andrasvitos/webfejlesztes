document.getElementById("CountButton").addEventListener(counter);
function counterFunction() {

    let price = 0;

    let adults = Number(document.getElementById("adults").value);
    let children = Number(document.getElementById("children").value);

    price = (adults * 20) + (children * 10)

    let welcome = document.getElementById("lista").selectedIndex;
    let london = document.getElementById("lista").selectedIndex;
    let square = document.getElementById("lista").selectedIndex;
    let grass = document.getElementById("lista").selectedIndex;

    if (welcome == 0) {
        price = price * 1.3;
    }
    else if (london == 1) {
        price = price * 1.2;
    }
    else if (square == 2) {
        price = price * 1.1;
    }
    else if (grass == 3) {
        price = price * 1.4;
    }

    document.getElementById("price").value = `£${price}`
}

