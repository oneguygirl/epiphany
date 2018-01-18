
document.addEventListener('mouseover',(e) => {
    var target= e.target;
    var msgtext=target.innerText;
    var msg = new SpeechSynthesisUtterance(msgtext);

    target.classList.toggle("speakText");

    if(target.classList.contains("speakText")){    
        document.addEventListener('click',(e) => {    
            speechSynthesis.cancel();
        });
        // console.log(msgtext.indexOf("↵"));
        //if(msgtext.indexOf(/\n) != null){
            // console.log(e.target);
            // console.log(msgtext.indexOf(". "));
       speechSynthesis.speak(msg);
        
    // }
}
});

// $(document).mouseover(function (el) {
//     var target = $(el.target);
//     var msgtext = target.text();
//     var msg = new SpeechSynthesisUtterance(msgtext);
//     // var msgalt = target.attr("alt");
//     // if(msgalt){
//     //     speechSynthesis.speak(msgalt);
//     // }
//     target.addClass("speakText");
//     if(target.is(".speakText") ) {
//         // $(".speakText").lettering('words');
//         speechSynthesis.speak(msg);
       
//         // alert("Text-content:"+ (msg));    
//     }
// });
