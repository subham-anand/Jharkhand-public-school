import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { AuthService, AuthUser } from '@/services/AuthService';
import AdminSidebar from '../_components/AdminSidebar';
import AdminHeader from '../_components/AdminHeader';

export default async function AuthenticatedWrapper({
  children,
}: {
  children: (user: AuthUser) => React.ReactNode;
}) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get('auth-token')?.value;

    if (!token) {
      redirect('/management/login');
    }

    const user = await AuthService.getCurrentUser(token);
    if (!user) {
      redirect('/management/login');
    }

    return (
      <div className="min-h-screen bg-gray-50">
        <AdminHeader user={user} />
        <AdminSidebar user={user} />
        <main className="ml-72 pt-16 min-h-screen">
          <div className="p-6">
            {children(user)}
          </div>
        </main>
      </div>
    );
  } catch (error) {
    console.error('Authentication error:', error);
    redirect('/management/login');
  }
}
