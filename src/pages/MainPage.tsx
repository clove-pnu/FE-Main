import PlayList from '../components/PlayList';
import { Play } from '../utils/type';
import styles from './styles/MainPage.module.css';

const PlayListMockData: Play[] = [
  {
    pid: 0,
    thumbnailUrl: '',
    title: '테스트 공연 0',
    location: '테스트 장소',
    startDate: new Date(2024, 6, 15),
    endDate: new Date(2024, 6, 17),
  },
  {
    pid: 1,
    thumbnailUrl: '',
    title: '테스트 공연 1',
    location: '테스트 장소',
    startDate: new Date(2024, 6, 22),
    endDate: new Date(2024, 6, 23),
  },
  {
    pid: 2,
    thumbnailUrl: '',
    title: '테스트 공연 2',
    location: '테스트 장소',
    startDate: new Date(2024, 7, 1),
    endDate: new Date(2024, 7, 3),
  },
  {
    pid: 3,
    thumbnailUrl: '',
    title: '테스트 공연 3',
    location: '테스트 장소',
    startDate: new Date(2024, 7, 1),
    endDate: new Date(2024, 7, 3),
  },
];

export default function MainPage() {
  return (
    <main>
      <div className={styles.container}>
        <PlayList PlayCards={PlayListMockData} />
      </div>
    </main>
  );
}
