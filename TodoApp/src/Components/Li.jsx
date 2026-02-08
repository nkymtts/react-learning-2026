const Li = (props) => {
  const {
    p_objTodo,
    p_チェックボックスを変更,
    p_Deleteボタンをクリック,
  } = props;

  const 自コンポーネントでis完了をトグル = () => {
    p_チェックボックスを変更(p_objTodo);
  };

  const 自コンポーネントでobj_todoを個別削除 = () => {
    p_Deleteボタンをクリック(p_objTodo);
  };

  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={p_objTodo.is完了}
          onChange={自コンポーネントでis完了をトグル}
        />
        <span>{p_objTodo.strタスク}</span>
      </label>
      <button onClick={自コンポーネントでobj_todoを個別削除}>
        Delete
      </button>
    </li>
  );
};

export default Li;
