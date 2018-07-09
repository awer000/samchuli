import React from "react";
import styles from "./Footer.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Footer = () => (
  <footer className={cx("footer")}>
    <div className={cx("footer-logo")} />
    <div className={cx("footer-content")}>
      <ul className={cx("footer-top")}>
        <li className={cx("white")}>개인정보 처리 방침</li>
        <span> | </span>
        <li>메일주소 무단수집거부</li>
        <span> | </span>
        <li>신용정보 조회사실 통보공시</li>
        <span> | </span>
        <li>이용약관</li>
      </ul>
      <div className={cx("footer-bottom")}>
        <div className={cx("address")}>
          <address>
            07328 서울특별시 영등포구 국제금융로 6길 42 (주)삼천리
          </address>
          <p>Copyright samchully Corp. All rights reserved.</p>
        </div>
        <div className={cx("cert-logo")}>
          <img
            src="http://www.samchully.co.kr/assets/img/footer/zon.JPG"
            alt="zon"
          />
          <img
            src="http://www.samchully.co.kr/assets/img/footer/img_logo_1.gif"
            alt="logo1"
          />
          <img
            src="http://www.samchully.co.kr/assets/img/footer/edu2.png"
            alt="edu2"
          />
        </div>
      </div>
    </div>
    <div className={cx("selector")}>
      <select>
        <option>Family Site</option>
        <option>(주) 삼탄</option>
        <option>(주) 삼천리 ENG</option>
        <option>(주) 삼천리 ES</option>
        <option>(주) HUCES</option>
      </select>
    </div>
  </footer>
);

export default Footer;
