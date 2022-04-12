interface PriceProps {
  price: number,
  setActionModal: (arg: boolean) => void,
  isError: boolean
}


export function Price({price, setActionModal, isError}: PriceProps) {

  return (
    <div className="product-container__price-wrapper">
      <p className="product-container__price-info product-container__price-info--title">Цена:</p>
      <p className="product-container__price-info product-container__price-info--value">{price}</p>
      <button
        className="button button--red button--big product-container__button"
        onClick={() => setActionModal(true)}
        disabled={isError}
      >Добавить в корзину
      </button>
    </div>
  );
}
