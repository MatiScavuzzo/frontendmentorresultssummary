import Image from 'next/image'
import results from '/data.json'
import memory from 'assets/icon-memory.svg'
import reaction from 'assets/icon-reaction.svg'
import verbal from 'assets/icon-verbal.svg'
import visual from 'assets/icon-visual.svg'
import { ResultCard } from './components/ResultCard'
import { ContinueButton } from './components/ContinueButton'


export default function Home() {

  return (
    <main className="flex flex-col items-center min-h-screen bg-black sm:relative sm:flex-row sm:p-2">
      <div className='relative z-20 flex flex-col items-center justify-center w-full gap-2 p-4 sm:justify-around sm:h-4/5 sm:absolute sm:top-4 sm:w-1/2 rounded-b-3xl sm:rounded-3xl text-light-lavender bg-gradient-to-b from-light-slate-blue to-light-royal-blue'>
        <p className='text-lg font-bold'>Your Result</p>
        <div className='relative flex flex-col items-center justify-center rounded-full w-36 h-36 bg-gradient-to-b from-violet-blue to-persian-blue'>
          <p className='text-5xl font-extrabold text-white'>76</p>
          <p className='absolute font-bold bottom-4 text-slate-400'>of 100</p>
        </div>
        <div className='flex flex-col items-center justify-center w-3/4 gap-1'>
        <p className='text-xl font-bold text-white'>Great</p>
        <p className='text-base font-medium text-center sm:text-lg '>You scored higher than 65% of the people who have taken these test.</p>
        </div>
      </div>
      <section className='absolute z-10 flex flex-col justify-start w-full gap-2 p-6 bg-white sm:pl-14 sm:rounded-r-3xl sm:pr-10 sm:justify-around sm:h-4/5 top-64 sm:top-4 sm:right-4 sm:w-1/2'>
        <p className='pt-10 text-lg font-bold text-black sm:pt-0 '>
          Summary
        </p>
        <ResultCard backgroundProps='bg-light-red' textProps='text-light-red' category={results} arrPosition={0}>
          <Image src={reaction} alt="reaction" />
        </ResultCard>
        <ResultCard backgroundProps='bg-orangey-yellow' textProps='text-orangey-yellow' category={results} arrPosition={1}>
          <Image src={memory} alt="memory" />
        </ResultCard>
        <ResultCard backgroundProps='bg-green-teal' textProps='text-green-teal' category={results} arrPosition={2}>
          <Image src={verbal} alt="verbal" />
        </ResultCard>
        <ResultCard backgroundProps='bg-cobalt-blue' textProps='text-cobalt-blue' category={results} arrPosition={3}>
          <Image src={visual} alt="visual" />
        </ResultCard>
        <ContinueButton />
      </section>
    </main>
  )
}
