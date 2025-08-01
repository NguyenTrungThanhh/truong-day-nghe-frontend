import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import config from '@/configs';
import { assets } from '@/assets/assets';

function GioiThieu() {
    return (
        <>
            <div className="w-full bg-[#f4f4f4] py-4">
                <div className="w-[80%] mx-auto">
                    <div className="flex items-center gap-4 text-sm font-medium">
                        <Link to={config.routes.home}>
                            <h1>Trang chủ</h1>
                        </Link>
                        <FontAwesomeIcon icon={faAngleRight} size="xs" className="mt-1" />
                        <h1 className="text-primary-blueOne">Giới thiệu</h1>
                    </div>
                </div>
            </div>
            <div className="w-[80%] mx-auto my-8">
                <div className="flex flex-col gap-4">
                    <h1 className="text-2xl font-bold text-primary-blueOne">Trung tâm đào tạo lái xe LOD.</h1>
                    <p>
                        Trung tâm đào tạo lái xe LOD được xây dựng trên tổng diện tích 6,2 ha với 10 khối nhà: tổng diện
                        tích sàn 18.000m2, 1 sân tập lái xe, sân thể thao. Tổng giá trị đầu tư trên 300 tỷ đồng. Trường
                        đã hoàn thành năm 2010.
                    </p>
                    <p>
                        Hiện nay đời sống kinh tế người dân Việt Nam ngày càng phát triển, xã hội phát triển kéo theo
                        chất lượng cuộc sống ngày càng nâng cao và đảm bảo. Cũng vì vậy nhu cầu mua xe ô tô và học lái
                        xe ô tô ngày càng nhiều. Để đáp ứng nhu cầu học lái xe ô tô của người dân, rất nhiều Trung tâm
                        dạy đào tạo lái xe mở ra để hỗ trợ học viên đăng ký, song song với điều đó thì chất lượng dạy
                        học và độ uy tín cũng là mối băn khoăn và lo lắng của rất nhiều người khi đăng ký học lái xe.
                    </p>
                    <p>
                        Bạn có biết, Quyết định của Bộ trưởng Bộ GTVT số 966/QĐ-BGTVT ngày 31/3/2014 về việc phê duyệt
                        quy hoạch cơ sở đào tạo lái xe đến năm 2020, định hướng đến 2030 với mục tiêu trong giai đoạn
                        2016 – 2020 đáp ứng nhu cầu đào tạo khoảng 3 triệu học viên. Năm 2013 trên địa bàn TP Hà Nội có
                        46 cơ sở đào tạo lái xe, theo quy hoạch bổ sung đến 2015 thêm 4 cơ sở và 2020 tăng tổng số lên
                        54 cơ sở đào tạo.
                    </p>
                    <p>
                        Chính vì vậy để đảm bảo được quyền lợi của học viên và đảm bảo được nhu cầu đó Trung tâm đào tạo
                        lái xe LOD được thành lập. Với hơn 10 năm kinh nghiệm trong lĩnh vực đào tạo lái xe, chúng tôi
                        Trung tâm LOD thấu hiểu và quan tâm những lo lắng của các bạn với phương châm “Đào tạo không
                        phải cố gắng để lấy 1 tấm bằng lái xe mà còn là chất lượng, uy tín, tính mạng, sức khỏe của học
                        viên và cả người thân của họ khi tham gia giao thông”. LOD càng ngày càng khẳng định được vị thế
                        của một trung tâm dạy và học lái xe hàng đầu tại Hà Nội.
                    </p>
                    <h1 className="text-xl font-bold text-primary-blueOne">
                        Trung tâm lái xe LOD đào tạo các hạng lái xe B1, B2, C, D, E, A1,…
                    </h1>
                    <p>
                        Hiện nay Trung tâm LOD đang đứng hàng đầu tại Hà Nội về số lượng học viên đăng ký và đảm bảo
                        được chất lượng đầu ra của các khóa học với tỉ lệ đỗ ngay lần đầu lên tới 90%. Số lượng học viên
                        đăng ký mỗi năm lên tới 5000 học viên trung tâm ngày càng được học viên quan tâm và theo học,
                        khẳng định được thương hiệu để trở thành một trung tâm đào tạo Uy Tín nhất Hà Nội.
                    </p>
                    <p>
                        Là đơn vị đào tạo trực thuộc Sở giao thông vận tải Hà Nội, Trung tâm đào tạo lái xe LOD có chức
                        năng, nhiệm vụ tổ chức, đào tạo nghề lái xe ôtô và môtô các hạng : A1, A2, B1, B2, C, D và E.
                        Trải qua gần 15 năm hoạt động trong lĩnh vực đào tạo lái xe, Trung tâm đã tạo được thương hiệu
                        uy tín và trở thành đơn vị đào tạo lái xe số 1 Hà Nội.
                    </p>
                    <img src={assets.gioiThieu} alt="" className="rounded-xl" />
                    <p>
                        Xác định được lấy học viên làm mục tiêu và quy trình đào tạo đặt lên hàng đầu. Trung tâm LOD đã
                        khảo sát và đưa ra một quy trình giảng dạy chuẩn nhất và đã được xác thực bởi hàng ngàn học viên
                        theo học.
                    </p>
                    <h1 className="text-xl font-bold text-primary-blueOne">
                        LOD là một trong số ít trung tâm sở hữu sân riêng.
                    </h1>
                    <p>
                        Sân của Trung tâm đào tạo lái xe LOD nằm ở địa chỉ: ..., ngoài ra LOD có hệ thống sân tập lái xe
                        ở khắp khu vực Hà Nội
                    </p>
                    <img src={assets.gioiThieu} alt="" className="rounded-xl" />
                    <p>
                        Với số lượng các Trung tâm đào tạo lái xe LOD nhiều như hiện nay, với những lời quảng cáo về
                        việc dạy và học hấp dẫn nhằm mục đích “câu khách” và….bạn đang băn khoăn với lựa chọn một địa
                        chỉ tin cậy để theo học. Trung tâm đào tạo lái xe LOD sẽ giúp bạn và không làm bạn thất vọng khi
                        lựa chọn chúng tôi.
                    </p>
                </div>
            </div>
        </>
    );
}

export default GioiThieu;
