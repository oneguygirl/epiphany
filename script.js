var tagList = ['HTML', 'HEAD', 'BODY', 'DIV']; 
$(document).ready(function(){ 
    chrome.storage.sync.get({
        setState: 'enable',
        setRate: '0.5',
        }, function(items) {
            if (items.setState === "enable")
            {
            $(document).keydown(function(e){
                if(e.key == 'F11')
                {
                    var fullscreentext = "Full screen on";
                    var fullscreenmsg = new SpeechSynthesisUtterance(fullscreentext);
                    fullscreenmsg.rate=items.setRate;
                    speechSynthesis.speak(fullscreenmsg);   
                }
            });
            // MAIN PROGRAM
            $(document).mouseover(function (e) {
                var target = $(e.target);
                var inputtext = target.val();
                var inputmsg = new SpeechSynthesisUtterance(inputtext);
                var msgtext = target.text();
                var msg = new SpeechSynthesisUtterance(msgtext);
                var msgalt = target.attr("alt");
                var msgaltnew = new SpeechSynthesisUtterance(msgalt);
                var msglabel= target.attr('aria-label');
                var msglabelnew = new SpeechSynthesisUtterance(msglabel);

                //TO SPEAK
                function speaker()
                {   
                    //$(target).css("font-size", "40px");
                    speechSynthesis.speak(msg);
                    speechSynthesis.speak(inputmsg);
                    speechSynthesis.speak(msgaltnew);
                    speechSynthesis.speak(msglabelnew);
                }
                //TO STOP
                function stopSpeaker()
                {
                    target.removeClass("speakText");

                    speechSynthesis.cancel();
                    $(target).removeAttr( 'style' );
                }
                //TO CHECK CLASS
                function classCheck()
                {
                    if(target.is(".speakText") ) {
                        speaker();
                        var isSpeaking=true;
                        // USE CTRL TO STOP
                        if(isSpeaking) {
                            $(document).keyup(function(e) {
                                if(e.key === "Control"){
                                stopSpeaker();
                            }
                            });
                        } 
                    }
                }
                if(tagList.indexOf(target.prop("tagName")) == -1){
                        target.addClass("speakText");
                        setTimeout(function(){
                            $(target).mouseleave(function(){
                                stopSpeaker();
                            });
                        },100);
                        classCheck();         
                    }
            }); //END of MAIN PROGRAM
        }    
    });
});

