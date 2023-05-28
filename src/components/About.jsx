import React from 'react';

export default function About(props) {

    const changeTheme1 = {
        color : props.theme ==='dark' ? 'white' : 'black',
        backgroundColor : props.theme ==='dark' ? '#222E35' : 'white'
    }
    const changeTheme2 = {
        color : props.theme ==='dark' ? 'white' : 'black',
        backgroundColor : props.theme ==='dark' ? 'rgb(29, 63, 84)' : 'white'
    }

    return (
        <div >
            <h1 className='my-4' 
            style={changeTheme1}>About</h1>

            <div className="accordion" id="accordionExample"  style={{color : props.theme ==='dark' ? 'white' : 'black',
        backgroundColor : props.theme ==='dark' ? '#222E35' : 'white', paddingTop : "15px"}}>
                {/* 1 */}
                <div className="accordion-item" style={changeTheme2}>
                    <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={changeTheme2}>
                        <strong>About Text Utility App</strong>
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={changeTheme1}>
                        Text Utility App is a text to audio converter and can be used to manipulate the text in different ways. In addition, it counts words, characters and also shows average reading time for your text.
                        </div>
                    </div>
                </div>

                {/* 2 */}
                <div className="accordion-item" style={changeTheme1}>
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={changeTheme2}>
                    <strong>Features</strong>
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={changeTheme1}>
                        <li>Reading Texts, PDFs or Ebooks boring? Listen your text with just a click</li>
                        <li>Convert text to Uppercase</li>
                        <li>Convert text to lowercase</li>
                        <li>Capitalize the text</li>
                        <li>Copy text to clipboard</li>
                        <li>Remove extra spaces</li>
                        <li>Get count of words, characters and spaces of entered text</li>
                        <li>Know the average reading time for your text</li>
                    </div>
                    </div>
                </div>

                {/* 3 */}
                <div className="accordion-item" style={changeTheme1}>
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={changeTheme2}>
                    <strong>Compatibility</strong>
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={changeTheme1}>
                        This Text Utility software works in any web browsers such as Google Chrome, Firefox, Internet Explorer, Safari, Opera, Brave,etc. <br></br>
                        It suits to count characters in texts, webpages, ebooks, excel document, pdf document, essays, blogs, etc.
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    )
}
