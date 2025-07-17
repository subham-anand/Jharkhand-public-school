// Admin Panel Home Page - MongoDB Authentication
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { AuthService } from '@/services/AuthService';
import Link from 'next/link';

export default async function AdminPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get('auth-token')?.value;

  if (!token) {
    redirect('/admin/login');
  }

  const user = await AuthService.getCurrentUser(token);
  if (!user) {
    redirect('/admin/login');
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
              <p className="text-gray-600">Welcome back, {user.email}</p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                {user.role.replace('_', ' ').toUpperCase()}
              </span>
              <form action="/api/auth/logout" method="POST">
                <button
                  type="submit"
                  className="text-gray-500 hover:text-gray-700"
                >
                  Logout
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Admissions Card */}
            {user.permissions.includes('admissions') && (
              <Link href="/admin/admissions" className="bg-white overflow-hidden shadow rounded-lg hover:shadow-md transition-shadow">
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center">
                        <span className="text-white text-sm font-medium">📋</span>
                      </div>
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">
                          Admissions
                        </dt>
                        <dd className="text-lg font-medium text-gray-900">
                          Manage Applications
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </Link>
            )}

            {/* Content Management Card */}
            {user.permissions.includes('content') && (
              <Link href="/admin/content" className="bg-white overflow-hidden shadow rounded-lg hover:shadow-md transition-shadow">
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-green-500 rounded-md flex items-center justify-center">
                        <span className="text-white text-sm font-medium">📝</span>
                      </div>
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">
                          Content
                        </dt>
                        <dd className="text-lg font-medium text-gray-900">
                          Manage Website Content
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </Link>
            )}

            {/* Testimonials Card */}
            {user.permissions.includes('testimonials') && (
              <Link href="/admin/testimonials" className="bg-white overflow-hidden shadow rounded-lg hover:shadow-md transition-shadow">
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-purple-500 rounded-md flex items-center justify-center">
                        <span className="text-white text-sm font-medium">⭐</span>
                      </div>
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">
                          Testimonials
                        </dt>
                        <dd className="text-lg font-medium text-gray-900">
                          Manage Reviews
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </Link>
            )}

            {/* Gallery Card */}
            {user.permissions.includes('gallery') && (
              <Link href="/admin/gallery" className="bg-white overflow-hidden shadow rounded-lg hover:shadow-md transition-shadow">
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-yellow-500 rounded-md flex items-center justify-center">
                        <span className="text-white text-sm font-medium">🖼️</span>
                      </div>
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">
                          Gallery
                        </dt>
                        <dd className="text-lg font-medium text-gray-900">
                          Manage Images
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </Link>
            )}

            {/* Users Management Card */}
            {user.permissions.includes('users') && (
              <Link href="/admin/users" className="bg-white overflow-hidden shadow rounded-lg hover:shadow-md transition-shadow">
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-red-500 rounded-md flex items-center justify-center">
                        <span className="text-white text-sm font-medium">👥</span>
                      </div>
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">
                          Users
                        </dt>
                        <dd className="text-lg font-medium text-gray-900">
                          Manage Admins
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </Link>
            )}

            {/* Settings Card */}
            {user.permissions.includes('settings') && (
              <Link href="/admin/settings" className="bg-white overflow-hidden shadow rounded-lg hover:shadow-md transition-shadow">
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-gray-500 rounded-md flex items-center justify-center">
                        <span className="text-white text-sm font-medium">⚙️</span>
                      </div>
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">
                          Settings
                        </dt>
                        <dd className="text-lg font-medium text-gray-900">
                          System Settings
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </Link>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
