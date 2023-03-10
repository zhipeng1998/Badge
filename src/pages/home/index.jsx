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
import loreLogo from "@/assets/img/loreLogo.png";
import manifestoLogo from "@/assets/img/manifestoLogo.png";
import visionLogo from "@/assets/img/visionLogo.png";
import Smokebg from "../../component/smokebg";
import { useNavigate } from "react-router-dom";
// import MouseFire from "../../component/mouseFire";
const loreText = (
  <>
    <p>
      Recently, Manhattanites have noticed that on Madison Avenue, one
      best-location luxury shop is being renovated under the new sign, Klass. At
      the same time, many celebrities have also received invitations to the
      fashion show of its menswear Launch Collection.
    </p>
    <p>
      However, what no one has expected is that behind Klass’s unconcealed
      glamour, there is actually the most noble and skillful agent organization
      in the world. Both the shop and the fashion show are just a cover for the
      true entrance of this world.
    </p>
    <p>
      Once a man joins Klass, his previous background, education and jobs are no
      longer important. The only important thing is their new identity
      "Klassmate". The word stands for eternal manners, nobility, and loyalty
      until death.
    </p>
    <p>
      When you see a Klassmate, don’t get fooled by his Klassy outfit. It’s just
      to remind himself of what makes him a man. And Klass outfits are always
      bulletproof. Such a decent gentleman is actually a well-trained agent who
      has survived the most dangerous conditions and performed the most
      challenging missions.
    </p>
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
  const [logo, setLogo] = useState(loreLogo);
  const [intro, setIntro] = useState(loreText);
  const [visibleAll, setVisibleAll] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);
  const [visibleLogo, setVisibleLogo] = useState(false);
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
      case "lore":
        setLogo(loreLogo);
        setIntro(loreText);
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
        <>
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
                        avtive === "lore" && "active"
                      }`}
                      onClick={() => showDrawer("lore")}
                    >
                      LORE
                    </div>
                    <div
                      className={`sub-title slide-bar ${
                        avtive === "manifesto" && "active"
                      }`}
                      onClick={() => showDrawer("manifesto")}
                    >
                      MANIFESTO
                    </div>
                    <div
                      className={`sub-title slide-bar ${
                        avtive === "vision" && "active"
                      }`}
                      onClick={() => showDrawer("vision")}
                    >
                      VISION
                    </div>
                  </div>
                )}

                <span
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
                </span>
              </div>

              <div className="r-center">
                <div className="bg"></div>
                <div className="rb_right">
                  <div className="gradually">
                    {visibleLogo && (
                      <div style={{ visibility: "visible" }}>
                        <div className="title slide-bar">klass.</div>
                        <div className="title slide-bar">town</div>
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
                        <span style={{ animationDelay: "0s" }}>F</span>
                        <span style={{ animationDelay: "0.15s" }}>A</span>
                        <span style={{ animationDelay: "0.3s" }}>S</span>
                        <span style={{ animationDelay: "0.45s" }}>H</span>
                        <span style={{ animationDelay: "0.6s" }}>I</span>
                        <span style={{ animationDelay: "0.75s" }}>O</span>
                        <span style={{ animationDelay: "0.9s" }}>N</span>
                        <span style={{ animationDelay: "1.05s" }}> </span>
                        <span style={{ animationDelay: "1.2s" }}>X</span>
                        <span style={{ animationDelay: "1.35s" }}> </span>
                        <span style={{ animationDelay: "1.5s" }}>M</span>
                        <span style={{ animationDelay: "1.65s" }}>I</span>
                        <span style={{ animationDelay: "1.8s" }}>S</span>
                        <span style={{ animationDelay: "1.95s" }}>S</span>
                        <span style={{ animationDelay: "2.1s" }}>I</span>
                        <span style={{ animationDelay: "2.25s" }}>O</span>
                        <span style={{ animationDelay: "2.4s" }}>N</span>
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
          {/* <MouseFire /> */}
          <Smokebg />
        </>
      )}

      {/* <div className="App">
        <ShowLoading />
        <SideBar />
        <CardRotate />
      </div> */}

      {/* <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div> */}
    </>
  );
};
export default Index;
