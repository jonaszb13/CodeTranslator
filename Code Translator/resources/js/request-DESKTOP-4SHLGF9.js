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
    let domInput =document.getElementById('Codefield');
    let tag;
    
    switch(tag){
        case 0:
            tag = "id";
            domOutput.innerHTML = "Sie haben: " +tag+ " eingegeben";
            break;

        case 1:
            tag = "class";
            domOutput.innerHTML = "Sie haben: " +tag+ " eingegeben";
            break;

        case 2:
            tag = "div";
            domOutput.innerHTML = "Sie haben: " +tag+ " eingegeben";
            break;

        case 3:
            tag = "h1";
            domOutput.innerHTML = "Sie haben: " +tag+ " eingegeben";
            break;

        case 4:
            tag = "section";
            domOutput.innerHTML = "Sie haben: " +tag+ " eingegeben";
            break;

        case 5:
            tag = "ul";
            domOutput.innerHTML = "Sie haben: " +tag+ " eingegeben";
            break;

        case 6:
            tag = "li";
            domOutput.innerHTML = "Sie haben: " +tag+ " eingegeben";
            break;

        case 7:
            tag = "ol";
            domOutput.innerHTML = "Sie haben: " +tag+ " eingegeben";
            break;
        
        case 8:
            tag = "a";
            domOutput.innerHTML = "Sie haben: " +tag+ " eingegeben";
            break;

        case 9:
            tag = "p";
            domOutput.innerHTML = "Sie haben: " +tag+ " eingegeben";
            break;

        case 10:
            tag = "body";
            domOutput.innerHTML = "Sie haben: " +tag+ " eingegeben";
            break;
    };
};