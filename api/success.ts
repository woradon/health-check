import type { VercelRequest, VercelResponse } from "@vercel/node";

export default function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // ✅ CORS: allow all
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");

  // ✅ handle preflight (OPTIONS)
  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }

  // ✅ allow all requests
  return res.status(200).json({
    status: 200,
    message: "Success",
    method: req.method,
  });
}
