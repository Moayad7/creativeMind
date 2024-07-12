import React from 'react'
import Button from '../Button/Button'

const Card = () => {
  return (
    <div className='p-6'>
        <div>
            <div className='grid text-[#fff] gap-8'>
                <h3 className='font-bold text-xl md:text-3xl'>Card Title</h3>
                <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt repudiandae omnis eum? Minus fugiat magni mollitia modi aspernatur autem quos.</p>
                <Button name='more....' />
            </div>
        </div>
    </div>
  )
}

export default Card