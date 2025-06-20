import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (    
  <div className="flex items-center justify-center h-screen">
     <SignUp
      afterSignUpUrl="/dashboard"  // Redirect to dashboard after sign up
      signInUrl="/sign-in"
      appearance={{
        elements: {
          rootBox: "mx-auto",
          card: "bg-white shadow-xl",
        },
      }}
    />
</div>);
}
