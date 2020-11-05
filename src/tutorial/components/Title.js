// Title.js

// 外部のライブラリやファイルを参照する
import React from 'react';

// 1.コンポーネントの呼び出し方
const Title1 = () => {
  return(
    <div>
      <h2>Hello World 2.0</h2>
    </div>
  );
}

// 他のファイルから呼び出す方法
/**
 * 呼び出せるようにインポートする
 * import Title(多分任意の名前でOK) from '相対パス/tutorial/components/Title';
 *
 * 呼び出したいタイミングで下記のように記述
 * <Title />
 *
 */

//　2.propsを受け取って表示する
const Title2 = (props) => {
  return(
    <div>
      <h2>
        {props.title}
      </h2>
    </div>
  );

}
// componentsはpropsって感じの配列(オブジェクト)を受け取ってるっぽい？
// 他のファイルから呼び出す方法
/**
 * インポートは同じ
 *
 * 呼び出したいタイミングで下記のように記述
 * <Title2 title='Hello World 3.0' />
 *
 */

// 2a.styleの渡し方
const Title2a = (props) => {
  return(
    <div>
      <h2 style={props.titleStyle}>
        {props.title}
      </h2>
    </div>
  );

}
// 他のファイルから呼び出す方法
/**
 * インポートは同じ
 *
 * 呼び出したいタイミングで下記のように記述(波括弧は２つ必要)
 * <Title2a title='Hello World 3.0' titleStyle={{color: 'orange'}} />
 *
 */

// 外部ファイルがコンポーネントを利用できるようにする箇所


// 2b.Event handler
/**
 * 実装の流れ
 * 1. 「upgrade」ボタンを設置して、「upgrade」ボタンと「Hello World」のそれぞれにidをつける。
 * 2. onClick イベントをpropsとして受け取れるよう、Title.jsを変更する。
 * 3. App-headerの高さをコメントアウトする（デフォルトで固定されていて、要素が隠れてしまう為）。
 * 4. Event handlerを定義する。
 * 5. Event handlerをpropsに渡す。
 */






export default Title1;

