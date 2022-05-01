const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;
const $result = document.getElementById('result');

let concatText = "";    //出力部

const buttonPressed = (event) => {
    const text = event.target.textContent;
    if(concatText.length < 10){

        if(text === "="){   //=が押されたら計算結果を出力
            concatText = eval(concatText);
        } else if(text === "C") {
            concatText = "0";
        } else if(concatText === "0"){
            concatText = text;        
        } else {
            concatText += text;
        }
    $result.textContent = concatText;
    }
    if(text === "C"){
        concatText = "0";
    }
    $result.textContent = concatText;
}

let buttonIndex = 0;
while(buttonIndex < buttonLength){
    $button[buttonIndex].addEventListener('click', buttonPressed);
    buttonIndex++;
}

