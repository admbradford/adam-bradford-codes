import React from 'react';
import FullWidthSection from '../FullWidthSection';

export default class Home extends React.Component {
    render(){
        return(
            <FullWidthSection useContent={true} >
                <div className="home-intro">
                    <div className="intro-image">
                        <img src='images/adam-bradford.jpg' />
                    </div>
                    <div className="intro-text">
                        <h1>I'm Adam Bradford <br/>the Director of Web Development at Highforge.</h1>
                    </div>
                    <div className="intro-text">
                        <p className="lead">Inventing is my passion & automation, my muse. By day I build the Internet, by night I get schwifty</p>
                    </div>
                </div>
            </FullWidthSection>
        )
    }
}
