import React from 'react';
import FullWidthSection from '../FullWidthSection';

export default class Home extends React.Component {
    render(){
        const styles = {
            half:{
                width: '50%',
                float: 'left',
                verticalAlign: 'top',
            },
            image: {
                textAlign: 'center',
            },
            text: {
                fontSize: 20,
                fontFamily: 'Droid Serif, serif',
            },
            h1: {
                fontSize: 40,
                lineHeight: 1.25,
                marginBottom: 20,
            },
            lead: {
                fontSize: 25,
                lineHeight: 1.5,
            }
        };
        styles.image = Object.assign({}, styles.image, styles.half);
        styles.text = Object.assign({}, styles.text, styles.half);

        return(
            <FullWidthSection useContent={true} >
                <div style={styles.image}>
                    <img src='images/adam-bradford.jpg' />
                </div>
                <div style={styles.text}>
                    <h1 style={styles.h1}>I'm Adam Bradford <br/>the Director of Web Development at Highforge.</h1>
                    <p style={styles.lead}>Inventing is my passion & automation, my muse. By day I build the Internet, by night I get schwifty</p>
                </div>
            </FullWidthSection>
        )
    }
}
