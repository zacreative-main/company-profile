import { NextResponse } from "next/server";
import { readBlobMediaStream } from "@/lib/blob-storage";

export async function GET(
  _request: Request,
  context: { params: Promise<{ pathname: string[] }> }
) {
  const { pathname } = await context.params;
  const blobPathname = pathname.join("/");

  // Strictly restrict public media serving to the `portfolio/` prefix
  if (!blobPathname.startsWith("portfolio/") || blobPathname.includes("..")) {
    return new NextResponse("Not Found", { status: 404 });
  }

  const media = await readBlobMediaStream(blobPathname);
  if (!media) {
    return new NextResponse("Not Found", { status: 404 });
  }

  return new NextResponse(media.stream, {
    status: 200,
    headers: {
      "Content-Type": media.contentType,
      "Cache-Control": "public, max-age=31536000, s-maxage=31536000, immutable",
    },
  });
}
