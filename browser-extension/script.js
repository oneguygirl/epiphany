var tagList = ['HTML', 'HEAD', 'BODY', 'DIV'];

$(document).mouseover(function (e) {
    var target = $(e.target);
    if(tagList.indexOf(target.prop("tagName")) == -1){
        var msgtext = target.text();
        var msg = new SpeechSynthesisUtterance(msgtext);
        var msgalt = target.attr("alt");
        var msgaltnew = new SpeechSynthesisUtterance(msgalt);
        console.log(msgalt);
        var msglabel= target.attr('aria-label');
        var msglabelnew = new SpeechSynthesisUtterance(msglabel);

        target.addClass("speakText");
        selectedTarget = target;
        setTimeout(function(){
            $(selectedTarget).mouseleave(function(){
                selectedTarget.removeClass("speakText");
                speechSynthesis.cancel();
            });
        },100); 

        if(target.is(".speakText") ) {
            speechSynthesis.speak(msg);
            speechSynthesis.speak(msgaltnew);
            speechSynthesis.speak(msglabelnew);
            var isSpeaking=true;
            if(isSpeaking) {
                $(document).click(function() {
                speechSynthesis.cancel();
                });
            } 
        }
    }
});
