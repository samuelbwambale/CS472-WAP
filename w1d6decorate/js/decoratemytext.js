function increaseFontSize() {
    const txtArea = document.getElementById("textArea");
    let fontSIze = parseInt(document.getElementById("textArea").fontSize);
    console.log(fontSIze)
    const sample = fontSIze + 10 + "px";
    txtArea.style.fontSIze = sample;
    console.log(txtArea.style.fontSIze = fontSIze + 10 + "px");

    // var computedFontSize = window.getComputedStyle(document.getElementById("foo")).fontSize;
}

function displayAlert() {
    alert("Hello, world!");
}

function boldenText() {
    // console.log(pigLatin('axe'));
    const checkBox = document.getElementById("check1");
    const txtArea = document.getElementById("textArea");
    const body = document.getElementById("body");
    if (checkBox.checked === true) {
        txtArea.style.fontWeight = "bold";
        txtArea.style.color = "green";
        txtArea.style.textDecoration = "underline";
        body.style.background = "url('http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg')";
        // body.style.backgroundColor = "red" 

    } else {
        txtArea.style.fontWeight = "normal";
        txtArea.style.color = "black";
        txtArea.style.textDecoration = "none";
        body.style.background = "none"
    }
}

function transformPigLatin() {
    const words = document.getElementById("textArea").value;
    const arr = words.split(' ');
    console.log(arr);
    for (let i=0;i<arr.length;i++) {
        var word = arr[i];
        if (word.length > 0 && isNaN(word)) {
            arr[i] = checkForConsonant(word);
        }
    }
    console.log("array " + arr);
    document.getElementById("textArea").value = arr.join(' ');

}

function checkForConsonant(word) {
    let firstLetter = word.charAt(0)
    let result = ['a', 'e', 'i', 'o', 'u'].indexOf(firstLetter.toLowerCase());
    if (result >= 0) {
        word += 'ay';

    }
    else {
        word = word.substring(1);
        word += firstLetter + 'ay';
    }
    return word;
}

console.log()

    // function timedEnlarging(){
    //     //let timer = null;
    //     setInterval(enlargeText,500);
    //   }
    //   function enlargeText(){
    //     let txtSize = parseInt(document.getElementById('txtarea').style.fontSize);
    //     console.log('before : '+txtSize);
    //     txtSize += 2;
    //     document.getElementById('txtarea').style.fontSize = txtSize +'px';
    //     console.log('final : '+txtSize);

    //   }


