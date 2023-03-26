import React from 'react'

const HomePage = ({user}) => {
  return (
    <div>Session of : {user.email} <br />
          started At : {new Date().toString()}</div>
  )
}

export default HomePage