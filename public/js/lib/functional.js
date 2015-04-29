// $(function() {
//     $("#print").on('click', function() {
//        // console.log("asdfasdfasd asdfasdf asdasdf");
//         $.print("#content-box");
//     });
var imageSrc;
$(document).ready(function(){
    imageSrc = $('#image').attr('src');
    //console.log(imageSrc);

    var doc = new jsPDF();
    var dataURL;
    var specialElementHandlers = {
        '#editor': function (element,renderer) {
            return true;
        }
    };

    $('#pdf').click(function () {
        //image converet to base 64 open
        var imageUrl = $('#image').attr('src');
        var data = $('#content-box').html();
        console.log('imageUrl', imageUrl);   
        
        function convertImgToBase64(url, callback, outputFormat){
            var canvas = document.createElement('CANVAS');
            var ctx = canvas.getContext('2d');
            var img = new Image;
            img.crossOrigin = 'Anonymous';
            img.onload = function(){
                canvas.height = img.height;
                canvas.width = img.width;
                ctx.drawImage(img,0,0);
                dataURL = canvas.toDataURL(outputFormat || 'image/jpeg');
                createPdf();
                console.log('dataUrl',dataURL);
                //callback.call(this, dataURL);
                // Clean up
                canvas = null; 
            };       
            img.src = url;         
        }
        convertImgToBase64(imageUrl);        // image convert base64 close
        function createPdf() {
            //console.log('dataUrl in createPdf',dataURL);
            var doc = new jsPDF();
            console.log(imageSrc);
            var imgData = dataURL;
           // doc.setFontSize(40);
            doc.text(10, 20, data);
            doc.addImage(imgData, 'JPEG', 15, 15, 40, 40);
            /*doc.fromHTML($('.content-box').html(), 15, 15, {
                'width': 170,'elementHandlers': specialElementHandlers
            });*/
            doc.save('sample-file.pdf');
        };
    });
}); 
