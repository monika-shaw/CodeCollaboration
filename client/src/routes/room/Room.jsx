import AceEditor from 'react-ace'
import toast, { Toaster } from 'react-hot-toast';
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


import "ace-builds/src-noconflict/keybinding-emacs";
import "ace-builds/src-noconflict/keybinding-vim";

import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/ext-searchbox";
import { useState } from 'react';
import { useParams } from 'react-router-dom';


function Room() {
    const { roomId } = useParams()
    const languageAvailable = ["javascript", "typescript", "java", "python", "yaml", "css", "golang", "c++", "css", "html"]
    const codeKeyBinding = ["default", "emacs", "vim"]

    const [codeKey, setcodeKey] = useState(undefined)

    const [language, setlanguage] = useState('javascript')

    const [fetchUsers, setfetchUsers] = useState(()=>["username","sam"])

    const handleCodeKey = (event) => {
        setcodeKey(event.target.value === 'default' ? undefined : event.target.value)
    }

    const handleLanguage = (event) => {
        setlanguage(event.target.value)
    }
    const copyToClipBoard = (text) => {
        try {
            navigator.clipboard.writeText(text)
            toast.success("Room ID copied")
        }
        catch (err) {
            console.log(err);
        }
    }
    return (
        <div>
            <div className='roomSideBar'>
                <div className='roomsidearWrapper'>
                    <div className='languageFieldWrapper'>
                        <select className='languageField' value={language} name='language' id='language' onChange={(event) => handleLanguage(event)}>
                            {languageAvailable.map((lang) => (
                                <option value={lang} key={lang}>{lang}</option>
                            ))}
                        </select>
                    </div>
                    <div className='languageFieldWrapper'>
                        <select className='languageField' value={codeKey} name='language' id='language' onChange={(event) => handleCodeKey(event)}>
                            {codeKeyBinding.map((code) => (
                                <option value={code} key={code}>{code}</option>
                            ))}
                        </select>
                    </div>
                    <p>Connected Users:</p>
                    <div className='roomSidebarUsers'>
                                {fetchUsers.map((eachUser)=>(
                                    <div key={eachUser}>
                                        <div>avtar</div>
                                        <div>name</div>
                                    </div>
                                ))}
                    </div>

                    <button onClick={() => copyToClipBoard(roomId)}>Copy Room Id</button>
                    <button>Leave Room</button>
                </div>
            </div>
            <AceEditor
                placeholder='Write your code here'
                className='roomCodeEditor'
                mode={language}
                keyboardHandler={codeKey}
                theme='monokai'
                name='collabEditor'
                showPrintMargin={true}
                showGutter={true}
                tabSize={4}
                editorProps={{
                    $blockScrolling: true
                }}
            />
            <Toaster />
        </div>
    )
}

export default Room