import Sidebar from '@/components/common/sidebar';
import HomeMainComponent from '@/components/home/main';

export default function Home() {
  return (
    <div className="flex">
      <Sidebar />
      <main className='w-full min-h-[100vh]'>
        <HomeMainComponent />
      </main>
    </div>
  );
}
