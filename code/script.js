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
var iterateSequence = function(){
    // storing total number of elements which are marked to be spoken
    var len = document.getElementsByClassName("speak").length;

    // iterating through all marked elements according to sequence defined by seq-n class
    for(var i=0; i<len; i++){
        try {
            mytext = document.getElementsByClassName('seq-'+i)[0].innerText;
            speak(mytext);
        }
        // if there is error that means that sequence count is discontinuous.
        // to ignore such errors, we also need to increment the len because, one iteration is wasted
        // in error.
        catch(err){ len++;}
        
    }
}