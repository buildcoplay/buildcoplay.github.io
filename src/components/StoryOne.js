import * as Locale from '../strings/index';
import '../css/Story.css';
import FriendzoneImg from "../images/friendzone3x.png"

function StoryOne(image, title, content) {
    return (
        <div className='Story-container'>
            <div className='Story-content-container'>
                <img src={FriendzoneImg} alt="Friendzone" className="Story-image" />
                <div className='Story-body'>
                    <h2>{Locale.FriendZoneHeader}</h2>
                    <p>{Locale.FriendZoneBody}</p>
                    <ul>
                        <li>{Locale.FriendZoneItem1}</li>
                        <li>{Locale.FriendZoneItem2}</li>
                        <li>{Locale.FriendZoneItem3}</li>
                        <li>{Locale.FriendZoneItem4}</li>
                    </ul>
                </div>
            </div>

        </div>

    );
}

export default StoryOne;