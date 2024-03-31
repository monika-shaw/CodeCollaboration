import React from 'react'
import AceEditor from 'react-ace'

function Room() {
  return (
    <div>
      <div className='roomSideBar'>
        <div className='roomsidearWrapper'>
          <div className='languageFieldWrapper'>
            <select className='languageField' name='language' id='language'></select>
          </div>
          <div className='languageFieldWrapper'>
            <select className='languageField' name='language' id='language'></select>
          </div>
          <p>Connected Users:</p>
          <div className='roomSidebarUsers'>

          </div>

          <button>Copy Room Id</button>
          <button>Leave Room</button>
        </div>
      </div>
      <AceEditor
        placeholder='Write your code here'
      />
    </div>
  )
}

export default Room