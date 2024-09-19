import { mockData } from '../mocks/event';
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
        id,
        image,
        name,
        venue,
        startDate,
        endDate,
      }) => (
        <li
          key={id}
        >
          <PlayCard
            id={id}
            image={image}
            name={name}
            venue={venue}
            startDate={startDate}
            endDate={endDate}
          />
        </li>
      ))}
    </ul>
  );
}
