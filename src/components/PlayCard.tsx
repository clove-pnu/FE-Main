import { Link } from 'react-router-dom';
import { Play } from '../utils/type';
import styles from './styles/PlayCard.module.css';

export default function PlayCard({
  id,
  image,
  name,
  venue,
  startDate,
  endDate,
}: Play) {
  return (
    <Link className={styles.link} to={`http://localhost:3007/page/play/${name}`}>
      <div className={styles.container}>
        <img
          src={image}
          alt={`${name} 포스터`}
          className={styles.image}
        />
        <div className={styles.contentContainer}>
          <h3 className={styles.title}>{name}</h3>
          <div>{venue}</div>
          <div className={styles.date}>
            {startDate}
            {' '}
            ~
            {' '}
            {endDate}
          </div>
        </div>
      </div>
    </Link>
  );
}
