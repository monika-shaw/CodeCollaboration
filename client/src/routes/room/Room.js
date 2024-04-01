import React from 'react'
import AceEditor from 'react-ace'

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-typescript";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-yaml";
import "ace-builds/src-noconflict/mode-golang";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/mode-csharp";
import "ace-builds/src-noconflict/mode-c_cpp";

function Room() {

  const copyToClipBoard = () => {

  }
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

          <button onClick={copyToClipBoard}>Copy Room Id</button>
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