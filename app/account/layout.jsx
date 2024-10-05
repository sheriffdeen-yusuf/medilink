'use client';
import SideNavigation from '../../components/SideNavigation';
import PrivateLayout from '@/components/PrivateLayout';
export default function Layout({ children }) {
  return (
    <PrivateLayout>
      <div className="grid grid-cols-[16rem_1fr] gap-12 h-[85vh]">
        <SideNavigation />
        <div className="py-10 px-24  overflow-y-auto ">{children}</div>
      </div>
    </PrivateLayout>
  );
}
