'use client';
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { FormEvent } from 'react'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const handleSubmit = async (event: FormEvent) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault()

    console.log("invoke api")

    // // Cast the event target to an html form
    // const form = event.target as HTMLFormElement

    // // Get data from the form.
    // const data = {
    //   first: form.first.value as string,
    //   last: form.last.value as string,
    // }

    // // Send the form data to our API and get a response.
    // const response = await fetch('/api/form', {
    //   // Body of the request is the JSON data we created above.
    //   body: JSON.stringify(data),
    //   // Tell the server we're sending JSON.
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   // The method is POST because we are sending data.
    //   method: 'POST',
    // })

    // // Get the response data from server as JSON.
    // // If server returns the name submitted, that means the form works.
    // const result = await response.json()
    // alert(`Is this your full name: ${result.data}`)
  }

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div className='container'>
          <div className='header'>
            <label>Host My Contract</label>
          </div>
          <div className='formSection'>
            <form onSubmit={handleSubmit} className='solidityForm'>
              <div className='addressSection formRow'>
                <div className='formLabel'>
                  <label htmlFor="contractAddres">Address</label> 
                </div>
                <div className='formInput'>
                  <input type="text" id="contractAddres" name="contractAddres" className='contractAddress' required />   
                </div>                                          
              </div>
              <div className='codeSection formRow'>
                <div className='formLabel'>
                  <label htmlFor="contractCode">Smart Contract Code:</label>   
                </div>
                <div className='formInput'>
                  <textarea name="contractCode" id="contractCode" className='contractCode' rows={500} cols={200} required/>
                </div>             
                
              </div>
              <div className='submitSection formRow'>
                <div className='formLabel'>
                  <></>
                </div>
                <div className='formInput'>
                  <button type="submit" className='submit'>Host</button>
                </div>
              </div>                           
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}
