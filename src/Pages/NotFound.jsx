import React from 'react'

const NotFound = () => {
  return (
    <div className='not-found'>
        <p className='page-title'><span>Home /</span> 404 Error</p>
        <div className='not-found-flex'>
            <h1>
            404 Not Found
            </h1>
            <p>
            Your visited page not found. You may go home page.
            </p>
            <button>Back to home page</button>
        </div>
    </div>
  )
}

export default NotFound
