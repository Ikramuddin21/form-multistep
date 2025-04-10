export async function POST(req) {
  const body = await req.json();
  console.log("Received data:", body);

  await new Promise((resolve) => setTimeout(resolve, 1000));

  return Response.json({ success: true, data: body });
}
