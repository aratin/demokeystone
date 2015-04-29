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
        var imageUrl1 = $('#image1').attr('src');
        var imageUrl2 = $('#image2').attr('src');
        var imageUrl3 = $('#image3').attr('src');
        var imageArr = [imageUrl,imageUrl1,imageUrl2,imageUrl3];
        var dataURLArr = [];
        for(var i=0; i< imageArr.length; i++) {
            convertImgToBase64(imageArr[i]);
            console.log(dataURLArr[i] + "" + "" + "num" + i);
        }
        
        //var data = $('#content-box').html();
        console.log('imageUrl', imageUrl);   
        
        function convertImgToBase64(url, callback, outputFormat){
            var canvas = document.createElement('CANVAS');
            var ctx = canvas.getContext('2d');
            var img = new Image;
            img.crossOrigin = 'Anonymous';
            img.src = url;
            img.onload = function(){
                canvas.height = img.height;
                canvas.width = img.width;
                ctx.drawImage(img,0,0);
                dataURL = canvas.toDataURL(outputFormat || 'image/jpeg');
                dataURLArr.push(dataURL);
                //createPdf();
                console.log('dataUrl',dataURL);
                //callback.call(this, dataURL);
                // Clean up
                canvas = null; 
            };    
                    
        }
                // image convert base64 close
        function createPdf() {
            //console.log('dataUrl in createPdf',dataURL);
            var doc = new jsPDF();
            console.log(imageSrc);
            var imgData = dataURL;
           // doc.setFontSize(40);
            //doc.text(10, 20, data);
            doc.addImage(imgData, 'JPEG', 15, 15, 40, 40);
            doc.fromHTML($('#content-box').html(), 15, 15, {
                'width': 170,'elementHandlers': specialElementHandlers
            });
            doc.save('sample-file.pdf');
        };
    });
}); 
