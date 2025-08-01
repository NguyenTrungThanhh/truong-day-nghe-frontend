import config from '@/configs';
import { Link } from 'react-router-dom';

function TinTucItem(props) {
    return (
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-center">
            <div className="w-full sm:w-auto">
                <Link to={config.routes.TinTuc + `/${props.slug}`}>
                    <img
                        src={props.image}
                        alt=""
                        className="w-full max-w-[366px] aspect-[16/9] object-cover rounded-xl mx-auto"
                    />
                </Link>
            </div>
            <div className="flex-1">
                <Link to={config.routes.TinTuc + `/${props.slug}`}>
                    <h1 className="font-bold uppercase hover:text-primary-blueOne mb-2 duration-300">{props.name}</h1>
                </Link>
                <p className="text-sm text-gray-500 line-clamp-3 mb-2">{props.date}</p>
                <p className="text-sm line-clamp-3">{props.desc}</p>
            </div>
        </div>
    );
}

export default TinTucItem;
