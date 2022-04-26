function testfortag(){

    alert("Jonas und Sina");

    //Finds out which language is selected
    const which = document.getElementById('codetype').value;
    let getType = which;

    if( getType == "html"){
        console.log("1");
    }

    else if( getType == "css"){
        console.log("2");
    }

    else if( getType == "javascript"){
        console.log("3");
    }

    else if( getType == "python"){
        console.log("4");
    }

    //Finds out which tag must be declared 

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