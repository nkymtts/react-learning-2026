import { useRef, useState } from "react";

const Form = (props) => {
  const { p_送信を実行 } = props;

  const [str_追加タスク, set_str追加タスク] = useState("");
  const ref_テキストボックス = useRef(null);

  const 自コンポーネントでテキストボックス更新 = (e) => {
    const strNew_追加タスク = e.currentTarget.value;
    set_str追加タスク(strNew_追加タスク);
  };

  const 自コンポーネントでobj_todoを個別追加 = (e) => {
    e.preventDefault();
    p_送信を実行(str_追加タスク);
    set_str追加タスク("");
    ref_テキストボックス.current.focus();
  };

  return (
    <form onSubmit={自コンポーネントでobj_todoを個別追加}>
      <input
        type="text"
        value={str_追加タスク}
        onChange={自コンポーネントでテキストボックス更新}
        ref={ref_テキストボックス}
      />
      <button>Add</button>
    </form>
  );
};

export default Form;
