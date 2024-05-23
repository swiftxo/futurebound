import { getAuthSession } from "@/utils/auth";
import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

// GET ALL COMMENTS OF A POST
export const GET = async (req) => {
  const { searchParams } = new URL(req.url);
  const postSlug = searchParams.get("postSlug");


  try {
    const comments = await prisma.comment.findMany({
      where: {
        ...(postSlug && { postSlug }),
      },
      include: { user: true, post: true },
    });

    return new NextResponse(JSON.stringify(comments), { status: 200 });
  } catch (err) {
    console.error('Error fetching comments:', err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};

// CREATE A COMMENT
export const POST = async (req) => {
  const session = await getAuthSession();

  if (!session) {
    console.warn('User not authenticated');
    return new NextResponse(
      JSON.stringify({ message: "Not Authenticated!" }),
      { status: 401 }
    );
  }

  try {
    const body = await req.json();

    const comment = await prisma.comment.create({
      data: {
        desc: body.desc,
        userEmail: session.user.email,
        postSlug: body.postSlug,
      },
    });
    console.log('Comment created:', comment);

    return new NextResponse(JSON.stringify(comment), { status: 200 });
  } catch (err) {
    console.error('Error creating comment:', err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};
