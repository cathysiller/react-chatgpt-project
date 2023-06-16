import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="h-full flex justify-center items-center flex-col">
      <div>What do you want to learn?</div>
      <div className="flex">
        ChatGPT
      </div>
    </div>
  )
}
