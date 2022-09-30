import * as Locale from '../strings/index';
import "..//css//Footer.css";

function StoryOne(image, title, content) {
    return (
        <div className='Footer-container'>
            <hr className='Footer-divider'></hr>
            <div className='Footer-child'>{Locale.FooterBasedIn}</div>
            <div className='Footer-child'>{Locale.FooterCopyright}</div>
        </div>
    );
}

export default StoryOne;