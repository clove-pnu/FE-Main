import { Link } from 'react-router-dom';
import { Play } from '../utils/type';
import styles from './styles/PlayCard.module.css';

export default function PlayCard({
  pid,
  thumbnailUrl,
  title,
  location,
  startDate,
  endDate,
}: Play) {
  return (
    <Link className={styles.link} to={`/play/${pid}`}>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img src={thumbnailUrl} alt={`${title} 포스터`} />
        </div>
        <div className={styles.contentContainer}>
          <h3 className={styles.title}>{title}</h3>
          <div>{location}</div>
          <div className={styles.date}>
            {startDate.toLocaleDateString()}
            {' '}
            ~
            {' '}
            {endDate.toLocaleDateString()}
          </div>
        </div>
      </div>
    </Link>
  );
}
