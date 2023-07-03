import React from 'react'
import Navigation from './components/Navigation'
import Loader from './components/Loader'
import List from './components/List'

function Application() {
  return (
    <>
      <Navigation />
      <div className='product_list_container'>
        <div className='container'>
            <List />
            <div className='row mt-4 pb-3'>
                <div className='col-12'>
                    <Loader />
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Application
