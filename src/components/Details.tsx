import DetailsTile from './DetailsTile';

import '../styles/details.css';

const Details = () => {
    return (
        <div className="Details">
            <DetailsTile detail="Humidity" value="68%" />
            <DetailsTile detail="Wind" value="9km/h" />
        </div>
    )
}

export default Details;