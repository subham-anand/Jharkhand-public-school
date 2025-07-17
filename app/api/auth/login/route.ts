import { NextRequest } from 'next/server';
import { AuthController } from '@/controllers/AuthController';

// For backward compatibility, redirect to verify-otp
export async function POST(request: NextRequest) {
  return AuthController.verifyOTP(request);
}
