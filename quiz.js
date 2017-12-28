//quiz begins, no answers correct
var correct = 0;

//ask questions
var answer1 = prompt('What is the capital of France?');
if (answer1.toUpperCase() === 'PARIS') {
 correct += 1;
}
var answer2 = prompt('What is the capital of Ireland?');
if (answer2.toUpperCase() === 'DUBLIN') {
 correct += 1;
}
var answer3 = prompt('What is the capital of Serbia?');
if (answer3.toUpperCase() === 'BELGRADE') {
 correct += 1;
}
var answer4 = prompt('What is the capital of China?');
if (answer4.toUpperCase() === 'BEIJING') {
 correct += 1;
}
var answer5 = prompt('What is the capital of the Netherlands?');
if (answer5.toUpperCase() === 'AMSTERDAM') {
 correct += 1;
}

//output results
document.write ('<p>You got ' + correct + ' out of 5 questions correct.</p>');

//output rank
if ( correct === 5) {
  document.write ('<p><strong>You got a gold crown!</strong></p>');
} else if ( correct >= 3 ) {
  document.write ('<p><strong>You got a silver crown!</strong></p>');
} else if ( correct >=1 ) {
  document.write ('<p><strong>You got a bronze crown!</strong></p>');
} else {
  document.write ('<p><strong>You got no crown. :(</strong></p>');
}



