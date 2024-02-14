import { CheckIcon } from '../../common/icons/CheckIcon';

type PriceCardProps = {
  title: string;
  subtitle: string;
  price: string;
  features: string[];
};

export default function PriceCards({
  features,
  price,
  subtitle,
  title,
}: PriceCardProps) {
  return (
    <div className="price-card">
      <div className="price-card-main">
        <h3>{title}</h3>
        <h4>{subtitle}</h4>
        <div
          style={{ height: '1px', width: 'full', backgroundColor: 'black' }}
        />
        <p className="price-card-value">{price}</p>
        <div className="price-card-features">
          {features.length > 0 &&
            features.map((feature, index) => {
              return (
                <div style={{ display: 'flex', gap: '8px' }} key={index}>
                  <CheckIcon />
                  <p className="feature-text">{feature}</p>
                </div>
              );
            })}
        </div>
      </div>
      <button className="price-button">Buy now</button>
    </div>
  );
}
