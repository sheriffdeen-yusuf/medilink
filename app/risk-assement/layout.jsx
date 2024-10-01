'use client';
import PrivateLayout from '@/components/PrivateLayout';
export default function Layout({ children }) {
  return (
    <PrivateLayout>
      <div className="">{children}</div>
    </PrivateLayout>
  );
}
