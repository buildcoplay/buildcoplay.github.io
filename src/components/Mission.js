import '../css/Mission.css';
import * as Locale from '..//strings/index';

function Mission() {
    return (
        <div id="mission" className='Mission-container'>
            <h1>{Locale.MissionHeader}</h1>
                <p>
                    {Locale.MissionBody}
                </p>
        </div>
    );
}

export default Mission;