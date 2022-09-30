import * as Locale from '../strings/index';
import CoPlayVRImg from '../images/CoPlayVR.png';
import '../css/Story.css';

function StoryTwo(image, title, content) {
    return (
        <div className='Story-container'>
            <div className='Story-content-container'>
                <div className='Story-body'>
                    <h2>{Locale.CoPlayVRHeader}</h2>
                    <p>{Locale.CoPlayVRBody1}</p>
                    <p>{Locale.CoPlayVRBody2}</p>
                    <p>{Locale.CoPlayVRBody3}</p>
                </div>
                <img src={CoPlayVRImg} alt="tools" className="Story-image" />
            </div>
        </div>
    );
}

export default StoryTwo;