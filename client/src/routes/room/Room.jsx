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


import "ace-builds/src-noconflict/keybinding-emacs";
import "ace-builds/src-noconflict/keybinding-vim";

import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/ext-searchbox";


function Room() {

    const languageAvailable = ["javascript", "typescript", "java", "python", "yaml", "css", "golang", "c++", "css", "html"]
    const codeKeyBinding = ["default", "emacs", "vim"]
    const copyToClipBoard = () => {

    }
    return (
        <div>
            <div className='roomSideBar'>
                <div className='roomsidearWrapper'>
                    <div className='languageFieldWrapper'>
                        <select className='languageField' name='language' id='language'>
                            {languageAvailable.map((lang)=>(
                                <option value={lang} key={lang}>{lang}</option>
                            ))}
                        </select>
                    </div>
                    <div className='languageFieldWrapper'>
                        <select className='languageField' name='language' id='language'>
                        {codeKeyBinding.map((code)=>(
                                <option value={code} key={code}>{code}</option>
                            ))}
                        </select>
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
                className='roomCodeEditor'
                mode='javascript'
                theme='monokai'
                name='collabEditor'
                showPrintMargin={true}
                showGutter={true}
                tabSize={4}
                editorProps={{
                    $blockScrolling:true
                }}
            />
        </div>
    )
}

export default Room