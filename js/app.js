'use strict';

var greeting=prompt('Well hello there! Can I call you something other than user?')
alert('Ok, ' + greeting + ' , I will call you ' + greeting)


var myName=prompt('It\'s nice to virtually meet you, ' + greeting + '! Let\'s play a game so you can get to know me. I will ask you a few questions, and I want you to guess the answer with "yes" or "no". Is my name TINA?');
if (myName.toLowerCase()==='yes' || myName.toLowerCase()==='y'){
    alert('That is correct')
    //console.log('That is correct')
} else {alert('I\m sorry, that is incorrect') }
    //console.log('That is incorrect')}

var studentQuestion= prompt('Am I a student at Code Fellows?');
if (studentQuestion.toLowerCase()==='yes' || studentQuestion.toLowerCase()==="y"){
    alert('You are correct!')
    //console.log('You are correct!')
} else {alert('Nope, incorrect')}
    //console.log('That is incorrect')}

var formerJobs = prompt('Have I only worked at one casino?');
if (formerJobs.toLowerCase()==='no' || formerJobs.toLowerCase() === 'n'){
    alert('That is correct!')
    //console.log('That is correct')
} else {alert('Not quite the answer I was looking for, I have worked at two casinoes')}
    //console.log('That is incorrect')}

var coolJob = prompt('Do I have any job history working for the circus?');
if (coolJob.toLowerCase==='no' || coolJob.toLowerCase==='n'){
    alert('You\'re correct!')
    //console.log('You\'re correct!')
} else {
    alert('Sadly no. I wish I had circus experience')
} 
    //console.log('That\'s not quire right. I wish I had circus experience')

var cityLocation = prompt('Do I live in Seattle?')
if (cityLocation.toLowerCase==='no' || cityLocation.toLowerCase==='n'){
    alert('That\'s right, I live in Lynnwood, WA')
    //console.log('That\'s right, I live in Lynnwood, WA')
} else {
    alert('Not quite, I live in Lynnwood, WA, which is just north of Seattle')
}
    //console.log('Not quite, I live in Lynnwood, WA, which is just north of Seattle')

alert('Ok, ' + greeting + ', you did a great job with that! Thank you for playing!')