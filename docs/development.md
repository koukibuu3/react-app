# development

## node.js

バージョン： v14.13.1

v14以上じゃないと以下のようなエラーが発生する
```
./src/index.css (./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css) Error: No valid exports main found for 'myproject\node_modules\colorette'
```
参考：https://github.com/facebook/create-react-app/issues/9273

## install

### Reactアプリケーション作成

```sh
$ npx create-react-app {アプリケーション名}
```

### 起動

```sh
$ cd {アプリケーション名}
$ npm start
```

localhost:3000 にアクセスする
