import React from 'react';
import Title from 'react-title-component';
import FullWidthSection from '../FullWidthSection';

export default class Bio extends React.Component {

    render() {
        return(
            <div>
                <Title render="Adam Bradford's Bio" />
                <FullWidthSection useContent={true}>
                    <h1>Bio</h1>
                </FullWidthSection>
            </div>
        );
    }

}
