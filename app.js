// htmlから要素を取得
var circle = document.getElementById("circle");
var upBtn = document.getElementById("upBtn");
var downBtn = document.getElementById("downBtn");

// circleの回転角度を取得
var rotateValue = circle.style.transform;

// 目標となる回転角度
var rotateSum;

// 上ボタンをクリックしたときの処理
upBtn.onclick = function () {
    rotateSum = rotateValue + "rotate(-90deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;
};

// 下ボタンをクリックしたときの処理
downBtn.onclick = function () {
    rotateSum = rotateValue + "rotate(90deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;
};