import React from 'react'

const SkillCard = (props) => {
    const {icons} = props.item
  return (
    <div className='my-2'>
        {icons}
    </div>
  )
}

export default SkillCard