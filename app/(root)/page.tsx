import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react'

const Home = () => {
  const loggedIn = { firstName: 'Nihal', lastName: 'Bagul', email: 'nihalbagul@gmail.com'};
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
         <HeaderBox
         type="greeting"
         title="Welcome"
         user={loggedIn?.firstName || 'Guest'}
         subtext="Access and manage your account and transactions effeciently"
         />
         <TotalBalanceBox
         accounts={[]}
         totalBanks={1}
         totalCurrentBalance={1250.35}
         />
        </header>
        RECENT TRANSACTIONS
        </div>
         <RightSidebar
           user={loggedIn}
           transactions={[]}
            banks={[{currentBalance:1000.00},{currentBalance:1000.00}]}
         />
    </section>
  )
}

export default Home
