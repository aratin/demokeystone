// $(function() {
//     $("#print").on('click', function() {
//        // console.log("asdfasdfasd asdfasdf asdasdf");
//         $.print("#content-box");
//     });

    $(document).ready(function(){ 
        var imageSrc = $('#image').attr('src')
        console.log(imageSrc);
    var specialElementHandlers = {
        '#editor': function (element,renderer) {
            return true;
        }
    };
 $('#pdf').click(function () {
        var doc = new jsPDF();
        doc.fromHTML($('#image').html(), 15, 15, {
            'width': 170,'elementHandlers': specialElementHandlers
        });
        doc.save('sample-file.pdf');
    });  
});


    

      $(function() {
    $("#message").on('click', function() {
        alert("asdfasdf");
       // $.message("#formdata");
    });  
     });  