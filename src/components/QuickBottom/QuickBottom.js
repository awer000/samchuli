import React from "react";
import styles from "./QuickBottom.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const QuickComponent = ({ name, content, icon, content_img = false }) => {
  return (
    <div className={cx("quick-component")}>
      <div className={cx("left-content")}>
        <h3>{name}</h3>
        {content_img ? (
          <img
            className={cx("content-bottom")}
            style={{ marginTop: "1.1rem" }}
            src={content}
            alt={content}
          />
        ) : (
          <p className={cx("content-bottom")}>{content}</p>
        )}
      </div>
      <div className={cx("icon")}>
        {content_img ? (
          <img src={icon} alt={icon} style={{ paddingLeft: "1rem" }} />
        ) : (
          <img src={icon} alt={icon} />
        )}
      </div>
    </div>
  );
};

const QuickBottom = () => (
  <div className={cx("quick-bottom")}>
    <QuickComponent
      name="고객의 소리"
      content="고객님의 궁금한 점을 남겨주세요"
      icon="http://www.samchully.co.kr/assets/img/main/bg_etc_1.gif"
    />
    <QuickComponent
      name="이용안내"
      content="도시가스 관련
      안내사항입니다"
      icon="http://www.samchully.co.kr/assets/img/main/bg_etc_2.gif"
    />
    <QuickComponent
      name="연결비용 안내"
      content="가스렌지 연결
      비용 안내입니다"
      icon="http://www.samchully.co.kr/assets/img/main/bg_etc_5.gif"
    />
    <QuickComponent
      name="고객센터"
      content="http://www.samchully.co.kr/assets/img/main/txt_etc_1.gif"
      icon="http://www.samchully.co.kr/assets/img/main/bg_etc_3.gif"
      content_img
    />
    <QuickComponent
      name="가스사고 신고접수"
      content="가스 신고를 접수
      하실 수 있습니다"
    />
  </div>
);

export default QuickBottom;
