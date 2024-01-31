import { NextRequest, NextResponse } from 'next/server';
import { SITE_URL } from '@/config'

export async function POST(req: NextRequest): Promise<Response> {
  return NextResponse.redirect(`${SITE_URL}/redirect`, { status: 302 });
}

export const dynamic = 'force-dynamic';