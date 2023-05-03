import Head from 'next/head';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Footer from '@/components/Footer';

export default function Home() {
  return (
      <main className='flex flex-col w-full'>
        <Hero />
        <Features />
        <Footer />
      </main>
  )
}
