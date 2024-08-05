import { Link, Outlet } from 'react-router-dom';
import SearchBar from '../SearchBar';

export default function MainLayout() {
  return (
    <div className="mx-auto my-0 flex min-h-screen flex-col xl:w-[1187px]">
      <div className="flex flex-row justify-between p-4">
        <div className="flex flex-row items-end gap-4 xl:w-[540px]">
          <div>
            <Link className="flex px-4 text-center text-3xl font-bold" to="/">Clove</Link>
          </div>
          <div className="w-full">
            <SearchBar />
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
