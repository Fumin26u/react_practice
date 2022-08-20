<?php
$home = "./"
?>
<!DOCTYPE html>
<html lang="ja">
<head>
    <title>JS-DOM</title>
    <meta charset="UTF-8" />
    <link rel="stylesheet" href="<?= $home ?>src/memoApp.css" />
</head>
<body>
    <h1 id="title">Hello World</h1>
    <input id="add-text">
    <button id="add-button">追加</button>
    <div class="container">
        <p>メモ一覧</p>
        <ul id="memo-list">

        </ul>
    </div>
    <script src="<?= $home ?>src/memoApp.js"></script>
</body>
</html>