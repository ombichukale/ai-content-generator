import { SignIn } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export default function Page() {
  return (
    <div className="flex items-center justify-center h-screen">
      <SignIn
        afterSignInUrl="/dashboard"  // Redirect to dashboard after sign in
        signUpUrl="/sign-up"
        appearance={{
          elements: {
            rootBox: "mx-auto",
            card: "bg-white shadow-xl",
          },
        }}
      />
    </div>
  );
}

// app/(auth)/sign-in/[[...sign-in]]/page.tsx
// import { SignIn } from "@clerk/nextjs";

