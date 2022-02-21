
    
     function getOption() {
         selectElement = document.querySelector('#select1');
         output = selectElement.value;
         document.querySelector('.output').textContent = output;
     }
    
 
 
    
      //Get the button
 let mybutton = document.getElementById("btn-back-to-top");
 
 // When the user scrolls down 20px from the top of the document, show the button
 window.onscroll = function () {
   scrollFunction();
 };
 
 function scrollFunction() {
   if (
     document.body.scrollTop > 20 ||
     document.documentElement.scrollTop > 20
   ) {
     mybutton.style.display = "block";
   } else {
     mybutton.style.display = "none";
   }
 }
 // When the user clicks on the button, scroll to the top of the document
 mybutton.addEventListener("click", backToTop);
 
 function backToTop() {
   document.body.scrollTop = 0;
   document.documentElement.scrollTop = 0;
 }

    
    
    

       var newWin;
   function openPopup()
   {
    newWin= window.open('/contact.html','contact','width=700,height=500');
 
    document.onmousedown=focusPopup;
    document.onkeyup=focusPopup;
    document.onmousemove=focusPopup;
   }
   function focusPopup(){
     if(!newWin.closed){
       newWin.focus();
     }
   }
  
       
       $('body').scrollspy({target: ".navbar"})
      



       //mobile
       const searchFun = () => {
        let filter=document.getElementById('myInput').value.toUpperCase();
        let myTable=document.getElementById('myTable');
        let tr=myTable.getElementsByTagName('tr');
        for(var i=0;i<tr.length;i++){
            let td=tr[i].getElementsByTagName('td')[0];
            if(td){
              let textvalue=td.textContent || td.innerHTML;
              if(textvalue.toUpperCase().indexOf(filter) > -1){
                tr[i].style.display="";
              }else{  tr[i].style.display="none";  }
              }
            }
        }



        //signup

        var theForm = document.getElementById('myForm');
        theForm.addEventListener('submit', function(event) {
          event.preventDefault();
        
          var myName = document.getElementById("myName").value;
          window.alert("Hai,"+myName+"! "+"Go To SingIn");
         
        
        });
