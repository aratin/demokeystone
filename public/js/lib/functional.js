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
            convertImgToBase64(imageArr[i], i);            
            //createPdf();
            //console.log(dataURLArr[i] + "" + "" + "num" + i);
        }       
        
        //var data = $('#content-box').html();
        console.log('imageUrl', imageUrl);   
        
        function convertImgToBase64(url, imageCount){
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
                if(imageCount == 3) {
                    createPdf();
                }
                console.log('dataUrl',dataURL);
                //callback.call(this, dataURL);
                // Clean up
                canvas = null; 
            };    
                  
        }
                // image convert base64 close
        function createPdf() {
            //console.log('dataUrl in createPdf',dataURL);
            if (dataURLArr.length > 0) {
                var doc = new jsPDF();
               // console.log(imageSrc);
                var imgData;
                for (var i=0; i<dataURLArr.length; i++) {
                    imgData = dataURLArr[i];
                    doc.addImage(imgData, 'JPEG', 15*(i+1), 15*(i+1), 40, 40);
                }         
                doc.fromHTML($('#content-box').html(), 15, 15, {
                    'width': 170,'elementHandlers': specialElementHandlers
                });
                doc.save('sample-file.pdf');
            }
                           // doc.setFontSize(40);
            //doc.text(10, 20, data);
        };
        ///if (dataURLArr.length > 0) {
            
        //}
    });
}); 
