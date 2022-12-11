function Greeting() {
    var nt = new Date();
    var hr = nt.getHours();

    if (hr <= 3) { document.write('おはようございます。'); }
    else if (hr <= 11) {document.write('こんにちは。');}
    else if (hr <= 16) {document.write('こんばんは。');}
    else if (hr <= 18) {document.write('おやすみなさい。');}
}

setInterval(function () {
    // 時間を取得
    var now = new Date();

    // 針の角度
    var deg_h = now.getHours() * (360 / 12) + now.getMinutes() * (360 / 12 / 60);
    var deg_m = now.getMinutes() * (360 / 60);
    var deg_s = now.getSeconds() * (360 / 60);

    // それぞれの針に角度を設定
    document.querySelector(".hour").style.transform = `rotate(${deg_h}deg)`;
    document.querySelector(".min").style.transform = `rotate(${deg_m}deg)`;
    document.querySelector(".sec").style.transform = `rotate(${deg_s}deg)`;
}, 100);

window.onload = function () {
    // メモリを追加
    for (let i = 1; i <= 12; i++) {
        // scaleクラスの要素の最後にdiv要素を追加
        let scaleElem = document.querySelector(".scale");
        let addElem = document.createElement("div");
        scaleElem.appendChild(addElem);

        // 角度をつける
        document.querySelector(".scale div:nth-child(" + i + ")").style.transform = `rotate(${i * 30}deg)`;
    }
}