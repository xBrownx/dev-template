import { memo } from 'react';
import { landingConst as CONST } from './constants'
import { Page } from "../../templates/index.jsx";

function Landing(props) {
    return (
        <Page
            $bgPrimary
            $fullScreen
            $pageRef={props.$pageRef}
        >

        </Page>
    );
}


export default memo(Landing);