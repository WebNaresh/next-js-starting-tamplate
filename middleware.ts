export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/scan", "/chat", "/shareQr"],
};
