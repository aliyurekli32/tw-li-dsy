import type { NextPage } from 'next'
import Head from 'next/head'
import Github from '../helper/Github.png';
import { styled } from '@linaria/react'
import { css } from '@linaria/core'
import Image from 'next/image'

const Border =css`
border: 2px solid red;
`;

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='-mt-60'>
        <Image src={Github} alt='Github' width={500} height={200} />
      </div>
      <p className='text-9xl font-extrabold'>
        USERS
      </p>

      

      
    </>
  )
}

export default Home
