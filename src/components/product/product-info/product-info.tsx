import Rating from '../../common/rating/rating';
import Properties from './properties/properties';

interface ProductInfoProps {
  rating: number,
  name: string,
  vendorCode: string,
  stringCount: number,
  type: string,
  description: string
}

export default function ProductInfo({rating, name, vendorCode,stringCount, type, description}: ProductInfoProps) {
  return (
    <div className="product-container__info-wrapper">
      <h2 className="product-container__title title title--big title--uppercase">
        {name}
      </h2>
      <div className="rate product-container__rating" aria-hidden="true">
        <span className="visually-hidden">Рейтинг:</span>
        <Rating width={14} height={14} rating={rating} />
        <span className="rate__count" />
        <span className="rate__message" />
      </div>
      <Properties
        vendorCode={vendorCode}
        stringCount={stringCount}
        type={type}
        description={description}
      />
    </div>
  );
}
