// $(function() {
//     $("#print").on('click', function() {
//        // console.log("asdfasdfasd asdfasdf asdasdf");
//         $.print("#content-box");
//     });

    $(document).ready(function(){ 
        
        //console.log(imageSrc);

        var doc = new jsPDF();

        doc.setFontSize(40);
        doc.text(35, 25, "Octonyan loves jsPDF");
       

    var specialElementHandlers = {
        '#editor': function (element,renderer) {
            return true;
        }
    };
 $('#pdf').click(function () {
        var imageSrc = $('#image').attr('src');
        var doc = new jsPDF();

        var imgData = 'data:image/jpeg;base64,imageSrc';
        doc.setFontSize(40);
        doc.text(35, 25, "Octonyan loves jsPDF");
        doc.addImage(imgData, 'JPEG', 15, 40, 180, 180);
        // doc.fromHTML($('#content-box').html(), 15, 15, {
        //     'width': 170,'elementHandlers': specialElementHandlers
        // });
        doc.save('sample-file.pdf');
    });  
});


    

      $(function() {
    $("#message").on('click', function() {
        alert("asdfasdf");
       // $.message("#formdata");
    });  
     });  