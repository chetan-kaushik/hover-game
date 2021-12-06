

function upDate(previewPic){
    
      var x=previewPic.src;
      var y=previewPic.alt;
     
      document.getElementById('image').style.backgroundImage = "url('" + x +"')";
     document.getElementById("image").innerHTML=y;
       }
   
       function unDo(){
        
           document.getElementById('image').innerHTML='Hover over an image below to diplay here';
            document.getElementById('image').style.background="rgb(67, 253, 82)";
      
       }