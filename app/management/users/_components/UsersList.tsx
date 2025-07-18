'use client';

import React, { useState, useEffect } from 'react';
import { AuthUser } from '@/services/AuthService';
import { 
  IconUser, 
  IconEdit, 
  IconCrown, 
  IconShield, 
  IconLoader,
  IconCheck,
  IconX,
  IconTrash,
  IconSettings,
  IconCalendar,
  IconEye,
  IconEyeOff
} from '@tabler/icons-react';

interface User {
  _id: string;
  email: string;
  role: string;
  permissions: string[];
  isActive: boolean;
  lastLogin?: string;
  createdAt: string;
}

interface UsersListProps {
  currentUser: AuthUser;
}

export default function UsersList({ currentUser }: UsersListProps) {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [updatingUser, setUpdatingUser] = useState<string | null>(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch('/api/management/users');
      const data = await response.json();

      if (response.ok) {
        setUsers(data);
      } else {
        setError(data.error || 'Failed to fetch users');
      }
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleToggleActive = async (userId: string, isActive: boolean) => {
    setUpdatingUser(userId);
    try {
      const response = await fetch(`/api/management/users/${userId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ isActive: !isActive }),
      });

      if (response.ok) {
        setUsers(users.map(user => 
          user._id === userId ? { ...user, isActive: !isActive } : user
        ));
      }
    } catch {
      setError('Failed to update user status');
    } finally {
      setUpdatingUser(null);
    }
  };

  const handleEditUser = (user: User) => {
    setEditingUser(user);
    setShowEditModal(true);
  };

  const handleUpdateUser = async (userData: Partial<User>) => {
    if (!editingUser) return;

    try {
      const response = await fetch(`/api/management/users/${editingUser._id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        const updatedUser = await response.json();
        setUsers(users.map(user => 
          user._id === editingUser._id ? updatedUser : user
        ));
        setShowEditModal(false);
        setEditingUser(null);
      }
    } catch {
      setError('Failed to update user');
    }
  };

  const handleDeleteUser = async (userId: string) => {
    const user = users.find(u => u._id === userId);
    const confirmMessage = `Are you sure you want to delete "${user?.email}"? This action cannot be undone.`;
    
    if (!confirm(confirmMessage)) return;

    setUpdatingUser(userId);
    try {
      const response = await fetch(`/api/management/users/${userId}`, {
        method: 'DELETE',
      });

      const data = await response.json();

      if (response.ok) {
        setUsers(users.filter(user => user._id !== userId));
        // Optional: Show success message
        setError(''); // Clear any previous errors
      } else {
        setError(data.error || 'Failed to delete user');
      }
    } catch {
      setError('Failed to delete user. Please try again.');
    } finally {
      setUpdatingUser(null);
    }
  };

  const getRoleIcon = (role: string) => {
    switch (role) {
      case 'super_admin':
        return <IconCrown size={16} className="text-yellow-500" />;
      case 'admin':
        return <IconShield size={16} className="text-blue-500" />;
      case 'moderator':
        return <IconUser size={16} className="text-green-500" />;
      default:
        return <IconUser size={16} className="text-gray-500" />;
    }
  };

  const getRoleBadge = (role: string) => {
    const roleConfig = {
      super_admin: { label: 'Super Admin', className: 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-white' },
      admin: { label: 'Admin', className: 'bg-gradient-to-r from-blue-500 to-blue-600 text-white' },
      moderator: { label: 'Moderator', className: 'bg-gradient-to-r from-green-500 to-green-600 text-white' },
      editor: { label: 'Editor', className: 'bg-gradient-to-r from-purple-500 to-purple-600 text-white' },
    };

    const config = roleConfig[role as keyof typeof roleConfig] || { label: role, className: 'bg-gray-100 text-gray-800' };
    
    return (
      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${config.className}`}>
        {config.label}
      </span>
    );
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getPermissionBadges = (permissions: string[]) => {
    const permissionLabels = {
      admissions: { label: 'Admissions', color: 'bg-emerald-100 text-emerald-800' },
      content: { label: 'Content', color: 'bg-blue-100 text-blue-800' },
      testimonials: { label: 'Reviews', color: 'bg-purple-100 text-purple-800' },
      gallery: { label: 'Gallery', color: 'bg-pink-100 text-pink-800' },
      users: { label: 'Users', color: 'bg-indigo-100 text-indigo-800' },
      settings: { label: 'Settings', color: 'bg-gray-100 text-gray-800' }
    };

    return permissions.map(permission => {
      const config = permissionLabels[permission as keyof typeof permissionLabels] || { label: permission, color: 'bg-gray-100 text-gray-800' };
      return (
        <span
          key={permission}
          className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${config.color}`}
        >
          {config.label}
        </span>
      );
    });
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <IconLoader size={24} className="animate-spin text-blue-500" />
        <span className="ml-2 text-gray-600">Loading users...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <IconX size={24} className="text-red-500" />
        </div>
        <p className="text-red-600 font-medium">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <>
      <div className="space-y-4">
        {users.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <IconUser size={24} className="text-gray-400" />
            </div>
            <p className="text-gray-600">No users found</p>
          </div>
        ) : (
          <>
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-4 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-blue-100 text-sm">Total Users</p>
                    <p className="text-2xl font-bold">{users.length}</p>
                  </div>
                  <IconUser size={24} className="text-blue-200" />
                </div>
              </div>
              <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-4 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-green-100 text-sm">Active Users</p>
                    <p className="text-2xl font-bold">{users.filter(u => u.isActive).length}</p>
                  </div>
                  <IconCheck size={24} className="text-green-200" />
                </div>
              </div>
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl p-4 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-purple-100 text-sm">Admins</p>
                    <p className="text-2xl font-bold">{users.filter(u => u.role === 'admin' || u.role === 'super_admin').length}</p>
                  </div>
                  <IconShield size={24} className="text-purple-200" />
                </div>
              </div>
            </div>

            {/* Users List */}
            <div className="space-y-4">
              {users.map((user) => (
                <div
                  key={user._id}
                  className={`bg-white rounded-xl shadow-sm border transition-all duration-300 hover:shadow-md ${
                    user.isActive ? 'border-gray-200' : 'border-gray-200 bg-gray-50'
                  }`}
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white ${
                            user.isActive ? 'bg-gradient-to-r from-blue-500 to-blue-600' : 'bg-gray-400'
                          }`}>
                            {getRoleIcon(user.role)}
                          </div>
                          {user.isActive && (
                            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                          )}
                        </div>
                        
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="font-semibold text-gray-900">{user.email}</h3>
                            {getRoleBadge(user.role)}
                            {user._id === currentUser.id && (
                              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-medium">
                                You
                              </span>
                            )}
                          </div>
                          
                          <div className="flex items-center gap-4 text-sm text-gray-600">
                            <div className="flex items-center gap-1">
                              <IconCalendar size={14} />
                              <span>Created {formatDate(user.createdAt)}</span>
                            </div>
                            {user.lastLogin && (
                              <div className="flex items-center gap-1">
                                <IconEye size={14} />
                                <span>Last login {formatDate(user.lastLogin)}</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2">
                          {user.isActive ? (
                            <div className="flex items-center gap-1 text-green-600 bg-green-100 px-3 py-1 rounded-full">
                              <IconCheck size={14} />
                              <span className="text-sm font-medium">Active</span>
                            </div>
                          ) : (
                            <div className="flex items-center gap-1 text-red-600 bg-red-100 px-3 py-1 rounded-full">
                              <IconEyeOff size={14} />
                              <span className="text-sm font-medium">Inactive</span>
                            </div>
                          )}
                        </div>

                        {/* Only super admin can manage other users */}
                        {currentUser.role === 'super_admin' && user._id !== currentUser.id && (
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => handleToggleActive(user._id, user.isActive)}
                              disabled={updatingUser === user._id}
                              className={`px-3 py-1.5 text-sm rounded-lg font-medium transition-colors ${
                                user.isActive
                                  ? 'bg-red-100 text-red-700 hover:bg-red-200'
                                  : 'bg-green-100 text-green-700 hover:bg-green-200'
                              } ${updatingUser === user._id ? 'opacity-50 cursor-not-allowed' : ''}`}
                            >
                              {updatingUser === user._id ? (
                                <IconLoader size={14} className="animate-spin" />
                              ) : (
                                user.isActive ? 'Deactivate' : 'Activate'
                              )}
                            </button>
                            
                            <button
                              onClick={() => handleEditUser(user)}
                              disabled={updatingUser === user._id}
                              className={`p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors ${
                                updatingUser === user._id ? 'opacity-50 cursor-not-allowed' : ''
                              }`}
                              title="Edit user"
                            >
                              <IconEdit size={16} />
                            </button>
                            
                            <button
                              onClick={() => handleDeleteUser(user._id)}
                              disabled={updatingUser === user._id}
                              className={`p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors ${
                                updatingUser === user._id ? 'opacity-50 cursor-not-allowed' : ''
                              }`}
                              title="Delete user"
                            >
                              {updatingUser === user._id ? (
                                <IconLoader size={16} className="animate-spin" />
                              ) : (
                                <IconTrash size={16} />
                              )}
                            </button>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Permissions */}
                    {user.permissions.length > 0 && (
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <div className="flex items-center gap-2 mb-2">
                          <IconSettings size={16} className="text-gray-600" />
                          <span className="text-sm font-medium text-gray-700">Permissions</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {getPermissionBadges(user.permissions)}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Edit Modal */}
      {showEditModal && editingUser && (
        <EditUserModal
          user={editingUser}
          onClose={() => {
            setShowEditModal(false);
            setEditingUser(null);
          }}
          onUpdate={handleUpdateUser}
        />
      )}
    </>
  );
}

// Edit User Modal Component
function EditUserModal({ user, onClose, onUpdate }: {
  user: User;
  onClose: () => void;
  onUpdate: (userData: Partial<User>) => void;
}) {
  const [formData, setFormData] = useState({
    email: user.email,
    role: user.role,
    permissions: user.permissions,
    isActive: user.isActive
  });

  const availablePermissions = [
    { id: 'admissions', label: 'Admissions Management' },
    { id: 'content', label: 'Content Management' },
    { id: 'testimonials', label: 'Testimonials Management' },
    { id: 'gallery', label: 'Gallery Management' },
    { id: 'users', label: 'User Management' },
    { id: 'settings', label: 'Settings Management' }
  ];

  const handlePermissionToggle = (permissionId: string) => {
    setFormData(prev => ({
      ...prev,
      permissions: prev.permissions.includes(permissionId)
        ? prev.permissions.filter(p => p !== permissionId)
        : [...prev.permissions, permissionId]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdate(formData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-xl max-w-md w-full">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Edit User</h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600"
            >
              <IconX size={20} />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Role
              </label>
              <select
                value={formData.role}
                onChange={(e) => setFormData(prev => ({ ...prev, role: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="admin">Admin</option>
                <option value="moderator">Moderator</option>
                <option value="editor">Editor</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Permissions
              </label>
              <div className="space-y-2">
                {availablePermissions.map(permission => (
                  <label key={permission.id} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={formData.permissions.includes(permission.id)}
                      onChange={() => handlePermissionToggle(permission.id)}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="ml-2 text-sm text-gray-700">{permission.label}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="isActive"
                checked={formData.isActive}
                onChange={(e) => setFormData(prev => ({ ...prev, isActive: e.target.checked }))}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <label htmlFor="isActive" className="ml-2 text-sm text-gray-700">
                Active user
              </label>
            </div>

            <div className="flex gap-3 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Update User
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
