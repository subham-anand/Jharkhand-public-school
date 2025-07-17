import { NextRequest } from 'next/server';
import { AuthController } from '@/controllers/AuthController';

export async function GET(request: NextRequest) {
  return AuthController.getCurrentUser(request);
}
