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

    var specialElementHandlers = {
        '#editor': function (element,renderer) {
            return true;
        }
    };   
    var imageCount = 0;
$('#pdf').click(function () {
    //image converet to base 64 open
    //var imageUrl = $('#image').attr('src');
    //console.log('imageUrl', imageUrl);    
    
    var imageUrl = $('#image').attr('src');
    var imageUrl1 = $('#image1').attr('src');
    var imageUrl2 = $('#image2').attr('src');
    var imageUrl3 = $('#image3').attr('src');
    var imgArray = [imageUrl, imageUrl1, imageUrl2, imageUrl3];

    var dataURL;
    var imgURLArray = [];
    function convertImgToBase64(url, callback, outputFormat){
        var canvas = document.createElement('CANVAS');
        var ctx = canvas.getContext('2d');
        var img = new Image;
        img.crossOrigin = 'Anonymous';
        img.src = url; 
        //canvas = null; 
        
        img.onload = function(){
            canvas.height = img.height;
            canvas.width = img.width;
            ctx.drawImage(img,0,0);
            dataURL = canvas.toDataURL(outputFormat || 'image/jpeg');
            imgURLArray.push(dataURL);
            imageCount++;
            if(imageCount < imgArray.length) 
            {
                console.log('imageCount: ',imageCount);
                convertImgToBase64(imgArray[imageCount]);
            }
            else{
                console.log('imgURLArray: ',imgURLArray);
                console.log('imageCount: ',imageCount);
                imageCount = 0;
                //createPdf();
            }
            //callback.call(this, dataURL);
            // Clean up
        };
    }
    convertImgToBase64(imgArray[0]);
    // image convert base64 close
    function createPdf() {
        console.log('dataUrl in createPdf',dataURL);
        var doc = new jsPDF();
        console.log(imageSrc);
        var imgData = dataURL;
        doc.addImage(imgData, 'JPEG', 15, 15, 50, 50);
        doc.fromHTML($('#content-box').html(), 50, 50, {
             'width': 150,'elementHandlers': specialElementHandlers
        });
        doc.save('sample-file.pdf');
    }
    });
}); 

      $(function() {
    $("#message").on('click', function() {
        alert("asdfasdf");
       // $.message("#formdata");
    });  
     });  