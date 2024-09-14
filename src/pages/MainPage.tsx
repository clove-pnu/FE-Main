import { useEffect, useState } from 'react';
import PlayList from '../components/PlayList';
import { Play } from '../utils/type';
import styles from './styles/MainPage.module.css';
import { fetchWithHandler } from '../utils/fetchWithHandler';
import { getEventList } from '../apis/event';

export default function MainPage() {
  const [playList, setPlayList] = useState<Play[]>([]);

  useEffect(() => {
    fetchWithHandler(() => getEventList(), {
      onSuccess: (response) => {
        setPlayList(response.data);
        console.log(response);
      },
      onError: (error) => {
        console.error(error);
      },
    });
  }, []);

  return (
    <main>
      <div className={styles.container}>
        <PlayList PlayCards={playList} />
      </div>
    </main>
  );
}
