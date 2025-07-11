// app/api/revalidate/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

export async function POST(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get('secret');

  if (secret !== process.env.REVALIDATE_SECRET_TOKEN) {
    return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
  }

  try {
    const body = await req.json();

    // Assume slug comes from the webhook payload
    const slug = body?.slug;

    if (!slug) {
      return NextResponse.json({ message: 'Missing slug' }, { status: 400 });
    }

    // Revalidate specific blog post route and the blog list
    revalidatePath(`/blog/${slug}`); // Revalidate the updated post
    revalidatePath(`/blog`); // Revalidate blog list page if needed

    return NextResponse.json({ revalidated: true, now: Date.now() });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { message: 'Revalidation error' },
      { status: 500 }
    );
  }
}
