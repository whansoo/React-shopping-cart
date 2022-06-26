import React from 'react';

export default function Product(props) {
  const { product, onAdd } = props;
  return (
    <div>
      <img className="small" src={product.img} alt={product.name} />
      <h3>{product.name}</h3>
      <div>{product.price}원</div>
      <div>
        <button onClick={() => onAdd(product)}>장바구니에 담기</button>
      </div>
    </div>
  );
}