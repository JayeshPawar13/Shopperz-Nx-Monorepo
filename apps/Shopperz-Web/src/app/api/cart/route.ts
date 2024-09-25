import {
  deleteApiUtil,
  getApiUtil,
  postApiUtil,
  putApiUtil,
} from '@shopperz-web/src/lib/apiUtils';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  return getApiUtil(request, 'cart');
}

export async function POST(request: NextRequest) {
  return postApiUtil(request, 'cart');
}

export async function PUT(request: NextRequest) {
  return putApiUtil(request, 'cart');
}

export async function DELETE(request: NextRequest) {
  return deleteApiUtil(request, 'cart');
}
