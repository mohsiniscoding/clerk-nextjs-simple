import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className='w-max m-auto'>
      <SignIn signUpUrl='/sign-up' />
    </div>
  )
  
}