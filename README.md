# ①Calendar.htmlにカレンダーの部品を呼び出す

<br>

Calendar.htmlの<body></body>の中に下記の2行を追加する。

<br>

▼ Calendar.html

```
<body>
    <div class="illustration">
        <img src="XXXXXX" alt="画像">
    </div>
    <div id="calendar-title"></div>  ★追加
    <div id="calendar"></div>  ★追加
</body>
```

# ②カレンダー用の画像を表示させてみる

<br>

<img>タグを使って、Calendar.htmlに画像を追加する。
下記の<img>タグのsrc属性に、画像のファイル名を記載する。

<br>

※画像はCalendar.htmlが置いてあるフォルダに置いてください。

<br>

▼ Calendar.html

```
<body>
    <div class="illustration">
        <img src="fimawari.jpg" alt="画像">　　★src属性に、表示させたい画像名を記載する
    </div>
    <div id="calendar-title"></div>
    <div id="calendar"></div>
</body>
```


# ③カレンダーサイトに色を付けてみる

<br>

Calendar.cssに下記のCSS言語の内容を記述する

<br>


▼Calendar.css

```

th {
    color: white;
    background-color: aqua;
    text-shadow: 1px 1pc 0 #333;
}

td:first-child {
    color: red;
}

td:last-child {
    color: royalblue;
}


.illustration {
    margin: 20px auto 0;
    width: 100%;
    height: 30%;
    text-align: center;
}
```
