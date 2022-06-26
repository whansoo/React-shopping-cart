import React from 'react';
import Product from './Product';

export default function Main(props) {
  const { products, onAdd } = props;
  return (
    <main className="block col-2">
      <h2>상품목록</h2>
      <div className="row">
        {products.map((product) => (  //Product의 수 만큼 반복을 하기 위해 map을 사용한다. 새로운 업데이트가 있는지 확인하기 위해 map에는 key가 필요하다 index보다는 고유의 id가 있는 것이 좋다.
          <Product key={product.id} product={product} onAdd={onAdd}></Product>
        ))}
      </div>
    </main>
  );
}

