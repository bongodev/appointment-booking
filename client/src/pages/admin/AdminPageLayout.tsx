import AdminSidebar from '@/components/AdminSidebar';
import { Outlet } from 'react-router';

type AdminProps = {
  className?: string;
};

export default function AdminPageLayout({}: AdminProps) {
  return (
    <AdminSidebar>
      <Outlet />
    </AdminSidebar>
  );
}
