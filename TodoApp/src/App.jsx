import { useState } from "react";
import "./App.css";
import Form from "./Components/Form";
import Li from "./Components/Li";

function App() {
  const [arr_objTodo, set_arrObjTodo] = useState([
    { numID: 0, strタスク: "ランニング", is完了: false },
    { numID: 1, strタスク: "シャワー", is完了: true },
    { numID: 2, strタスク: "朝食", is完了: false },
  ]);

  const Liコンポーネントでis完了をトグル = (obj_todo) => {
    const arrNew_objTodo = arr_objTodo.map((obj_ループ) => {
      return {
        numID: obj_ループ.numID,
        strタスク: obj_ループ.strタスク,
        is完了:
          obj_ループ.numID === obj_todo.numID
            ? !obj_ループ.is完了
            : obj_ループ.is完了,
      };
    });
    set_arrObjTodo(arrNew_objTodo);
  };

  const Liコンポーネントでobj_todoを個別削除 = (obj_todo) => {
    if (!confirm("個別削除しますか？")) return;
    const arrNew_objTodo = arr_objTodo.filter((obj_ループ) => {
      return obj_ループ.numID !== obj_todo.numID;
    });
    set_arrObjTodo(arrNew_objTodo);
  };

  const 自コンポーネントでobj_todoを一括削除 = () => {
    if (!confirm("一括削除しますか？")) return;
    const arrNew_objTodo = arr_objTodo.filter((obj_ループ) => {
      return obj_ループ.is完了 === false;
    });
    set_arrObjTodo(arrNew_objTodo);
  };

  const Formコンポーネントでobj_todoを個別追加 = (str_追加タスク) => {
    const arrNew_objTodo = [...arr_objTodo];
    const objNew_todo = {
      numID: Date.now(),
      strタスク: str_追加タスク,
      is完了: false,
    };
    arrNew_objTodo.push(objNew_todo);
    set_arrObjTodo(arrNew_objTodo);
  };

  const arr_Li = arr_objTodo.map((obj_ループ) => {
    return (
      <Li
        key={obj_ループ.numID}
        p_objTodo={obj_ループ}
        p_チェックボックスを変更={Liコンポーネントでis完了をトグル}
        p_Deleteボタンをクリック={Liコンポーネントでobj_todoを個別削除}
      />
    );
  });

  return (
    <>
      <main>
        <h1>
          <span>Todo</span>
          <button onClick={自コンポーネントでobj_todoを一括削除}>
            Purge
          </button>
        </h1>
        <ul>{arr_Li}</ul>
        <Form p_送信を実行={Formコンポーネントでobj_todoを個別追加} />
      </main>
    </>
  );
}

export default App;
