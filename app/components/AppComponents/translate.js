var natural = require("natural");

var reader = new FileReader();

var textEn = reader.readAsText("../../data/trainEn.txt");
var textFr = reader.readAsText("../../data/trainFr.txt");

var classifier = new natural.BayesClassifier();
classifier.addDocument(textFr, "French");
classifier.addDocument(textEn, "English");

classifier.train();

console.log(
  classifier.classify("I live in London, and my name is Trey, thanks")
);
console.log(
  classifier.classify("J'habite à Paris, et je m'appelle Trey, merci")
);
