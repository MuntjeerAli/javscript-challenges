//Challenge #1
//Mark and John are trying to compare their BMI (Body Mass Index), which is
//calculated using the formula:

// const massMark = 78;
// const massJohn = 92;
// const heightMark = 1.69;
// const heightJohn = 1.95;

// const markBmi = massMark / heightMark ** 2;
// const johnBmi = massJohn / heightJohn ** 2;

// const higherBmi = markBmi > johnBmi;

// console.log(markBmi, johnBmi, higherBmi)

//Challenge #2
//Use the BMI example from Challenge #1, and the code you already wrote, and
//improve it.

// const massMark = 95;
// const massJohn = 85;
// const heightMark = 1.88;
// const heightJohn = 1.76;

// const markBmi = massMark / heightMark ** 2;
// const johnBmi = massJohn / heightJohn ** 2;
// if(markBmi > johnBmi){
//     console.log(`Mark's BMI (${markBmi}) is higher than John's (${johnBmi})!`);
// }else{
//     console.log(`John's BMI (${johnBmi}) is higher than Mark's (${markBmi})!`);
// }

//Challenge #3
//There are two gymnastics teams, Dolphins and Koalas. They compete against each
//other 3 times. The winner with the highest average score wins a trophy!

// const avgDolphins = (96 + 108 + 89) / 3;
// const avgKoalas = (88 + 91 + 110) / 3;
// console.log(avgDolphins, avgKoalas);

// if(avgDolphins > avgKoalas){
//     console.log("Dolphins win the trophy.");
// }else if(avgKoalas > avgDolphins){
//     console.log("Koalas win the Trophy.");
// }else if(avgDolphins === avgKoalas){
//     console.log("Both wins.");
// }

// const avgDolphins = (97 + 112 + 101) / 3;
// const avgKoalas = (109 + 95 + 123) / 3;
// console.log(avgDolphins, avgKoalas);

// if (avgDolphins > avgKoalas && avgDolphins >= 100){
//     console.log("Dolphins win the Trophy.");
// }else if (avgKoalas > avgDolphins && avgKoalas >= 100){
//     console.log("Koalas win the Trophy.");
// }else if( avgDolphins === avgKoalas && avgDolphins >= 100 && avgKoalas >= 100){
//     console.log("Both teams win the Trophy.");
// }else{
//     console.log("No one win the match.")
// }

//Challenge #4
//Steven wants to build a very simple tip calculator for whenever he goes to eat in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

// const bill = 275;
// let tip;
// switch (tip){
//     case '50<= bill <= 300':
//     console.log(bill ** 0.15);
//     break
//     case 'bill >= 300':
//     console.log(bill ** 0.20);
//     break
// }

// const bill = 275;
// const tip = 300 >= bill && bill <= 300 ? (bill * 0.20) : (bill * 0.15);
// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value is ${bill + tip}`);


//Challenge #5
//Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
//gymnastics discipline, which works differently.
//Data 1
// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// let avgDolphins = calcAverage(44, 23, 71);
// let avgKoalas = calcAverage(65, 54, 49);

// const checkWinner = (avgDolphins, avgKoalas) => {
//     if (avgDolphins = 2 * avgKoalas){
//         console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
//     }else if(avgKoalas = 2 * avgDolphins){
//         console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
//     }else {
//         console.log('No Result');
//     }
// }

// console.log(checkWinner(avgDolphins, avgKoalas));

//Challenge #6
//Steven is still building his tip calculator, using the same rules as before: Tip 15% of
//the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

// const calcTip = (bill) => {
//     if(bill <= 300){
//         console.log(bill * 0.15);
//     }else if(bill >= 300){
//         console.log(bill * 0.2);
//     }
// }
// console.log(calcTip(400));

// const calcTip = function (bill) {
//     return 50 <= bill <= 300 && bill >= 300 ? bill * 0.15 : bill * 0.2;
//   }
  
//   const bills = [125, 555, 44];
//   const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
//   const total = [bills[0]+tips[0], bills[1]+tips[1], bills[2]+tips[2]];
  
//   console.log(`Bill is ${bills[0]}, tip is ${tips[0]} and total bill will be ${total[0]}`);
//   console.log(`Bill is ${bills[1]}, tip is ${tips[1]} and total bill will be ${total[1]}`);
//   console.log(`Bill is ${bills[2]}, tip is ${tips[2]} and total bill will be ${total[2]}`);

//Challenge #7
// const mark = {
//     fullname : 'Mark Miller',
//     weight: '78',
//     height: '1.69',
//     calcBMI: function(){
//         this.bmi = this.weight / (this.height ** 2);
//     }
// }
//  mark.calcBMI();
// console.log(mark);

// const john = {
//     fullname : 'John Smith',
//     weight: '92',
//     height:'1.95',
//     calcBMI: function(){
//         this.bmi = this.weight / (this.height ** 2);
//     }
// }
// john.calcBMI();
// console.log(john);

// if (mark.bmi > john.bmi){
//     console.log(`Mark's BMI (${mark.bmi}) is higher than John's (${john.bmi})`);
// }else if(john.bmi > mark.bmi){
//     console.log(`John's BMI (${john.bmi}) is higher than Mark's(${mark.bmi})`);
// }else{
//     console.log(`Mark and John have same BMI`)
// }

//Challenge #8

const calcTip = function (bill) {
    return 50 <= bill <= 300 && bill >= 300 ? bill * 0.15 : bill * 0.2;
  }
  
  const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
  const tips = [calcTip(bills)];
  const total = [bills+tips];
for(let i = 0; i < 10; i++){
    
}