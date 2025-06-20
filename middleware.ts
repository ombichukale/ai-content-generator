// middleware.ts
import { authMiddleware } from "@clerk/nextjs/server";  // Changed import path

export default authMiddleware({
  publicRoutes: ["/", "/sign-in", "/sign-up"],
  ignoredRoutes: [
    "/api/webhook",
    "/_next/static",
    "/_next/image",
    "/favicon.ico",
  ],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};