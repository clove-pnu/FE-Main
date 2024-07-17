import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PodInfo } from '../../utils/type';

export default function OwnerPage() {
  const [podList, setPodList] = useState<PodInfo[]>([]);

  return (
    <main>
      <div>
        <div>
          배포 중인 pod 목록
          <ul>
            {podList.map(({ name, status, namespace }) => (
              <li key={name}>
                <div>{name}</div>
                <div>{status}</div>
                <div>{namespace}</div>
              </li>
            ))}
          </ul>
        </div>
        <Link to="./deploy">배포</Link>
      </div>
    </main>
  );
}
