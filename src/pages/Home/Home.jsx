import { useEffect } from 'react';
import SwiperSlider from '@/components/SwiperSlider';
import GioiThieu from '@/components/GioiThieu';
import UuDiem from '@/components/UuDiem';
import TaiSao from '@/components/TaiSao';
import ChuongTrinhDaoTao from '@/components/ChuongTrinhDaoTao';
import ThongTinGiangVien from '@/components/ThongTinGiangVien';
import CamNhan from '@/components/CamNhan';
import HinhAnhTaiTrungTam from '@/components/HinhAnhTaiTrungTam';
import DoiTac from '@/components/DoiTac';
import TinTuc from '@/components/TinTuc';

function Home() {
    useEffect(() => {
        document.title = 'Công ty cổ phần vận tải oto số 4';
    });

    return (
        <>
            <SwiperSlider />
            <GioiThieu />
            <UuDiem />
            <TaiSao />
            <ChuongTrinhDaoTao />
            <ThongTinGiangVien />
            <CamNhan />
            <HinhAnhTaiTrungTam />
            <DoiTac />
            <TinTuc />
        </>
    );
}

export default Home;
