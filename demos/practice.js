var x = 10;
function main() {
    console.log("x1: " + x);
    x = 20;
    if (x > 0) {
        var x = 30;
        console.log("x2: " + x);
    }
    var x = 40;
    var f = function (x) { console.log("x3: " + x); }
    f(50);
}
main();

function loop() {
    for (var i = 0; i < 10; i++) {
        console.log("i inside for loop: " + i);
    }
    console.log(i); // 10
    if (i > 5) {
        var j = 3;
    }
    console.log("j OUTside block: " + j);
}
loop();

function a() {
    const x = document.getElementById('body');
    console.log(x);

    x = 300;
    console.log(x);


}

a();