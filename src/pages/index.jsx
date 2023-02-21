import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div>
        <h1 className='text-2xl'>this is a practice project with nextjs and contentful.</h1>
      </div>
    </>
  )
}
