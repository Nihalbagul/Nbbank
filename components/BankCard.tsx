import { formatAmount } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const BankCard = ({ account,userName,showBalance = true}:CredentialsContainer) => {
  return (
    <div className="flex flex-col">
      <Link href="/" className="bank-card">
        <div className="bank-card_content">
            <div>
                <h1 className="text-16 font-semibold text-white">
                    {account.name ||userName}
                </h1>
                <p className="font-ibm-plex-serif font-black text-white">
                    {formatAmount(account.currentBalance)}
                </p>
            </div>
            <article className="flex flex-col gap-2">
             <div>
                <h1 className="text-12 font-semibold text-white">
                    {userName}
                </h1>
                <h1 className="text-12 font-semibold text-white">
                   •• / ••
                </h1> 
                <p className="text-14 font-semibold tracking-[1.1px] text-white">
                  •••• •••• •••• <span className="text-16">1234</span> 
                    </p>  
            </div>   
            </article>
        </div>
        <div className="bank-card_icon">
            <Image
              src='/icons/Paypass.svg'
              width={20}
              height={24}
              alt="paypass" 
            />
            <Image
              src='/icons/mastercard.svg'
              width={45}
              height={32}
              alt="mastercard" 
              className='ml-5'
            />
            <Image
              src='/icons/lines.svg'
              width={316}
              height={190}
              alt="lines" 
              className="absolute top left-0"
            />
        </div>
      </Link>
    </div>
  )
}

export default BankCard
