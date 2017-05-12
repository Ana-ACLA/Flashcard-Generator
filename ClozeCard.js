// ClozeCard constructor takes two arguments: text and cloze.
// These values represent the full text and the cloze-deleted portion of the flashcard text.
var ClozeCard = function(fullText, cloze) {

    this.fullText = fullText;
    this.cloze = cloze;
    this.partial = fullText.replace('...', cloze);
    // Convert the incoming strings to lower case
    var textToLower = fullText.toLowerCase();
    var clozeToLower = cloze.toLowerCase();

};


module.exports = ClozeCard;
