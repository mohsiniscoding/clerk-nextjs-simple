import Link from 'next/link'
import { Button } from "@/components/ui/button"
import {
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'


export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 border-b">
      <div className="flex items-center">
        <Link href="/">
            <span className="ml-2 text-xl font-bold">SaaS App</span>
        </Link>
      </div>
      <SignedOut>
        <Button asChild>
          <Link href="/sign-in">Sign In</Link>
        </Button>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
  );
}