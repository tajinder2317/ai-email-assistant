export function healthCheck(req, res) {
  res.json({
    success: true,
    message: "Backend running",
  });
}

