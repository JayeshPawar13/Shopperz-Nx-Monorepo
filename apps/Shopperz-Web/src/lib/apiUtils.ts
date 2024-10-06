import { NextRequest, NextResponse } from 'next/server';
import { Collection } from 'mongodb';

import clientPromise from './mongodb';

import { Product } from '@shopperz/interfaces/products.interface';
import { Cart } from '@shopperz/interfaces/cart.interface';
import { User } from '@shopperz/interfaces/user.interface';
import {
  CollectionType,
  CollectionName,
} from '@shopperz/interfaces/common.interface';

const getCollection = async <T extends CollectionName>(
  collectionName: T
): Promise<Collection<CollectionType<T>>> => {
  const client = await clientPromise;

  return client
    .db(process.env.mongodb_database)
    .collection<CollectionType<T>>(collectionName);
};

export async function makeApiCall(
  request: NextRequest,
  collectionName: CollectionName,
  handleQueryCallback: (
    collection: Collection<Cart | Product | User>,
    url: URL,
    method: string,
    body?: any
  ) => Promise<any>
) {
  const url = new URL(request.url);
  let body;

  if (request.method === 'POST' || request.method === 'PUT') {
    body = await request.json();
  }

  try {
    const collection = await getCollection(collectionName);
    const result = await handleQueryCallback(collection, url, body);

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      {
        error: `Failed to process ${request.method} request for ${collectionName}`,
      },
      { status: 500 }
    );
  }
}
