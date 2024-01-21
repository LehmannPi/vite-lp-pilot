import priceData from '../../data/priceData.json';
import PriceCards from './PriceCards';

export default function PriceSection() {
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <h1>Price</h1>
        <div style={{ display: 'flex' }}>
          {priceData.priceCardsData.map((card, index) => {
            return (
              <PriceCards
                features={card.features}
                price={card.price}
                subtitle={card.subtitle}
                title={card.title}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
