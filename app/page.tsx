import Image from 'next/image'
import { Inter } from 'next/font/google'
import Wholepagecontainer from './Wholepagecontainer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <div className='overflow-hidden w-full'>
     <Wholepagecontainer/>
    </div>
  )
}
