import '../css/ThreeTails.css';

function ThreeTailsCard(props) {
    return (
        <div className='ThreeTails-card'>
            <img src={props.image} alt="tools" className="ThreeTails-card-image" />
            <h2>{props.header}</h2>
            <p>{props.body}</p>
        </div>
    );
}

export default ThreeTailsCard;