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
        var imgData = 'data:image/jpeg;base64,';
        var doc = new jsPDF();

        doc.setFontSize(40);
        doc.text(35, 25, "Octonyan loves jsPDF");
        doc.addImage(imgData, 'JPEG', 15, 40, 180, 180);

        doc.addHTML($('#content-box'), 15, 15, {
            'width': 170,'elementHandlers': specialElementHandlers
        });

        doc.save('sample-file.pdf');
    });  
});


    // var doc = new jsPDF();
    //     var specialElementHandlers = {
    //         '#editor': function (element, renderer) {
    //             return true;
    //         }
    //     };

    //     $('#pdf').on('click',function () {
    //        // alert("asdfasdf");
    //         doc.fromHTML($('#content-box').html(), 15, 15, {
    //             'width': 170,
    //                 'elementHandlers': specialElementHandlers
    //         });
    //         doc.save('sample-file.pdf');
    // });

      $(function() {
    $("#message").on('click', function() {
        alert("asdfasdf");
       // $.message("#formdata");
    });  
     });  