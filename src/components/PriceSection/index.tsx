import priceData from '../../data/priceData.json';
import { Section } from '../common/Section';
import imageUrl from './../../assets/backgrounds/Pexels-Photo-by-Drift-Shutterbug.png';
import lanternImgUrl from './../../assets/price/decorative lantern.png';
import globeImgUrl from './../../assets/price/globe.png';
import './index.scss';

import PriceCards from './PriceCards';
import PriceImage from './PriceImage';

export default function PriceSection() {
  return (
    <div className="price-section">
      <Section imageUrl={imageUrl} backgroundColor="black">
        <div className="price-group">
          <h1>Price</h1>
          <div>
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
          <PriceImage
            className="price-globe"
            src={globeImgUrl}
            imgAlt="graish image of a globe"
          />
          <PriceImage
            className="price-lamp"
            src={lanternImgUrl}
            imgAlt="graish image of a lit lantern"
            maxWidth={175}
          />
        </div>
      </Section>
    </div>
  );
}
