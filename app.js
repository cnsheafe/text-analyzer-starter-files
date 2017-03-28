function HandleSubmit() {
  $('form').on('submit', function(ev) {
    ev.preventDefault();
    $('dl').addClass('hidden');
    var textInput = $(this).serializeArray()[0].value;
    var report = makeReport(textInput);
    var children = $('.hidden').find('dd');
    children.eq(0).text(report.wordCt);
    children.eq(1).text(report.unqCt);
    children.eq(2).text(report.avg);
    $('.hidden').removeClass('hidden');
  });
}

function makeReport(text) {
  var report = {
    get tokens(){
      var tmp = text.split(/\W+/);
      if (tmp[-1] === undefined){
        tmp.pop();
      }
      return tmp;
    } ,
    get wordCt() {
      return this.tokens.length;
    },
    get unqCt() {
      var unqCt = 0;
      for (var i=0; i < this.wordCt; i++) {
        if(this.tokens.lastIndexOf(this.tokens[i]) === this.tokens.indexOf(this.tokens[i])) {
          unqCt++;
        }
      }
      return unqCt;
    },
    get avg() {
      var sum = 0;
      for (var  i = 0; i < this.wordCt; i++) {
        sum += this.tokens[i].length;
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
