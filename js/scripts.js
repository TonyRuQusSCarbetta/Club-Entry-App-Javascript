var firstName = prompt("What is your first name?");
var lastName = prompt("What's your last name?");
var age = prompt("What is your age?");

document.getElementById('entrance3').innerHTML = "Welcome to the club " + firstName + " " + lastName + ". ";
// document.getElementById('entrance3').style.fontSize = 'xx-large';

if (age >= 21) {
  document.write("You have full access and drinks are free until 11pm!");

  document.getElementById('entrance').innerHTML = '<img src=\'img/club-get-in.png\'><img src=\'img/free-drink.png\'>';

} else if (age > 18 && age < 21) {
  document.write("You can't drink any alohol, but you are old enough to get in!");
  document.getElementById('answer').innerHTML = '<img src=\'img/too-young-to-drink.png\'><img src=\'img/club-entrance1.png\'>';
} else {
  document.write("You are too young to get in!  Don't make me call your parents!");
  document.getElementById('entrance').innerHTML = '<img src=\'img/club-entrance.png\'><img src=\'img/full-name.png\'>';
}
