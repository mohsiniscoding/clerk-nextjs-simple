'use client';

import { useUser } from '@clerk/nextjs'

export default function PrivatePage() {
  const { isLoaded, isSignedIn, user } = useUser()
  
  return (
    <div className="w-max m-auto text-center">
      <h1 className="text-xl font-bold">Private Page</h1>
      <p>This is a private page. You can only see it if you are signed in.</p>
      {isLoaded && isSignedIn && <p>Your first name is {user.firstName}</p>}
    </div>
  );
}