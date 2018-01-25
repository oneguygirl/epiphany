var tagList = ['HTML', 'HEAD', 'BODY', 'DIV'];

const pressed = [];

$(document).keyup(function(e) {
    pressed.push(e.key);
    pressed.splice(-3, pressed.length - 2);
    console.log(pressed);
});

var extensionOn = true;
$(document).keydown(function(e){
    console.log(e);
    if (e.key == 'F11')
    {
        var fullscreentext = "Full screen on";
        var fullscreenmsg = new SpeechSynthesisUtterance(fullscreentext);
        speechSynthesis.speak(fullscreenmsg);   
    }
});

if (extensionOn)
{
    $(document).ready(function(){
        var welcometext = "Page Loaded";
        var welcomemsg = new SpeechSynthesisUtterance(welcometext);
        speechSynthesis.speak(welcomemsg);
    })
    extensionOn = false;
}

$(document).mouseover(function (e) {
    var target = $(e.target);
    var msgtext = target.text();
    var msg = new SpeechSynthesisUtterance(msgtext);
    var msgalt = target.attr("alt");
    var msgaltnew = new SpeechSynthesisUtterance(msgalt);
    var msglabel= target.attr('aria-label');
    var msglabelnew = new SpeechSynthesisUtterance(msglabel);
    function speaker()
    {
        speechSynthesis.speak(msg);
        speechSynthesis.speak(msgaltnew);
        speechSynthesis.speak(msglabelnew);
    }

    function stopSpeaker()
    {
        target.removeClass("speakText");
        speechSynthesis.cancel();
    }
   
    function classCheck()
    {
        if(target.is(".speakText") ) {
            speaker();
            var isSpeaking=true;
            if(isSpeaking) {
                $(document).click(function() {
                    stopSpeaker();
                });
            } 
        }
    }
    // console.log(tagList.indexOf(target.prop("tagName")));
    if(tagList.indexOf(target.prop("tagName")) == -1){
            target.addClass("speakText");
            setTimeout(function(){
                $(target).mouseleave(function(){
                    stopSpeaker();
                });
            },100);
            classCheck();         
        } 
});