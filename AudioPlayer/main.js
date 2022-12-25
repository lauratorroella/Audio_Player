let audio= document.getElementById("audioshort");

var temps=0;

function audioPlay(){
   audio.play()
}

function audioPause(){
    audio.pause()

}

function audioStop(){
        audio.pause()
        audio.currentTime = 0
}

function audioAdvance(){
    audio.Advance()
    audio.currentTime = 5
}

audio.addEventListener ('timeupdate', function(){
    console.log(audio.currentTime)
})