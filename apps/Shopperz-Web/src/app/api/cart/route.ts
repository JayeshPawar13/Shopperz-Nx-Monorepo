import { makeApiCall } from '@shopperz-web/src/lib/apiUtils';
import { Cart } from '@shopperz/interfaces/cart.interface';
import { Product } from '@shopperz/interfaces/products.interface';
import { User } from '@shopperz/interfaces/user.interface';
import { Collection, WithId } from 'mongodb';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const handleQueryCallback = async (
    collection: Collection<Cart | Product | User>,
    url: URL,
    body?: any
  ) => {
    const id = url.searchParams.get('id');
    const result: WithId<Cart | Product | User> | never[] =
      (await collection.findOne({ userId: id })) ?? [];
    return result;
  };
  return makeApiCall(request, 'cart', handleQueryCallback);
}

export async function POST(request: NextRequest) {
  const handleQueryCallback = async (
    collection: Collection<Cart | Product | User>,
    url: URL,
    body?: any
  ) => {
    return await collection.insertOne(body);
  };
  return makeApiCall(request, 'cart', handleQueryCallback);
}

export async function PUT(request: NextRequest) {
  const handleQueryCallback = async (
    collection: Collection<Cart | Product | User>,
    url: URL,
    body?: any
  ) => {
    const id = url.searchParams.get('id');
    const result = await collection.updateOne(
      { userId: id },
      { $set: { items: body.items } }
    );
    return result;
  };
  return makeApiCall(request, 'cart', handleQueryCallback);
}

export async function DELETE(request: NextRequest) {
  const handleQueryCallback = async (
    collection: Collection<Cart | Product | User>,
    url: URL,
    body?: any
  ) => {
    const id = url.searchParams.get('id');
    const productId = url.searchParams.get('productId');
    const result = await collection.updateOne(
      { userId: id },
      { $pull: { items: { productId: productId } } }
    );
    return result;
  };
  return makeApiCall(request, 'cart', handleQueryCallback);
}
