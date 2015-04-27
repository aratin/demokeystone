// $(function() {
//     $("#print").on('click', function() {
//        // console.log("asdfasdfasd asdfasdf asdasdf");
//         $.print("#content-box");
//     });

    $(document).ready(function(){ 

    var specialElementHandlers = {
        '#editor': function (element,renderer) {
            return true;
        }
    };
 $('#pdf').click(function () {
        var doc = new jsPDF();
        doc.fromHTML($("#image"), 15, 15, {
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