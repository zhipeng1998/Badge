import "./index.less";
import hand from "@/assets/img/hand.png";

const LogoScale = () => {
  return (
    <div className="LogoScale">
      <div className="swatch">
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="img">
          <img src={hand} width={350} alt="刷新重新加载" />
        </div>
      </div>
    </div>
  );
};

export default LogoScale;
