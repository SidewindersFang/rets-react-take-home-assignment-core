import styles from './PropertyCard.module.css';
import { DateTime } from 'luxon';

const PropertyCard = ({ propertyInfo }) => {
  const { address, listDate, listPrice, photos, property } = propertyInfo;
  const photo = photos[0];
  const { bedrooms, bathsHalf, bathsFull, area } = property;
  const totalBaths = bathsFull + bathsHalf * 0.5;
  const formattedListDate = DateTime.fromISO(listDate).toLocaleString();

  console.log(propertyInfo);
  console.log();

  return (
    <div className={styles.card}>
      <img alt="" className={styles.photo} src={photo} />
      <div className={styles.property}>
        {`${bedrooms} BR | ${totalBaths} Bath | ${area} Sq Ft`}
      </div>
      <div className={styles.price}>{`$${listPrice.toLocaleString()}`}</div>
      <div className={styles.address}>{address.full}</div>
      <div className={styles.listingDate}>{formattedListDate}</div>
    </div>
  );
};

export { PropertyCard };
