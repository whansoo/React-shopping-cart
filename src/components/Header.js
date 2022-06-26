import React from 'react';

export default function Header(props) {
    const {countCartItems} = props; // cartItem.length를 통하여 수량을 파악후 countCartItems로 넘겨준다.
  return (
    <header className="block row center"> 
      <div>
        <a href="#/">
          <h1>Small Shopping Cart</h1>
        </a>
      </div>
      <div>
        <a href="#/cart">
          Cart{' '}
          {countCartItems ? (<button className="badge">{countCartItems}</button>) : ('')} 
        </a>{' '}
        <a href="#/signin"> SignIn</a>
      </div>
    </header>
  );
}