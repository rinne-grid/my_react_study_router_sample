### react-routerの自分用勉強

### 開始する時

```sh
$ yarn install
$ yarn run build # webpack -w
$ yarn run start # webpack-dev-server --inline --hot --port 8000
```

### これの中身

* react-routerの機能で画面遷移するのみ


![画面遷移](http://www.rinsymbol.sakura.ne.jp/github_images/my_react_page.png)


### 今回の目的

* やりたかったこと
    * webpack.config.js(Webpack2)をゼロから何も見ずに書く(ok)
    * Bootstrap等を使わず、ゼロからHTML・CSSを書く(ok)
    * react-routerの機能を利用して、画面遷移する

### コンポーネント

* MyNavigation
    * MyHeader
    * MySitePages(TopPage)
    * MySitePages(ContentsPage)
    * MySitePages(ReactPage)
    * MySitePages(RouterPage)

