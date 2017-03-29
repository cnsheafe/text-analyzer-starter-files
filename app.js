/*jshint esversion: 6*/
function handleSubmit() {
  $('form').on('submit', function(event) {
    event.preventDefault();
    $('dl').addClass('hidden');
    const textInput = $(this).serializeArray()[0].value;
    const report = makeReport(textInput);
    const children = $('.hidden').find('dd');
    children.eq(0).text(report.wordCount);
    children.eq(1).text(report.uniqueCount);
    children.eq(2).text(report.wordAvg);
    $('.hidden').removeClass('hidden');
  });
}

function makeReport(text) {

  tokenizedText = text.toLowerCase().split(/\W+/);
  let wordCount = tokenizedText.length;
  if (tokenizedText[tokenizedText.length-1] === ''){
    tokenizedText.pop();
    wordCount--;
  }

  let uniqueWords = new Set();
  for (let i = 0; i < wordCount; i++) {
      uniqueWords.add(tokenizedText[i]);
  }

  let sum = 0;
  for (let  i = 0; i < wordCount; i++) {
    sum += tokenizedText[i].length;
  }

  const report = {
    wordCount: wordCount,
    uniqueCount: uniqueWords.size,
    wordAvg: sum/wordCount
  };

  return report;
}

/*main*/
$(function main(){
  handleSubmit();
});

// Alvin says --> This code deserves an A++++++++++++++++ tending to infinity :)
