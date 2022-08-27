function start(){
    navigator.mediaDevices.getUserMedia({audio: true});
    c= ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/F6itBjh4n/model.json', mr);
}

function mr(){
    c.classify(gr);
}

function gr(error,results){
    console.log("Got Result");
}