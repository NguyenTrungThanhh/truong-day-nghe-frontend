import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

// eslint-disable-next-line react-refresh/only-export-components
export const TruongDayngheContext = createContext();

const TruongDayngheContextProvider = ({ children }) => {
    const url = import.meta.env.VITE_API_URL || 'http://localhost:4000';

    const [tinTucData, setTinTucData] = useState([]);

    useEffect(() => {
        getTinTucData();
    }, []);

    // useEffect(() => {
    //     const combined = [
    //         ...tinTucData.map((item) => ({ ...item, type: 'TinTuc' })),
    //         ...tuyenDungData.map((item) => ({ ...item, type: 'TuyenDung' })),
    //     ];
    //     setCombinedData(shuffleArray(combined));
    // }, [tinTucData, tuyenDungData]);

    const getTinTucData = async () => {
        try {
            const response = await axios.get(`${url}/api/v1/client/TinTuc`);
            setTinTucData(response.data.news);
        } catch (error) {
            console.log(error);
        }
    };

    // const shuffleArray = (array) => {
    //     for (let i = array.length - 1; i > 0; i--) {
    //         const j = Math.floor(Math.random() * (i + 1));
    //         [array[i], array[j]] = [array[j], array[i]];
    //     }
    //     return array;
    // };

    const contextValue = {
        tinTucData,
    };

    return <TruongDayngheContext.Provider value={contextValue}>{children}</TruongDayngheContext.Provider>;
};

export default TruongDayngheContextProvider;
