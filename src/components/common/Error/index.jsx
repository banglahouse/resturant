import React from 'react'
import'./styles.css'
import pistachios from '../Error/pistachios.jpg'

function Error() {
    return (<main className='body'>
           <div >
  <title>The page you were looking for doesn't exist (404)</title>
</div>
<div className="dialog">
      <h1 className='heading'>Ah, nuts!</h1>
      <p className='paragraph'>We were unable to find the page you were looking for, but we'll get cracking on the problem.</p>
    </div>
    <div>
    <img className="image" src={pistachios} alt="my-img" />
    </div>
    </main>

      
    )
}

export default Error