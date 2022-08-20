{
    // document = DOMツリーのエントリーポイント
    // getElementById idを指定する
    const title1 = document.getElementById("title");
    console.log(title1);

    // querySelector ()内に指定したセレクタと一致する最初の要素を取得
    const title2 = document.querySelector("#title");
    console.log(title2);

    // getElementsByClassName 指定したクラス名を持つ要素を取得
    const containers = document.getElementsByClassName("container");
    console.log(containers);

    const container = document.querySelector(".container");
    console.log(container);

    // querySelectorAll ()内に指定したセレクタと一致するすべての要素を取得
    const containers2 = document.querySelectorAll(".container");
    console.log(containers2);

    // DOMの作成・追加・削除
    // div要素の生成 createElement
    const divEl = document.createElement("div");
    // DOMの追加
    // divタグの中に子要素を追加する appendChild
    // 先頭に追加する場合 prepend
    const pEl = document.createElement("p");
    const h2El = document.createElement("h2");
    divEl.appendChild(pEl);
    divEl.prepend(h2El);
    console.log(divEl);
}