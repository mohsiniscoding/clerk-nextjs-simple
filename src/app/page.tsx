// This is a mock function to simulate checking the user's login status

import Link from 'next/link'

// In a real application, this would be replaced with actual authentication logic
function isUserLoggedIn() {
  return false // Change this to true to see the logged-in state
}

// This is a mock function to simulate fetching user data
// In a real application, this would be replaced with actual data fetching logic
function getUserData() {
  return {
    name: "John Doe",
    email: "john@example.com"
  }
}

export default function Home() {

  return (
      <main className="w-full m-auto text-center">
        <p>This is home page (public)</p>
        <p>You can access this <Link href="/private-page" className='text-blue-500 underline'>Private page</Link> if you are signed in.</p>
      </main>
  )
}