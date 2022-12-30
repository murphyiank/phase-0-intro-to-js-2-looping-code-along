const names = ["Guadalupe", "Ollie", "Aki"];
const bDay = "surprise";
function writeCards(names, bDay){
    let thankYou= []
    for (let i = 0; i < names.length; i++) {
        thankYou.push(`Thank you, ${names[i]}, for the wonderful ${bDay} gift!`);
        }
    return thankYou;
}



function countDown(){
    let down = 10;
    while (down >=0){
        console.log(down--);
    }
}
