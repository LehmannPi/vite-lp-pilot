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
    <>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <h3>{title}</h3>
        <h4>{subtitle}</h4>
        <p>{price}</p>
        {features.length > 0 &&
          features.map((feature, index) => {
            return (
              <div style={{ display: 'flex' }} key={index}>
                <span>checkmark</span>
                <p className="feature-text">{feature}</p>
              </div>
            );
          })}
      </div>
    </>
  );
}
