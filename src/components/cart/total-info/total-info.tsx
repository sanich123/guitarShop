interface TotalInfoProps {
  allGuitarsPrice: number,
  discount: number
}


export default function TotalInfo({allGuitarsPrice, discount}: TotalInfoProps) {
  return (
    <div className="cart__total-info">
      <p className="cart__total-item">
        <span className="cart__total-value-name">Всего:</span>
        <span className="cart__total-value">{allGuitarsPrice} ₽</span>
      </p>
      <p className="cart__total-item">
        <span className="cart__total-value-name">Скидка:</span>
        <span className="cart__total-value cart__total-value--bonus">- {discount} ₽</span>
      </p>
      <p className="cart__total-item">
        <span className="cart__total-value-name">К оплате:</span>
        <span className="cart__total-value cart__total-value--payment">{allGuitarsPrice - discount} ₽</span>
      </p>
      <button className="button button--red button--big cart__order-button">Оформить заказ</button>
    </div>
  );
}
