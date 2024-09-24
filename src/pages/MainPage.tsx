import { useEffect, useState } from 'react';
import PlayList from '../components/PlayList';
import { Play } from '../utils/type';
import styles from './styles/MainPage.module.css';
import { fetchWithHandler } from '../utils/fetchWithHandler';
import { getEvent, getNamespaceList } from '../apis/event';

export default function MainPage() {
  const [namespaceList, setNamespaceList] = useState<string[]>([]);
  const [playList, setPlayList] = useState<Play[]>([]);

  useEffect(() => {
    fetchWithHandler(() => getNamespaceList(), {
      onSuccess: (response) => {
        setNamespaceList(response.data);
      },
      onError: (error) => {
        console.error(error);
      },
    });
  }, []);

  useEffect(() => {
    const fetch = async () => {
      const getEventListResult = await Promise.all(namespaceList.map((namespace) => {
        let result = null;

        fetchWithHandler(() => getEvent(namespace), {
          onSuccess: (response) => {
            result = { ...response.data, namespace };
          },
          onError: () => {},
        });

        return result;
      }));

      setPlayList(getEventListResult);
    };

    fetch();
  }, [namespaceList]);

  return (
    <main>
      <div className={styles.container}>
        <div className={styles.sectionTitle}>공연 목록</div>
        <PlayList playCards={playList} />
      </div>
    </main>
  );
}
