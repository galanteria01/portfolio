import Head from 'next/head'
import ThemeToggle from '../theme/ThemeToggle'
import Lottie from 'react-lottie'
import * as animationData from '../assets/lottie/home.json'
import { FaGithub } from 'react-icons/fa'
import Link from 'next/link'
import { motion } from 'framer-motion'

const url = (name, wrap = false) =>
  `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`

export default function Home() {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const hello = [
    'Hello,',
    "Hola!",
    "Bonjour!",
    "Ciao!",
  ]

  const container = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 2,
        staggerDirection: -1,
      }
    }
  }

  return (
    <div className='h-screen bg-purple dark:bg-gray'>
      <Head>
        <title>Shoury Sharma</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <motion.main
        tial={{ y: -800 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", bounce: 0.25 }}
        style={{ backgroundImage: url('stars', true), backgroundSize: 'cover' }}
        className='py-6 md:py-12 px-12 md:px-24 flex flex-col justify-between h-screen'
      >
        <div className='flex justify-end items-center'>
          <Link target='_blank' href='https://drive.google.com/file/d/1XS1kpr2-zcpfWly0wPnphI_RyVwTqKQt/view?usp=sharing'>
            <button className='bg-white text-purple dark:text-gray rounded font-semibold py-2 px-4 mx-4'>Resume</button>
          </Link>
          <ThemeToggle />
        </div>
        <div className='flex md:justify-between'>
          <div>
            <p className='text-white text-2xl md:text-4xl py-8 font-semibold my-8'>
              Hello,
            </p>
            <p className='text-white text-4xl md:text-6xl font-bold my-4'>I&apos;m</p>
            <p className='text-white text-4xl md:text-6xl font-bold my-4'>Shoury Sharma</p>
            <p className='text-gray-dark text-4xl md:text-6xl font-semibold my-4'>Software Developer</p>
          </div>
          <div className='hidden md:block'>
            <Lottie
              options={defaultOptions}
              height={500}
            />
          </div>
        </div>
        <div className='flex flex-col md:flex-row justify-between items-center'>
          <Link href='/more'>
            <button className='bg-white font-semibold text-purple dark:text-gray rounded py-2 px-4'>Know More</button>
          </Link>
          <div className='flex items-center'>
            <p className='text-white font-semibold mt-4 md:mt-0'>Find my work on</p>
            <a href="https://github.com/galanteria01">
              <FaGithub className='text-white ml-2 text-2xl' />
            </a>
          </div>
        </div>
      </motion.main>

      <footer>

      </footer>
    </div>
  )
}
