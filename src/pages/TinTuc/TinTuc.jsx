import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useContext, useEffect, useState } from 'react';
import SidebarMenu from '@/components/SidebarMenu';
import config from '@/configs';
import TinTucItem from '@/components/TinTucItem';
import { TruongDayngheContext } from '@/context/TruongDayngheContext';

function TinTuc() {
    const { tinTucData } = useContext(TruongDayngheContext);

    useEffect(() => {
        document.title = 'Tin tức';
    });

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    const sortedTinTucData = [...tinTucData].sort((a, b) => {
        const parseDate = (str) => {
            const parts = str.split(/[\/\-]/);
            const day = parseInt(parts[0], 10);
            const month = parseInt(parts[1], 10) - 1;
            const year = parseInt(parts[2], 10);
            return new Date(year, month, day);
        };

        return parseDate(b.date) - parseDate(a.date);
    });

    const currentItems = sortedTinTucData.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(sortedTinTucData.length / itemsPerPage);

    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    return (
        <>
            <div className="w-full bg-[#f4f4f4] py-4">
                <div className="w-[80%] mx-auto">
                    <div className="flex items-center gap-4 text-sm font-medium">
                        <Link to={config.routes.home}>
                            <h1>Trang chủ</h1>
                        </Link>
                        <FontAwesomeIcon icon={faAngleRight} size="xs" className="mt-1" />
                        <h1 className="text-primary-blueOne">Tin tức</h1>
                    </div>
                </div>
            </div>
            <div className="w-[80%] mx-auto my-8">
                <h1 className="text-primary-blueOne text-[27px] text-center font-bold uppercase mb-8">Tin tức</h1>

                {/* Responsive layout */}
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 my-8">
                    <div className="w-full lg:w-[75%] flex flex-col gap-8">
                        {currentItems.map((item, index) => (
                            <TinTucItem
                                key={index}
                                slug={item.slug}
                                name={item.name}
                                date={item.date}
                                desc={item.desc}
                                image={item.image}
                            />
                        ))}

                        <div className="flex justify-center items-center mt-6">
                            {currentPage > 1 && (
                                <button
                                    onClick={prevPage}
                                    className="bg-white text-primary-blueOne w-10 h-9 rounded-lg border hover:bg-primary-blueOne hover:text-white duration-500"
                                >
                                    <FontAwesomeIcon icon={faChevronLeft} />
                                </button>
                            )}

                            <div className="flex gap-2 mx-2">
                                {pageNumbers.map((number) => (
                                    <button
                                        key={number}
                                        onClick={() => setCurrentPage(number)}
                                        className={`w-10 h-9 rounded-lg hover:bg-primary-blueOne font-medium hover:text-white duration-500 ${
                                            currentPage === number
                                                ? 'bg-primary-blueOne border border-transparent text-white'
                                                : 'bg-white border border-[#e5e5e5]'
                                        }`}
                                    >
                                        {number}
                                    </button>
                                ))}
                            </div>

                            {currentPage < totalPages && (
                                <button
                                    onClick={nextPage}
                                    className="bg-white text-primary-blueOne w-10 h-9 rounded-lg border hover:bg-primary-blueOne hover:text-white duration-500"
                                >
                                    <FontAwesomeIcon icon={faChevronRight} />
                                </button>
                            )}
                        </div>
                    </div>

                    <div className="w-full lg:w-[25%]">
                        <SidebarMenu />
                    </div>
                </div>
            </div>
        </>
    );
}

export default TinTuc;
