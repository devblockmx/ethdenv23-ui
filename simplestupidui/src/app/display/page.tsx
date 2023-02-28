'use client';
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { FormEvent } from 'react'
import styles from './display.module.css'
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })

export default function Display(params: Params) {

    const router = useRouter()
    const { cid } = router.query
    
    return(
        <main className={styles.main}>
            <div className={styles.description}>
                <div className='container'>
                    <div className='header'>
                        <label>Display: {cid} </label>  
                    </div>
                </div>      
            </div>
        </main>
    )
}

interface Params{
    id: string
}

// export async function getStaticPaths() {
//     const paths = '*';
//     return {
//       paths,
//       fallback: false,
//     };
//   }

// export async function getStaticProps(params: Params) {
//     const contractData = params.id;
//     return {
//       props: {
//         contractData,
//       },
//     };
//   }