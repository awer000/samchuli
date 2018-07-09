import React from "react";
import styles from "./MainTop.scss";
import classNames from "classnames/bind";
import TexCheck from "react-icons/lib/fa/bar-chart";
import Tex from "react-icons/lib/md/payment";
import Emig from "react-icons/lib/md/event-note";
import FormForm from "react-icons/lib/fa/sticky-note-o";
import SearchIcon from "react-icons/lib/fa/search";

const cx = classNames.bind(styles);

const MainTop = () => (
  <div className={cx("main-top")}>
    <div className={cx("background-img")}>
      <img
        src="https://kr.best-wallpaper.net/wallpaper/1920x1080/1711/Wind-power-station-sea-boat_1920x1080.jpg"
        alt="background"
      />
    </div>
    <div className={cx("moto")}>
      <h1>
        신뢰와 나눔 속에 <br />사랑 받는 기업으로
      </h1>
    </div>
    <div className={cx("quick-menu")}>
      <div className={cx("quick-back")} />
      <ul>
        <li
          onClick={() => {
            window.location.href =
              "https://www.samchully.co.kr/customer/gas/inquiry/check.do";
          }}
        >
          <TexCheck className={cx("icon")} />요금조회
        </li>
        <li
          onClick={() => {
            window.location.href =
              "https://www.samchully.co.kr/customer/gas/inquiry/charge.do";
          }}
        >
          <Tex className={cx("icon")} />요금납부
        </li>
        <li
          onClick={() => {
            window.location.href =
              "https://www.samchully.co.kr/member/login.do?returnUrl=/customer/gas/request/move/form.do";
          }}
        >
          <Emig className={cx("icon")} />전출입신청
        </li>
        <li
          onClick={() => {
            window.location.href =
              "https://www.samchully.co.kr/customer/gas/request/format/list.do";
          }}
        >
          <FormForm className={cx("icon")} />신청서양식
        </li>
        <span> | </span>
        <li>
          <form>
            <div className={cx("tex-check")}>간편요금조회</div>
            <input placeholder="납부자번호 입력" />
            <div className={cx("search-icon")}>
              <SearchIcon />
            </div>
          </form>
        </li>
        <li
          onClick={() => {
            window.location.href =
              "https://www.samchully.co.kr/member/login.do?returnUrl=/cooperation/notice/coperationNotice.do";
          }}
        >
          <div className={cx("outsourcing")}>협력업체 > </div>
        </li>
      </ul>
    </div>
  </div>
);

export default MainTop;
