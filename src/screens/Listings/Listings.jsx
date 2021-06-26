import { PropertyCard } from './components/PropertyCard';
import { useProperties } from './hooks/useProperties';

import styles from './Listings.module.css';

const Listings = () => {
  const { data, error, isFetching } = useProperties();

  if (error) return <div>{error.message}</div>;

  if (isFetching) return <div>Loading</div>;

  return (
    <div className={styles.listings}>
      {data.map((property, index) => (
        <PropertyCard propertyInfo={property} key={index} />
      ))}
    </div>
  );
};

export { Listings };
