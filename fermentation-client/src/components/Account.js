import React from 'react'
import composedAuthHOC from '../HOCs/authHOC'

const Account = (params) => {
  return(
    <div>
      This is your Account Page
    </div>
  )
}

export default composedAuthHOC(Account)
