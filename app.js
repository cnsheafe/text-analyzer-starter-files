/*jshint esversion: 6*/
function HandleSubmit() {
  $('form').on('submit', function(ev) {
    ev.preventDefault();
    $('dl').addClass('hidden');
    const textInput = $(this).serializeArray()[0].value;
    const report = makeReport(textInput);
    const children = $('.hidden').find('dd');
    children.eq(0).text(report.wordCt);
    children.eq(1).text(report.unqCt);
    children.eq(2).text(report.wordAvg);
    $('.hidden').removeClass('hidden');
  });
}

function makeReport(text) {

  tkText = text.toLowerCase().split(/\W+/);
  let wordCt = tkText.length;
  if (tkText[tkText.length-1] === ''){
    tkText.pop();
    wordCt--;
  }

  let unqWords = new Set();
  for (let i = 0; i < wordCt; i++) {
      unqWords.add(tkText[i]);
    }

  let sum = 0;
  for (let  i = 0; i < wordCt; i++) {
    sum += tkText[i].length;
  }

  const report = {
    wordCt: wordCt,
    unqCt: unqWords.size,
    wordAvg: sum/wordCt
  };

  return report;
}

/*main*/
$(function main(){
  HandleSubmit();
});
