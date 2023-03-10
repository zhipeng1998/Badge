import "./index.less";
import sidebarMove from "@/assets/img/sidebarMove.png";

const SideBar = () => {
  return (
    <div className="sideBar">
      <div className="pacman"></div>
      <div className="move-box">
        <div className="move-pics">
          <img src={sidebarMove} alt="刷新重新加载" />
          <img src={sidebarMove} alt="刷新重新加载" />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
