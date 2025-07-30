import SwiperSlider from '@/components/SwiperSlider';
import GioiThieu from '@/components/GioiThieu';
import UuDiem from '@/components/UuDiem';
import TaiSao from '@/components/TaiSao';
import ChuongTrinhDaoTao from '@/components/ChuongTrinhDaoTao';
import ThongTinGiangVien from '@/components/ThongTinGiangVien';
import CamNhan from '@/components/CamNhan';
import HinhAnhTaiTrungTam from '@/components/HinhAnhTaiTrungTam';
import TinTuc from '@/components/TinTuc';

function Home() {
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
            <TinTuc />
        </>
    );
}

export default Home;
