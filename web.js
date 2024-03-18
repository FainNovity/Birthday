// file:///storage/emulated/0/Android/data/com.teejay.trebedit/files/TrebEdit%20user%20files/%E2%88%9E/wish.html?name=Harsh&age=31 

var wishMe= new Audio("birthday.mp3");

    let local= window.localStorage;
var name=local.getItem('name');
var age=parseInt(local.getItem('age'));
var canBlow=false;
setTimeout(()=>{
    canBlow=true;
document.getElementsByClassName("load")[0].style.display= "none";       document.getElementById('warn').innerText= "Now, blow the candles!!";
},22000);


document.getElementById('name').innerText=name;
document.getElementById('age').innerText=age;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

for(var i=0;i<age;i++){   
    sleep(1000).then(()=>{console.log(hello)});
        var cake= document.getElementsByClassName("cake")[0];
    var candle= document.createElement('div');
    candle.classList.add('candle');
    document.getElementById('gift').insertBefore(candle,cake);
    candle=document.getElementsByClassName("candle")[i];
    var fire= document.createElement('div');
    fire.classList.add('fire');
    document.getElementsByClassName("candle")[i].appendChild(fire);
    document.getElementsByClassName("candle")[i].style.top= "-70%";  
    document.getElementsByClassName("candle")[i].style.animationDelay=(i*700)+"ms";
    
    document.getElementsByClassName("candle")[i].style.animationPlayState="running";
    document.getElementsByClassName("fire")[i].style.animationPlayState="running";
    
    document.getElementsByClassName("candle")[i].style.top=(65+ Math.random()*5)+"%";
    if (i%2==0) {
        document.getElementsByClassName("candle")[i].style.left=(Math.random()*20+50)+"%";
    }
    else {
        document.getElementsByClassName("candle")[i].style.left=(50-(Math.random()*20))+"%";
    }   
    
}


var voice = new Wad({source : 'mic',filter  : {
        type      : 'highpass',
        frequency : 500
    } });
var tuner = new Wad.Poly();
// <script src="https://unpkg.com/web-audio-daw"></script> in html
tuner.add(voice);
tuner.setVolume(0);
voice.play();

tuner.updatePitch() // The tuner is now calculating the pitch and note name of its input 60 times per second. These values are stored in tuner.pitch and tuner.noteName.
function blow(){
    
    var lim=100;
    if (tuner.pitch<100) {
      lim=50;  
    }
    if(tuner.pitch>800){
        lim=700;
    }
    if(tuner.pitch>3000){
        lim=1200;
    }
    for(var i=0;i<tuner.pitch/lim;i++){
      var obj=parseInt(Math.random()*(age));
      
      document.getElementsByClassName("fire")[obj].style.display="none";
        }
}

function blown(){
    for(var i=0;i<age;i++){
       if(document.getElementsByClassName("fire")[i].style.display!="none"){
           return false;
       }
       return true;
    }
}
var logPitch = function(){
    
    requestAnimationFrame(logPitch);
     if(canBlow){
         blow();
         if(blown()){
     wishMe.play();
     document.getElementsByClassName('hurray')[0].style.display="inline";
         }
              }
};
logPitch();
