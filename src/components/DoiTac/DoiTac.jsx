import { assets } from '@/assets/assets';

const partnersSmall = [
    { img: assets.doiTac1, url: 'https://apqgroup.vn/' },
    { img: assets.doiTac2, url: 'https://hka.com.vn/' },
];

const partnersLarge = [
    { img: assets.doiTac3, url: 'https://hka.com.vn/' },
    { img: assets.doiTac4, url: 'https://hka.com.vn/' },
];

function DoiTac() {
    return (
        <div className="w-full bg-primary-blueOne py-16">
            <div className="w-[90%] lg:w-[80%] mx-auto">
                {/* Title */}
                <div className="flex flex-col lg:flex-row justify-center items-center gap-4 mb-8 text-center">
                    <hr className="hidden lg:block w-[43%] border-white" />
                    <h1 className="text-2xl lg:text-3xl font-bold text-white uppercase">Đối tác</h1>
                    <hr className="hidden lg:block w-[43%] border-white" />
                </div>
                <div className="flex justify-center items-center gap-6 mb-12 flex-wrap">
                    {partnersSmall.map((partner, index) => (
                        <a
                            key={index}
                            href={partner.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-[45%] h-[120px] flex justify-center items-center overflow-hidden rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 border border-white/20"
                        >
                            <img
                                src={partner.img}
                                alt={`partner-${index + 1}`}
                                className="max-w-full max-h-full object-contain"
                            />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default DoiTac;
