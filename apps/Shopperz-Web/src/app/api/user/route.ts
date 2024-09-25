import { getApiUtil } from '@shopperz-web/src/lib/apiUtils';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  return getApiUtil(request, 'shopping-app-user');
}
