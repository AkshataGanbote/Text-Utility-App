import React, {useState} from 'react';

export default function About() {

    // Creating state objects

    // For Changing Colors 
    const [modeStyle, setModeStyle] = useState({
        color : 'black',
        backgroundColor : 'white',
    })

    // For Changing Button Text
    const [modeName, setModeName] = useState("Enable Dark Mode");

    const toggleStyle = () =>{
        if(modeStyle.color === 'black'){
            setModeStyle({
                color : 'white',
                backgroundColor : 'black'
            })
            setModeName("Enable Light Mode");
        }

        else{
            setModeStyle({
                color : 'black',
                backgroundColor : 'white'
            })
            setModeName("Enable Dark Mode");
        }
    }

    return (
        <div style={modeStyle}>
            <h1 className='my-3'>About Text Utils</h1>
            <div className="accordion my-3" id="accordionExample">
                {/* 1 */}
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={modeStyle}>
                        Accordion Item #1
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={modeStyle}>
                        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                    </div>
                </div>

                {/* 2 */}
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={modeStyle}>
                        Accordion Item #2
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={modeStyle}>
                        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                    </div>
                </div>

                {/* 3 */}
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={modeStyle}>
                        Accordion Item #3
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={modeStyle}>
                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                    </div>
                </div>
            </div>

            <div>
                <button type="submit" className="btn btn-primary" onClick={toggleStyle}>{modeName}</button>
            </div>
        </div>
    )
}
