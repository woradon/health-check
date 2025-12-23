import type { VercelRequest, VercelResponse } from "@vercel/node";

export default function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // ✅ CORS: allow all
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");

  // ✅ handle preflight
  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }

  // ❌ always fail
  return res.status(500).json({
    status: 500,
    message: "Failed",
    method: req.method,
  });
}
