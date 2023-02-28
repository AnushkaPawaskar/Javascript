const InputtedNumbers = [12, 56, 755, 27, 16, 2, 1104, 65, 88];

console.log("Using else if ladder")
for (i = 0; i < InputtedNumbers.length - 1; i++) {
    if (InputtedNumbers[i] % 3 == 0) {
        console.log(`${InputtedNumbers[i]} is divisible by 3 `);

    }
    else if (InputtedNumbers[i] % 8 == 0) {
        console.log(`${InputtedNumbers[i]} is divisible by 8`);

    }
    else {

        console.log(`${InputtedNumbers[i]} is not divisible by 8 and 3`)
    }

}

console.log("****************************************************************************")
console.log("Using while loop with switch statement")
const InputtedNumbers1 = [12, 56, 755, 27, 16, 2, 1104, 65, 88];

while (InputtedNumbers1[i] < InputtedNumbers1.length - 1) {
    console.log(`${InputtedNumbers1[i]}`)
}
    
          

           

            






    

