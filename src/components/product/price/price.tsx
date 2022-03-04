interface PriceProps {
  price: number,
  setAddToCart: (arg: boolean) => void
}


export default function Price({price, setAddToCart}: PriceProps) {

  return (
    <div className="product-container__price-wrapper">
      <p className="product-container__price-info product-container__price-info--title">Цена:</p>
      <p className="product-container__price-info product-container__price-info--value">{price}</p>
      <button className="button button--red button--big product-container__button" onClick={() => setAddToCart(true)}>Добавить в корзину</button>
    </div>
  );
}
