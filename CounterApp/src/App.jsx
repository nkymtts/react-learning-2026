import { useState } from "react";
import "./App.css";
import Li from "./components/Li";

function App() {
  const [arr_num個数, set_arrNum個数] = useState([1, 2, 3]);

  const arr_objメニュー = [
    { numID: 0, str商品名: "牛丼", num価格: 500 },
    { numID: 1, str商品名: "カレー", num価格: 600 },
    { numID: 2, str商品名: "サラダ", num価格: 400 },
  ];

  const Liで個数を減らす = (num_要素番号) => {
    if (arr_num個数[num_要素番号] === 0) return;
    const arrNew_num個数 = [...arr_num個数];
    arrNew_num個数[num_要素番号]--;
    set_arrNum個数(arrNew_num個数);
  };
  const Liで個数を増やす = (num_要素番号) => {
    const arrNew_num個数 = [...arr_num個数];
    arrNew_num個数[num_要素番号]++;
    set_arrNum個数(arrNew_num個数);
  };

  const arr_Li = arr_objメニュー.map((obj_ループ) => {
    return (
      <Li
        key={obj_ループ.numID}
        p_num要素番号={obj_ループ.numID}
        p_str商品名={obj_ループ.str商品名}
        p_num価格={obj_ループ.num価格}
        p_num個数={arr_num個数[obj_ループ.numID]}
        p_マイナスボタンをクリック={Liで個数を減らす}
        p_プラスボタンをクリック={Liで個数を増やす}
      />
    );
  });

  const num_合計金額 = arr_objメニュー.reduce((num_累積, obj_ループ) => {
    return num_累積 + obj_ループ.num価格 * arr_num個数[obj_ループ.numID];
  }, 0);

  return (
    <>
      <main>
        <h2>メニュー</h2>
        <ul>{arr_Li}</ul>
        <p>合計: {num_合計金額}円</p>
      </main>
    </>
  );
}

export default App;
