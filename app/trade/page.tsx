import Sidebar from '@/components/common/sidebar';
import ImportsComponent from '@/components/trade/imports';

export default function TradePage() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="min-h-[100vh] w-full">
        <ImportsComponent />
      </main>
    </div>
  );
}
