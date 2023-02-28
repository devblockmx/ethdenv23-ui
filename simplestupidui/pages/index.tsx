'use client';
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { FormEvent } from 'react'
import styles from './page.module.css'
import { ethers } from "ethers";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const handleSubmit = async (event: FormEvent) => {
    const form = event.target as HTMLFormElement

    if(form.contractAddress.length == 0 || form.contractAbi.length==0){
      // Stop the form from submitting and refreshing the page.
      event.preventDefault();

      //show error
      alert("Please provide address and ABI");

      return;
    }

    console.log("invoke api")

    // // Cast the event target to an html form

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

  const abiPlaceholder = `{
    "_format": "hh-sol-artifact-1",
    "contractName": "GregToken",
    "sourceName": "contracts/GregToken.sol",
    "abi": [
      {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        ...etc`;

  const gregTokenAbiAsString = `{
    "_format": "hh-sol-artifact-1",
    "contractName": "GregToken",
    "sourceName": "contracts/GregToken.sol",
    "abi": [
      {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "spender",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
          }
        ],
        "name": "Approval",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
          }
        ],
        "name": "Transfer",
        "type": "event"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "spender",
            "type": "address"
          }
        ],
        "name": "allowance",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "spender",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "approve",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "account",
            "type": "address"
          }
        ],
        "name": "balanceOf",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "decimals",
        "outputs": [
          {
            "internalType": "uint8",
            "name": "",
            "type": "uint8"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "spender",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "subtractedValue",
            "type": "uint256"
          }
        ],
        "name": "decreaseAllowance",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "spender",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "addedValue",
            "type": "uint256"
          }
        ],
        "name": "increaseAllowance",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "name",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "symbol",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "transfer",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "transferFrom",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ],
    "bytecode": "removed",
    "deployedBytecode": "removed",
    "linkReferences": {},
    "deployedLinkReferences": {}
  }`;


  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div className='container'>
          <div className='header'>
            <label>Host My Contract</label>
          </div>
          <div className='formSection'>
            <form onSubmit={handleSubmit} className='solidityForm' method='post' action='/contracts/new'>
              <div className='addressSection formRow'>
                <div className='formLabel'>
                  <label htmlFor="contractAddress">Contract Deployment Address</label> 
                </div>
                <div className='formInput'>
                  <input type="text" id="contractAddress" name="contractAddres" className='contractAddress' required minLength="5" size="52" placeholder='0xa4e4745a1066ac0faebe4e005793b172c69cc9c4' />
                </div>
              </div>
              <div className='codeSection formRow'>
                <div className='formLabel'>
                  <label htmlFor="contractAbi">Contract ABI:</label>   
                </div>
                <div className='formInput'>
                  <textarea name="contractAbi" id="contractAbi" className='contractAbi' rows={50} cols={750} required placeholder={abiPlaceholder} />
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