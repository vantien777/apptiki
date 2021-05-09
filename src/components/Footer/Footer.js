import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="grid-container">
                    <div className="grid-row" style={{marginBottom: '30px'}}>
                        Footer đang được cập nhật, xin quý khách vui lòng quay lại sau. Xin cảm ơn.
                    </div>
                    <div className="grid-row footer__information">
                        <div className="grid-col grid-col10-xl-2">
                            <div className="footer__information-item">
                                <h4>
                                    HỖ TRỢ KHÁCH HÀNG
                                </h4>
                                <Link to="#" className="footer__information-item-link">
                                    Các câu hỏi thường gặp
                                </Link>
                                <Link to="#" className="footer__information-item-link">
                                    Gửi yêu cầu hỗ trợ
                                </Link>
                                <Link to="#" className="footer__information-item-link">
                                    Hướng dẫn đặt hàng
                                </Link>
                                <Link to="#" className="footer__information-item-link">
                                    Phương thức vận chuyển
                                </Link>
                                <Link to="#" className="footer__information-item-link">
                                    Chính sách đổi trả
                                </Link>
                                <Link to="#" className="footer__information-item-link">
                                    Hướng dẫn trả góp
                                </Link>
                                <Link to="#" className="footer__information-item-link">
                                    Chính sách hàng nhập khẩu
                                </Link>
                                <Link to="#" className="footer__information-item-link">
                                    Hỗ trợ khách hàng: hotro@tiki.vn
                                </Link>
                                <Link to="#" className="footer__information-item-link">
                                    Báo lỗi bảo mật: security@tiki.vn
                                </Link>
                            </div>
                        </div>
                        <div className="grid-col grid-col10-xl-2">
                            <div className="footer__information-item">
                                <h4>
                                    VỀ TIKI
                                </h4>
                                <Link to="#" className="footer__information-item-link">
                                    Giới thiệu Tiki
                                </Link>
                                <Link to="#" className="footer__information-item-link">
                                    Tuyển Dụng
                                </Link>
                                <Link to="#" className="footer__information-item-link">
                                    Chính sách bảo mật thanh toán
                                </Link>
                                <Link to="#" className="footer__information-item-link">
                                    Chính sách bảo mật thông tin cá nhân
                                </Link>
                                <Link to="#" className="footer__information-item-link">
                                    Chính sách giải quyết khiếu nại
                                </Link>
                                <Link to="#" className="footer__information-item-link">
                                    Điều khoản sử dụng
                                </Link>
                                <Link to="#" className="footer__information-item-link">
                                    Giới thiệu Tiki Xu
                                </Link>
                                <Link to="#" className="footer__information-item-link">
                                    Bán hàng doanh nghiệp
                                </Link>
                            </div>
                        </div>
                        <div className="grid-col grid-col10-xl-2">
                            <div className="footer__information-item">
                                <h4>
                                    HỢP TÁC VÀ LIÊN KẾT
                                </h4>
                                <Link to="#" className="footer__information-item-link">
                                    Quy chế hoạt động Sàn GDTMĐT
                                </Link>
                                <Link to="#" className="footer__information-item-link">
                                    Bán hàng cùng Tiki
                                </Link>
                            </div>
                        </div>
                        <div className="grid-col grid-col10-xl-2">
                            <div className="footer__information-item">
                                <h4>
                                    PHƯƠNG THỨC THANH TOÁN
                                </h4>
                                <p>
                                    <img className="icon" src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/visa.svg" alt="" />
                                    <img className="icon" src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/mastercard.svg" alt="" />
                                    <img className="icon" src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/jcb.svg" alt="" />
                                    <img className="icon" src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/cash.svg" alt="" />
                                    <img className="icon" src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/internet-banking.svg" alt="" />
                                    <img className="icon" src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/installment.svg" alt="" />
                                </p>
                            </div>
                        </div>
                        <div className="grid-col grid-col10-xl-2">
                            <div className="footer__information-item">
                                <h4>
                                    KẾT NỐI VỚI CHÚNG TÔI
                                </h4>
                                <p>
                                    <Link className="icon" to="#">
                                        <img src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/fb.svg" alt="" />
                                    </Link>
                                    <Link className="icon" to="#">
                                        <img src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/youtube.svg" alt="" />
                                    </Link>
                                </p>
                                <h4 className="store-title">
                                    TẢI ỨNG DỤNG TRÊN ĐIỆN THOẠI
                                </h4>
                                <p>
                                    <Link className="icon" to="#">
                                        <img className="store-icon" src="./assets/img/appstore.png" alt="" />
                                    </Link>
                                    <Link className="icon" to="#">
                                        <img className="store-icon" src="./assets/img/playstore.png" alt="" />
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;
