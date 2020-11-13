var natural = require("natural");

var classifier = new natural.BayesClassifier();
classifier.addDocument("Tu habites en France, et tu as une voiture", "French");
classifier.addDocument(
  "J'habite dans une grande ville qui s'appelle Dartford",
  "French"
);
classifier.addDocument("You live in England, and you have a car", "English");
classifier.addDocument("I live in a big town called Dartford", "English");

classifier.train();

console.log(
  classifier.classify("I live in London, and my name is Trey, thanks")
);
console.log(
  classifier.classify("J'habite à Paris, et je m'appelle Trey, merci")
);
console.log(classifier.classify("I have a car"));
console.log(classifier.classify("J'ai une voiture"));
