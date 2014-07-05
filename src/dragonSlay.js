// dragonSlay.js
// (C) 2014 splashinn

var slay = true;
var youHit = Math.floor(Math.random() * 2);
var damageThisRound = Math.floor(Math.random() * 6 + 1);
var totalDamage = 0;

while(slay) {
	if(youHit) {
		print("You hit the dragon and did " + damageThisRound + " damage!");
		totalDamage += damageThisRound;

		if(totalDamage >= 4) {
			print("You did it! You slew the dragon!");
			slay = false;
		} else {
			youHit = Math.floor(Math.random() * 2);
		}
	} else {
		print("The dragon whooped your ass!");
		slay = false;
	}
}