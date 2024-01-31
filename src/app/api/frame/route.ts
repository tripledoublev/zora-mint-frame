import { NextRequest, NextResponse } from 'next/server';
import { SITE_URL } from '@/config'


async function getResponse(req: NextRequest): Promise<NextResponse> {
  return NextResponse.redirect(`${SITE_URL}/redirect`, {status: 302});
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';