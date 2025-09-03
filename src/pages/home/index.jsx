// import mainLogo from "@/assets/img/logo.png";
import ShowLoading from "../../component/showLoading";
import CardRotate from "./component/cardRotate";
import SideBar from "./component/sideBar";
import "./index.less";
import "./gradually.less";
import MouseFollow from "../../component/mouseFollow";
import { useEffect, useState } from "react";
import LogoScale from "./component/logoScale";
import MyDrawer from "../../component/drawer";
import copybookLogo from "@/assets/img/copybookLogo.png";
import manifestoLogo from "@/assets/img/manifestoLogo.png";
import visionLogo from "@/assets/img/visionLogo.png";
import Smokebg from "../../component/smokebg";
import { useNavigate } from "react-router-dom";
import HomePage2 from "../homePage2";
// import MouseFire from "../../component/mouseFire";
const copybookText = (
  <>
    <p>
      此徽章授予在书法临摹与练习中展现出非凡毅力与卓越成就的书写者。它象征着对传统笔墨的深刻理解，对点画结构的精准把握，是勤奋与天赋的共同加冕。获此徽章者，乃是以恒心磨砺笔锋，以心灵对话古帖的字帖达人。
    </p>
    <p>领取方式：累计打卡14天就能领取</p>
  </>
);
const manifestoText = (
  <>
    <p>
      Somehow we’ve come to believe that slobs, boors, quitters have a cooler
      attitude towards life as they seem more effortless. However, that
      “coolness” is just an easy excuse for us to kneel down to the challenges
      of life and the barbarity inside of us. Surrenders are NEVER cool. The
      truth is, rid of all those fancy, dishonest excuses, one man’s life is
      always about discipline. To get well groomed every second, to have manners
      in front of anyone, and to keep words even if your life is at risk.
    </p>
    <p>Do those and live at ease in your skin, that is real coolness.</p>
  </>
);
const visionText = (
  <>
    <p>Klass is an NFT gated luxury menswear fashion brand. </p>
    <p>
      With unique narratives to be unraveled, Klass is a chosen style. Trend
      passes, style remains.
    </p>
    <p>HOW? </p>
    <p>
      KlassTown will utilize longstanding entertainment media - film, TV,
      podcast, novels, manga, in combination with web3 community and ownership
      tools, to develop an interactive RPG experience, and distribute IP
      ownership to the community.
    </p>
    <p> What’s the experience like? Fashion and Mission? </p>
    <p>Well, just think about James Bond…</p>
  </>
);

const Index = () => {
  let navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true); //true
  const [avtive, setAvtive] = useState(undefined);
  const [logo, setLogo] = useState(copybookLogo);
  const [intro, setIntro] = useState(copybookText);
  const [visibleAll, setVisibleAll] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);
  const [visibleLogo, setVisibleLogo] = useState(false);

  useEffect(() => {
    let str = localStorage.getItem("badge");
    if (!JSON.parse(str)) {
      localStorage.setItem(
        "badge",
        JSON.stringify([
          {
            name: "copybook",
            title:'字帖达人秀获奖名单',
            user: [
              "张三",
              "李四",
              "王五",
              "赵六",
              "钱七",
              "孙八",
              "周九",
              "吴十",
              "郑十一",
              "冯十二",
              "陈十三",
              "褚十四",
              "卫十五",
            ],
          },
          {
            name: "manifesto",
            title:'类型2获奖名单',
            user: [
              "张三2",
              "李四2",
              "王五2",
              "赵六2",
              "钱七2",
              "孙八2",
              "周九2",
              "吴十2",
              "郑十一2",
              "冯十二2",
              "陈十三2",
              "褚十四2",
              "卫十五",
            ],
          },
          {
            name: "vision",
            title:'类型3获奖名单',
            user: [
              "张三3",
              "李四3",
              "王五3",
              "赵六3",
              "钱七3",
              "孙八3",
              "周九3",
              "吴十3",
              "郑十一3",
              "冯十二3",
              "陈十三3",
              "褚十四3",
              "卫十五",
            ],
          },
        ])
      );
    }
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    setTimeout(() => {
      setVisibleLogo(true);
    }, 4000);
    setTimeout(() => {
      setVisible2(true);
    }, 5000);
    setTimeout(() => {
      setVisible3(true);
    }, 6000);
    setTimeout(() => {
      setVisibleAll(true);
    }, 7000);
  }, []);

  const showDrawer = (e) => {
    setOpen(true);
    setAvtive(e);
    switch (e) {
      case "copybook":
        setLogo(copybookLogo);
        setIntro(copybookText);
        break;
      case "manifesto":
        setLogo(manifestoLogo);
        setIntro(manifestoText);
        break;
      case "vision":
        setLogo(visionLogo);
        setIntro(visionText);
        break;
      default:
        break;
    }
  };

  const onClose = () => {
    setOpen(false);
    setTimeout(() => {
      setAvtive(undefined);
    }, 400);
  };

  return (
    <>
      {loading ? (
        <ShowLoading />
      ) : (
        // <LogoScale />
        <div className="container">
          <section>
            <MyDrawer
              open={open}
              placement={avtive === "manifesto" ? "right" : "left"}
              title={avtive}
              logo={logo}
              intro={intro}
              onClose={onClose}
            />
            <div className="home">
              <div
                className="left"
                style={
                  visibleAll
                    ? { visibility: "visible" }
                    : { visibility: "hidden" }
                }
              >
                <div className="scroll">
                  <SideBar />
                </div>
              </div>
              <div
                className="right"
                style={
                  visibleAll
                    ? { visibility: "visible" }
                    : { visibility: "hidden" }
                }
              >
                <div className="r-top">
                  <div className="logo" style={{ visibility: "visible" }}>
                    <LogoScale />

                    {/* <img src={mainLogo} width={70} /> */}
                  </div>

                  {visible2 && (
                    <div className="nav-bar" style={{ visibility: "visible" }}>
                      <div
                        className={`sub-title slide-bar ${
                          avtive === "copybook" && "active"
                        }`}
                        onClick={() => showDrawer("copybook")}
                      >
                        字帖
                      </div>
                      <div
                        className={`sub-title slide-bar ${
                          avtive === "manifesto" && "active"
                        }`}
                        onClick={() => showDrawer("manifesto")}
                      >
                        类型2
                      </div>
                      <div
                        className={`sub-title slide-bar ${
                          avtive === "vision" && "active"
                        }`}
                        onClick={() => showDrawer("vision")}
                      >
                        类型3
                      </div>
                    </div>
                  )}

                  {/* <span
                    className="item luminous"
                    style={{
                      margin: 0,
                      cursor: "pointer",
                      width: "33%",
                      textAlign: "center",
                    }}
                    onClick={() => navigate("/wl-application")}
                  >
                    WL APPLICATION
                  </span> */}
                </div>

                <div className="r-center">
                  <div className="bg"></div>
                  <div className="rb_right">
                    <div className="gradually">
                      {visibleLogo && (
                        <div style={{ visibility: "visible" }}>
                          <div className="title slide-bar">葫芦老师</div>
                          <div className="title slide-bar">小课堂</div>
                        </div>
                      )}

                      {visible3 && (
                        <span
                          className="luminous"
                          style={
                            visible3
                              ? { visibility: "visible" }
                              : { visibility: "hidden" }
                          }
                        >
                          {"万成文学趣味人文课程".split("").map((char, idx) => (
                            <span
                              key={idx}
                              style={{ animationDelay: 0.15 * idx + "s" }}
                            >
                              {char}
                            </span>
                          ))}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="rb_left">
                    <CardRotate />
                  </div>
                </div>
                <div className="r-bottom"></div>
              </div>
            </div>
            <MouseFollow />
            <Smokebg />
          </section>
          {/* <section>
            <HomePage2 />
          </section> */}
        </div>
      )}
    </>
  );
};
export default Index;
