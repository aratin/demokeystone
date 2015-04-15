$(function() {
    $("#print").on('click', function() {
       // console.log("asdfasdfasd asdfasdf asdasdf");
        $.print("#content-box");
    });

    var doc = new jsPDF();
        var specialElementHandlers = {
            '#editor': function (element, renderer) {
                return true;
            }
        };

        $('#pdf').click(function () {
           // alert("asdfasdf");
            doc.fromHTML($('#content-box').html(), 15, 15, {
                'width': 600,
                    'elementHandlers': specialElementHandlers
            });
            doc.save('sample-file.pdf');
    });

      $(function() {
    $("#message").on('click', function() {
        alert("asdfasdf");
       // $.message("#formdata");
    });  
     });  

});