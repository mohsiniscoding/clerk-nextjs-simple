import { SignUp } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className='w-max m-auto'>
        <SignUp signInUrl='/sign-in'/>
    </div>
    )
}