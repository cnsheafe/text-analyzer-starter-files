function HandleSubmit() {
  $('form').on('submit', function(ev) {
    ev.preventDefault();
    $('dl').addClass('hidden');
    var textInput = $(this).serializeArray()[0].value;
    var report = makeReport(textInput);
    var children = $('.hidden').find('dd');
    children.eq(0).text(report.wordCt);
    children.eq(1).text(report.unqCt());
    children.eq(2).text(report.wordAvg());
    $('.hidden').removeClass('hidden');
  });
}
/*Example of closure:
tkText can still be accessed even after makeReport is finished*/
function makeReport(text) {

  tkText = text.split(/\W+/);
  if (tkText[tkText.length-1] === ''){
    tkText.pop();
  }

  var report = {
    wordCt: tkText.length,

    unqCt: function() {
      var unqCt = 0;
      for (var i=0; i < this.wordCt; i++) {
        if(tkText.lastIndexOf(tkText[i]) === tkText.indexOf(tkText[i])) {
          unqCt++;
        }
      }
      return unqCt;
    },

    wordAvg: function() {
      var sum = 0;
      for (var  i = 0; i < this.wordCt; i++) {
        sum += tkText[i].length;
      }
      return sum/this.wordCt;
    }
  };

  return report;
}

/*main*/
$(function main(){
  HandleSubmit();
});
