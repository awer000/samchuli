import React from "react";
import styles from "./Header.scss";
import classNames from "classnames/bind";
import SearchIcon from "react-icons/lib/fa/search";
import MenuBar from "react-icons/lib/fa/align-justify";

const cx = classNames.bind(styles);

const Header = () => (
  <header className={cx("header")}>
    <div className={cx("logo")}>
      <img
        src="http://www.samchully.co.kr/assets/img/header/logo.gif"
        alt="logo"
        onClick={() => {
          window.location.href = "/";
        }}
      />
    </div>
    <div className={cx("menu-bar")}>
      <MenuBar />
    </div>
    <div className={cx("header-line")}>
      <div className={cx("header-top")}>
        <div className={cx("top-menu")}>
          <ul>
            <li>로그인</li>
            <span> | </span>
            <li>회원가입</li>
            <span> | </span>
            <li>사이트맵</li>
            <span> | </span>
            <li>English</li>
          </ul>
        </div>

        <input placeholder="검색어 입력" />
        <div className={cx("search-icon")}>
          <SearchIcon />
        </div>
      </div>
      <div className={cx("header-bottom")}>
        <ul>
          <li>
            <b>기업소개</b>
            <div className={cx("hide-menu")}>
              <div>그룹소개</div>
              <div>CEO 인사말</div>
              <div>연혁</div>
              <div>CI</div>
              <div>고객만족</div>
              <div>사회공헌</div>
              <div>윤리경영</div>
              <div>GWP</div>
              <div>찾아 오시는 길</div>
            </div>
          </li>
          <li>
            <b>사업소개</b>
            <div className={cx("hide-menu")}>
              <div>도시가스사업</div>
              <div>발전 및 집단에너지사업</div>
            </div>
          </li>
          <li>
            <b>R&D</b>
            <div className={cx("hide-menu")}>
              <div>기술연구소 소개</div>
              <div>연구현황</div>
              <div>커뮤니티</div>
            </div>
          </li>
          <li>
            <b>투자정보</b>
            <div className={cx("hide-menu")}>
              <div>지배구조</div>
              <div>재무정보</div>
              <div>주가정보</div>
              <div>공시/공고</div>
              <div>IR자료실</div>
            </div>
          </li>
          <li>
            <b>홍보센터</b>
            <div className={cx("hide-menu")}>
              <div>뉴스센터</div>
              <div>홍보영상</div>
              <div>사보</div>
              <div>Annual Report</div>
              <div>PR Library</div>
              <div>사이버역사관</div>
            </div>
          </li>
          <span> | </span>
          <li className={cx("blue")}>
            <b>고객센터</b>
            <div className={cx("hide-menu")}>
              <div>공지사항</div>
              <div>안내</div>
              <div>조회/납부</div>
              <div>신청</div>
              <div>문의</div>
              <hr />
              <div>전기(광명 역세권)</div>
            </div>
          </li>
          <li className={cx("blue")}>
            <b>인재채용</b>
          </li>
        </ul>
      </div>
    </div>
  </header>
);

export default Header;
