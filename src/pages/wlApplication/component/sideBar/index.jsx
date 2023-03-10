import "./index.less";
import sidebarMoveBottom from "@/assets/img/sidebarMoveBottom.png";
// import sidebarMove1 from "https://jujutsukaisen.dolcegabbana.com/assets/img/intro/titleL.png";

const SideBarApp = () => {
  return (
    <div className="sideBarApp">
      <div className="move-box">
        <div className="move-pics">
          <img src={sidebarMoveBottom} alt="刷新重新加载" />
          <img src={sidebarMoveBottom} alt="刷新重新加载" />
        </div>
      </div>
      {/* <div className="remind-block">
        <div className="marquee-block">
          <div className="marquee">
            <img src={sidebarMove} width={200} />
          </div>
          <div className="marqueeT">
            <img src={sidebarMove} width={200} />
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default SideBarApp;
