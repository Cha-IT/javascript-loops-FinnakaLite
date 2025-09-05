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

// Bruker en variable innenfor functionen for å sleppe å ha to forsjellige funktion til oddetall og partall
function oppTre(oddOrEven) {
    let oppTreArray = new Array(0)
    for (let opp3Counter = 1; opp3Counter <= 100; opp3Counter++) {
        if (opp3Counter % 2 === 0 && oddOrEven === 1) {
            oppTreArray.push(opp3Counter)
        } else if (opp3Counter % 2 !== 0 && oddOrEven === 0) {
            oppTreArray.push(opp3Counter)
        } else {

        }
    }
    console.log(oppTreArray)
    document.getElementById("oppTreResultat").innerHTML = oppTreArray.join(", ");
}

function oppFire() {
    let oppFireArray = new Array(0)

    for (let oppFireCounterY = 1; oppFireCounterY <= 10; oppFireCounterY++) {
        let oppFireNestedArray = new Array(0)

        for (let oppFireCounterX = 1; oppFireCounterX <= 10; oppFireCounterX++) {
            oppFireNestedArray.push(oppFireCounterX * oppFireCounterY)
        }

        oppFireArray.push(oppFireNestedArray)
    }
    console.log(oppFireArray)

}