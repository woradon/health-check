import type { VercelRequest, VercelResponse } from "@vercel/node";

export default function handler(req: VercelRequest, res: VercelResponse) {
  res.status(500).json({
    status: 500,
    message: "Failed"
  });
}
