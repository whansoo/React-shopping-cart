import Header from './components/Header';
import Main from './components/Main';
import Basket from './components/Basket';
import data from './data';
import { useState } from 'react';

function App() {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);
  //장바구니에 내가 선택한 목록이 있을경우 숫자1을 더한다, 없을경우 상품을 추가한다
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>  //여기서 map은 반복문 역할을 한다 ...exist는 스프레드 문법으로 배열을 펼치고 qty를 더한다.
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  //장바구니에 1개의 수량이 있으면 상품목록을 지운다, 수량이 2개 이상일 경우 숫자1을 뺀다.
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  return (
    <div className="App">
      <Header countCartItems={cartItems.length}></Header>
      <div className="row">
        <Main products={products} onAdd={onAdd}></Main>
        <Basket cartItems={cartItems} onAdd={onAdd} onRemove={onRemove}></Basket>
      </div>
    </div>
  );
}

export default App;