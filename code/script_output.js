// for output voice accent
function speak(text){
    if(window.speechSynthesis){ 
    var synth = window.speechSynthesis;
    }
    else console.log("speech synthesis not available")

    myvoice = synth.getVoices()[7]; // google hindi voice

    mytext = text;
    var utter = new SpeechSynthesisUtterance(mytext);
    utter.voice = myvoice;
    synth.speak(utter);

}


// iterating through the sequence
var iterateSpeakSeq = function(className){
    // storing total number of elements which are marked to be spoken
    var len = document.getElementsByClassName(className).length;

    // iterating through all marked elements according to sequence defined by seq-n class
    for(var i=0; i<len; i++){
        try {
            // get element tagged with seq-i class
            elem = document.getElementsByClassName('seq-'+i)[0]
            mytext = elem.innerText;

            // check if its also tagged with speak-alt class
            try{
                // if element contains speak-alt class then speak alternate text only.
                if(elem.classList.contains('speak-alt')){
                    try{
                        mytext = elem.getAttribute('alt');
                        // if mytext is `null` that means alt attribute is not present
                        if(!mytext){
                            // try if innerText is still present
                            try{
                                elem = document.getElementsByClassName('seq-'+i)[0]
                                mytext = elem.innerText;
                            }
                            // inner text not found, that means don't speak anything at all.
                            catch(err){
                                continue;
                            }
                        }
                    }
                    catch(err){ 
                       continue; 
                        
                     }
                }
            }
            catch(err){ continue; }
            speak(mytext);
        }
        // if there is error that means that sequence count is discontinuous.
        // to ignore such errors, we also need to increment the len because, one iteration is wasted
        // in error.
        catch(err){ len++;}
        
    }
}