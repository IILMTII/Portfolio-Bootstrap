// place script tag at bottom of body of HTML file to avoid DOM traversal errors.
var imgBorder = document.querySelectorAll("img");
for(var i=0; i<imgBorder.length; i++){
imgBorder[i].setAttribute("style", "border: 2px solid; width: 200px;");
}

function passGen(){
    window.location.href = "passgen.html";
    //window.location.replace("passgen.html"); - goest to index
}

function cQuiz(){
    window.location.href = "cquiz.html";
}

function eplanner(){
    window.location.href = "eplanner.html";
}

function name(){
    window.location.href = "index.html";
}