'use strict';

function greetUser() {
    var greeting=prompt('Well hello there! Can I call you something other than user?');
    alert('Ok, I will call you ' + greeting);
    console.log('What do I call you?: ' + greeting);
    return greeting;
}

var scoreCount = 0;

function userName(greeting) {
    var myName=prompt('It\'s nice to virtually meet you, ' + greeting + '! Let\'s play a game so you can get to know me. I will ask you a few questions, and I want you to guess the answer with "yes" or "no". Is my name TINA?');
    if (myName.toLowerCase()==='yes' || myName.toLowerCase()==='y'){
    alert('That is correct');
    scoreCount++;
    console.log('That is correct')
    } else {alert('I\m sorry, that is incorrect') }
    console.log('That is incorrect');
    return myName;
}

function studentAtCodeFellows() {
    var studentQuestion= prompt('Am I a student at Code Fellows?');
    if (studentQuestion.toLowerCase()==='yes' || studentQuestion.toLowerCase()==="y"){
        alert('You are correct!');
        scoreCount++;
        //console.log('You are correct!');
    } else {alert('Nope, incorrect')}
        //console.log('That is incorrect');
    return studentQuestion;
}

// var formerJobs = prompt('Have I only worked at one casino?');
// if (formerJobs.toLowerCase()==='no' || formerJobs.toLowerCase() === 'n'){
//     alert('That is correct!');
//     scoreCount++;
//     //console.log('That is correct')
// } else {alert('Not quite the answer I was looking for, I have worked at two casinoes')}
//     //console.log('That is incorrect')}

// var coolJob = prompt('Do I have any job history working for the circus?');
// if (coolJob.toLowerCase()==='no' || coolJob.toLowerCase()==='n'){
//     alert('You\'re correct!');
//     scoreCount++;
//     //console.log('You\'re correct!')
// } else {
//     alert('The casino was a little like a circus, but no.');
// } 
//     //console.log('That\'s not quire right. I wish I had circus experience')

// var cityLocation = prompt('Do I live in Seattle?');
// console.log(cityLocation);
// if (cityLocation.toLowerCase()==='no' || cityLocation.toLowerCase()==='n'){
//     alert('That\'s right, I live in Lynnwood, WA');
//     scoreCount++;
//     //console.log('That\'s right, I live in Lynnwood, WA')
// } else {
//     alert('Not quite, I live in Lynnwood, WA, which is just north of Seattle');
// }
//     //console.log('Not quite, I live in Lynnwood, WA, which is just north of Seattle')

// var howManyPeople = 5;

// for (var i=1; i<=4; i++){
// var answer = prompt('How many people live in my household?');
//     if(parseInt(answer)===howManyPeople){
//     alert('That is correct! That\'s a full house, isn\'t it?');
//     scoreCount++;
//     break;
//     } else if (parseInt(answer) < howManyPeople){
//         alert('No, you\'re too low!')
//     } else if (parseInt(answer) > howManyPeople){
//         alert('No, that\'s too high!')
//     } else {
//         alert('I\'m sorry, that is not a valid response.')
//     }
// };
// if (i===5 && answer!==howManyPeople){
//     alert('I\'m sorry, you are out of guesses! The correct answer is 5.');
// }

// var countries = ['Japan', 'Italy', 'Egypt'];
// for (var i=0; i<=5; i++){
//     var whatCountries = prompt('Fill in the blank! What is one country you think I might want to visit? (It will be case sensitive, as they are Countries!) You will have six guesses.')
//     if (whatCountries === countries[0] || whatCountries === countries[1] || whatCountries === countries[2]){
//     alert('Yes, that\'s a great guess!');
//     scoreCount++;
//     break;
// } else {alert('No, I\'m sorry, that\'s incorrect!')}
// }; 
// if (i=6 && whatCountries !== countries){
//     alert('The correct answers are Japan, Italy, and Egypt.')
// }

// alert('OK! Great job, you got ' + scoreCount + '/7 questions correct! It\'s been great getting to know you!')
// //alert('Ok, ' + greeting + ', you did a great job with that! Thank you for playing!'

var name = greetUser();

userName(name);

studentAtCodeFellows();