{
    // ボタンの追加
    const buttonEl = document.createElement("button");
    buttonEl.textContent = "ボタン";

    const divEl = document.querySelector(".container");
    divEl.appendChild(buttonEl);

    // DOMの削除
    // removeChild 要素内の指定した子要素を削除する。
    // 全て削除する場合はtextContentに対してnullを指定する。
    const h1El = document.getElementById("title");
    const bodyEl = document.querySelector("body");
    // bodyEl.removeChild(h1El);
    // bodyEl.textContent = null;
}