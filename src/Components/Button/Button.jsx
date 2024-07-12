import React from 'react'

const Button = (props) => {
  return (
    <div>
        <button className='text-xl border-2 px-6 pb-3 pt-2 rounded-full'>{props.name}</button>
    </div>
  )
}

export default Button