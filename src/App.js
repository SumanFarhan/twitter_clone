import React from 'react'
import Sidebar from './Sidebar/Sidebar'
import Feed from './Feed/Feed'
import Widgets from './Widgets/Widgets'


const App = () => {
  return (
    <>
      <div className='app'>
        {/*SIDE BAR*/}
        <Sidebar />

        {/*FEED*/}
        <Feed />

        {/*WIDGETS*/}
          <Widgets/>
      </div>
    </>
  )
}

export default App