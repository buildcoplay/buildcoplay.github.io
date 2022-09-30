import ThreeTailsCard from './ThreeTailsCard';
import * as Locale from '../strings/index';
import '../css/ThreeTails.css';
import ToolsLogo from '../svgs/tools.svg';
import HelpKidsLogo from '../svgs/help_kids.svg';
import HeartLogo from '../svgs/video_game_heart.svg';

function ThreeTails() {
    return (
        <div className='ThreeTails-container'>
            {/* <h1>{Locale.ThreeTailsHeader}</h1> */}
            <div className='ThreeTails-card-container'>
                <ThreeTailsCard image={ToolsLogo} header={Locale.ThreeTailsToolsHeader} body={Locale.ThreeTailsToolsBody} />
                <ThreeTailsCard image={HelpKidsLogo} header={Locale.ThreeTailsKidsHeader} body={Locale.ThreeTailsKidsBody} />
                <ThreeTailsCard image={HeartLogo} header={Locale.ThreeTailsHospitalHeader} body={Locale.ThreeTailsHospitalBody} />
            </div>

        </div>

    );
}

export default ThreeTails;