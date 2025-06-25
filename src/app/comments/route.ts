import { Comment, comments } from "./data";

export async function GET() {
  return Response.json(comments);
}

export async function POST(request: Request) {
  const { text } = (await request.json()) as Comment;

  if (!text) {
    return Response.json("Text is required", { status: 400 });
  }

  const newComment = {
    id: comments.length + 1,
    text,
  };
  comments.push(newComment);

  return new Response(JSON.stringify(newComment), {
    headers: { "Content-Type": "application/json" },
    status: 201,
  });
}
