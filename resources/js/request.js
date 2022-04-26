/*function onClicked(){
    let domInput = document.getElementById('input');
    let domOutput = document.getElementById('output');
    let content = domInput.value;

    if (content == "A"){
        console.log("1");
        domOutput.innerHTML = "Sie haben: " +content+ " eingegeben";

    }

    else if(content == "B"){
        console.log("2");
        domOutput.innerHTML = "Sie haben: " +content+ " eingegeben"
    }

    else{
        domOutput.innerHTML = "Sie haben etwas falsches eingegeben";
    }
};  
*/

function testfortag(){
    let domInput = document.getElementById('input').value;
    let domOutput = document.getElementById('output');
    let getTag = domInput;
    let tag = getTag;

    switch(getTag){
        case "id":
            domOutput.innerHTML = "Sie haben: " + tag + " eingegeben";
            break;

        case "class":
            domOutput.innerHTML = "Sie haben: " + tag + " eingegeben";
            break;

        case "div":
            domOutput.innerHTML = "Sie haben: " + tag + " eingegeben";
            break;

        case "h1":
            domOutput.innerHTML = "Sie haben: " + tag + " eingegeben";
            break;

        case "section":
            domOutput.innerHTML = "Sie haben: " + tag + " eingegeben";
            break;

        case "ul":
            domOutput.innerHTML = "Sie haben: " + tag + " eingegeben";
            break;

        case "li":
            domOutput.innerHTML = "Sie haben: " + tag + " eingegeben";
            break;

        case "ol":
            domOutput.innerHTML = "Sie haben: " + tag + " eingegeben";
            break;
        
        case "a":
            domOutput.innerHTML = "Sie haben: " + tag + " eingegeben";
            break;

        case "p":
            domOutput.innerHTML = "Sie haben: " + tag + " eingegeben";
            break;

        case "body":
            domOutput.innerHTML = "Sie haben: " + tag + " eingegeben";
            break;
    };
};