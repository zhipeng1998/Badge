import "./index.less";
import sidebarMove from "@/assets/img/sidebarMove.png";
// import sidebarMove1 from "https://jujutsukaisen.dolcegabbana.com/assets/img/intro/titleL.png";

const SideBar = () => {
  return (
    <div className="sideBar">
      <div className="pacman"></div>
      <div className="move-box">
        <div className="move-pics">
          {/* <img src="https://jujutsukaisen.dolcegabbana.com/assets/img/intro/titleL.png" />
          <img src="https://jujutsukaisen.dolcegabbana.com/assets/img/intro/titleL.png" />
          <img src="https://jujutsukaisen.dolcegabbana.com/assets/img/intro/titleL.png" />
          <img src="https://jujutsukaisen.dolcegabbana.com/assets/img/intro/titleL.png" /> */}
          <img src={sidebarMove} alt="刷新重新加载" />
          <img src={sidebarMove} alt="刷新重新加载" />
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

export default SideBar;
