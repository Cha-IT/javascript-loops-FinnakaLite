let oppEnCounter = 1
let oppEnArray = new Array(0)

// Bruk av while loop er enklere i denne situasjonen.
function oppEna() {
    while (oppEnCounter <= 10) {
        oppEnArray.push(oppEnCounter)
        oppEnCounter++
    }

    console.log(oppEnArray)
    document.getElementById("opp1aDisplay").innerHTML = oppEnArray.join(", ");
}


//Bruk av for loop krever at Array'en blir resetet på starten av functionen. Ellers så blir arrayen bare større og større siden Counteren blir resetet.
function oppEnb() {
    let oppEnbArray = new Array(0)
    for (let oppEnbCounter = 1; oppEnbCounter <= 10; oppEnbCounter++) {
        oppEnbArray.push(oppEnbCounter)
    }

    console.log(oppEnbArray)
    document.getElementById("opp1bDisplay").innerHTML = oppEnbArray.join(", ");
}