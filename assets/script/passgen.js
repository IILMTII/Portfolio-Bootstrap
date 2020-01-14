function alllist(low, high){
    const array1=[];
    for(let i=low; i<=high; i++){
        array1.push(i);
    }
    return array1;
}

const specSet= alllist(33, 47).concat(alllist(58, 64)).concat(alllist(91, 96)).concat(alllist(123, 126));
const numSet= alllist(48, 57);
const upperSet= alllist(65, 90);
const lowerSet= alllist(97, 122);

function passGen(){
        const passLength = prompt("Password Length ?");
    if (passLength>=8 && passLength<=128){
        const spec = confirm ("Do you want special characters ?");
        const num = confirm ("Do you want numbers ?");
        const lower = confirm ("Do you want lowercase characters ?");
        const upper = confirm ("Do you want uppercase characters ?");
        const pass = generatePass(passLength, spec, num, lower, upper);
        document.getElementById("passwordDisplay").value = pass;
    }else{
        alert("Passwords must be between 8 and 128 characters in length.");
    }
}

function generatePass(passLength, spec, num, lower, upper){
    const passChar=[];
    let charList=[];
    if (lower) charList = charList.concat(lowerSet);
    if (upper) charList = charList.concat(upperSet);
    if (num) charList = charList.concat(numSet);
    if (spec) charList = charList.concat(specSet);
    if (lower||upper||num||spec){
        for( let i=0; i<passLength; i++){
            const character=charList[Math.floor(Math.random()*charList.length)];
            passChar.push(String.fromCharCode(character));
        }
        return passChar.join('');
    }
    return "No symbol/character/number selected !";
}

function btnCopy(){
    var change = document.getElementById("btn2");
    if (change.innerHTML == "Copy to Clipboard"){   
        change.innerHTML = "Copied !";
        document.getElementById("passwordDisplay").select();
        document.execCommand("Copy");
        //alert("Copied to clipboard.");
    }
    else{
        change.innerHTML = "Copy to Clipboard";
    }
}

function name(){
    window.location.href = "index.html";
}