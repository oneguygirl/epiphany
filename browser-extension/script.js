
// document.addEventListener('mouseover',(e) => {
//     var target= e.target;
//     var msgtext=target.innerText;
//     var msg = new SpeechSynthesisUtterance(msgtext);
//     var imgtext=target.getElementsByTagName("img").alt;
//     var msg2 = new SpeechSynthesisUtterance(imgtext);
//     target.classList.toggle("speakText");
    
//     if(target.classList.contains("speakText")){    
//         document.addEventListener('click',() => {    
//             speechSynthesis.cancel();
//         });
//         console.log(msgtext);
//         speechSynthesis.speak(msg);
//         if(imgtext){
//         speechSynthesis.speak(msg2);
//         console.log(imgtext);
//         }
        
        
//         // console.log(msgtext.indexOf("↵"));
//         // if(msgtext.indexOf(/\n) != null){
//         //     console.log(e.target);
//         //     console.log(msgtext.indexOf(". "));
       

        
//     }
// // }
// });

$(document).mouseover(function (e) {
    var target = $(e.target);
    var msgtext = target.text();
    var msg = new SpeechSynthesisUtterance(msgtext);
    var msgalt = target.attr("alt");
    var msg2= new SpeechSynthesisUtterance(msgalt);
    console.log(msgalt);
    if(msgalt){
        speechSynthesis.speak(msg2);
    }
    target.addClass("speakText");
    if(target.is(".speakText") ) {
        // $(".speakText").lettering('words');
        speechSynthesis.speak(msg);
        console.log(msgtext);
        
        // var isSpeaking=true;
       
        // alert("Text-content:"+ (msg));    
    }
});
