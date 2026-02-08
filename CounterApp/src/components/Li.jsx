const Li = (props) => {
  const { p_num要素番号, p_str商品名, p_num価格, p_num個数, p_マイナスボタンをクリック, p_プラスボタンをクリック } =
    props;

  const 自コンポーネントで個数を減らす = () => {
    p_マイナスボタンをクリック(p_num要素番号);
  };
  const 自コンポーネントで個数を増やす = () => {
    p_プラスボタンをクリック(p_num要素番号);
  };

  return (
    <li>
      <button onClick={自コンポーネントで個数を減らす}>-</button>
      <button onClick={自コンポーネントで個数を増やす}>+</button>
      <span>
        {p_str商品名} ({p_num価格}円 X {p_num個数}個)
      </span>
    </li>
  );
};

export default Li;
