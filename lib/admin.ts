// Admin utilities using MongoDB authentication
import { Admin } from '@/models/Admin';
import connectDB from './mongodb';

export async function isAdmin(userId: string): Promise<boolean> {
  try {
    await connectDB();
    
    const admin = await Admin.findById(userId).select('isActive');
    return admin && admin.isActive;
  } catch (error) {
    console.error('Error checking admin status:', error);
    return false;
  }
}

export async function getAdminPermissions(userId: string): Promise<string[]> {
  try {
    await connectDB();
    
    const admin = await Admin.findById(userId).select('role permissions isActive');
    if (!admin || !admin.isActive) return [];
    
    // Super admin has all permissions
    if (admin.role === 'super_admin') {
      return ['admissions', 'content', 'testimonials', 'gallery', 'users', 'settings'];
    }
    
    return admin.permissions || [];
  } catch (error) {
    console.error('Error getting admin permissions:', error);
    return [];
  }
}

export { Admin };
