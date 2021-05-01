import React from 'react'
import Information from '../section/information/Information'

function About() {
    return (
        <div>
            <div className="box">
                <div className="box__header">
                    <div className="box__header-title">
                        <span>About</span> Us
                    </div>
                </div>
                <div className="box__body">
                    <Information/>
                </div>
            </div>
        </div>
    )
}

export default About
