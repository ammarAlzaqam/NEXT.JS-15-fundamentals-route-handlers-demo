import { Comment, comments } from "../data";

export async function GET(
  _: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const comment = comments.find((c) => c.id === parseInt(id));
  if (!comment) return new Response("Comment not found", { status: 404 });
  return Response.json(comment, { status: 200 });
}

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const { text } = (await request.json()) as Comment;
  if (!text) return new Response("Text is required", { status: 400 });

  let index = comments.findIndex((c) => c.id === parseInt(id));
  if (!index) return new Response("This comment not exist", { status: 404 });
  comments[index].text = text;
  return new Response("Comment is updated successfully", { status: 200 });
}

export async function DELETE(
  _: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const deletedCommentIndex = comments.findIndex((c) => c.id === parseInt(id));
  comments.splice(deletedCommentIndex, 1);
  return new Response("Comment deleted successfully", { status: 200 });
}
