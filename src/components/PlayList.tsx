import { Play } from '../utils/type';
import PlayCard from './PlayCard';
import styles from './styles/PlayList.module.css';

interface PlayListProps {
  PlayCards: Play[];
}

export default function PlayList({ PlayCards }: PlayListProps) {
  return (
    <ul className={styles.container}>
      {PlayCards.map(({
        pid,
        thumbnailUrl,
        title,
        location,
        startDate,
        endDate,
      }) => (
        <li
          key={pid}
        >
          <PlayCard
            pid={pid}
            thumbnailUrl={thumbnailUrl}
            title={title}
            location={location}
            startDate={startDate}
            endDate={endDate}
          />
        </li>
      ))}
    </ul>
  );
}
