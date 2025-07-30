import config from '@/configs';
import { Link } from 'react-router-dom';

function TinTucItem(props) {
    return (
        <div className="group overflow-hidden transition-all duration-300 mb-8">
            <div className="overflow-hidden rounded-xl">
                <Link to={`${config.routes.TinTuc}/${props.slug}`}>
                    <img
                        src={props.image}
                        alt=""
                        className="w-full h-auto object-cover rounded-xl group-hover:scale-110 duration-300"
                    />
                </Link>
            </div>
            <div className="mt-4">
                <Link to={`${config.routes.TinTuc}/${props.slug}`}>
                    <h1 className="text-lg font-semibold text-primary-blueOne line-clamp-2">{props.name}</h1>
                </Link>
                <p className="mt-2 text-sm">{props.date}</p>
            </div>
        </div>
    );
}

export default TinTucItem;
