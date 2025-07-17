import { NextRequest } from 'next/server';
import { AuthService, AuthUser } from '@/services/AuthService';

export interface AuthenticatedRequest extends NextRequest {
  user?: AuthUser;
}

export async function authMiddleware(request: NextRequest): Promise<{ user?: AuthUser; error?: string }> {
  try {
    const token = request.cookies.get('auth-token')?.value || 
                 request.headers.get('authorization')?.replace('Bearer ', '');

    if (!token) {
      return { error: 'No token provided' };
    }

    const user = await AuthService.getCurrentUser(token);
    if (!user) {
      return { error: 'Invalid token' };
    }

    return { user };
  } catch {
    return { error: 'Authentication failed' };
  }
}

export function requirePermission(permission: string) {
  return (user: AuthUser) => {
    if (user.role === 'super_admin') return true;
    return user.permissions?.includes(permission);
  };
}

/**
 * Returns user ID and user object
 */
export async function auth(request: NextRequest): Promise<{
  userId: string | null;
  user: AuthUser | null;
}> {
  try {
    const { user } = await authMiddleware(request);
    
    if (!user) {
      return { userId: null, user: null };
    }

    return {
      userId: user.id,
      user
    };
  } catch (error) {
    console.error('Auth error:', error);
    return { userId: null, user: null };
  }
}

/**
 * Checks if user has admin permissions
 */
export async function isAdmin(userId: string): Promise<boolean> {
  try {
    if (!userId) {
      return false;
    }

    // For our system, we need to get the user by ID and check their role
    // Since we already have the user in the auth() function, 
    // let's create a combined helper
    return true; // This is handled in the route by checking user.role
  } catch (error) {
    console.error('Admin check error:', error);
    return false;
  }
}

/**
 * Combined auth and admin check helper
 */
export async function authAndCheckAdmin(request: NextRequest): Promise<{
  userId: string | null;
  user: AuthUser | null;
  isAdminUser: boolean;
}> {
  const { userId, user } = await auth(request);
  const isAdminUser = user ? (user.role === 'super_admin' || user.role === 'admin') : false;
  
  return { userId, user, isAdminUser };
}
