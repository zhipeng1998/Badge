import React from "react";

export default class Scroll extends React.Component {
  state = {
    rollClass: "",
  };
  setScrollStyle = (offsetHeight, speed) => {
    const uid = Math.random().toString(36).substr(2);
    const style = document.createElement("style");
    style.type = "text/css";

    style.innerHTML = `@-webkit-keyframes rowup${uid} {
            0% {
                -webkit-transform: translate3d(0, 0, 0);
                transform: translate3d(0, 0, 0);
            }
            100% {
                -webkit-transform: translate3d(0, -50%, 0);
                transform: translate3d(0, -50%, 0);
            }
        }
        @keyframes rowup${uid} {
            0% {
                -webkit-transform: translate3d(0, 0, 0);
                transform: translate3d(0, 0, 0);
            }
            100% {
                -webkit-transform: translate3d(0, -50%, 0);
                transform: translate3d(0, -50%, 0);
            }
        }
        .rowup-${uid}{
            -webkit-animation: ${Math.floor(
              (offsetHeight * 1000) / speed
            )}ms rowup${uid} linear infinite normal;
            animation: ${Math.floor(
              (offsetHeight * 1000) / speed
            )}ms rowup${uid} linear infinite normal;
        }`;
    document.getElementsByTagName("head")[0].appendChild(style);
    return `rowup-${uid}`;
  };

  componentDidMount() {
    const scrollContent = document.querySelector(".scroll .scroll-content");
    if (scrollContent) {
      const offsetHeight = scrollContent.offsetHeight;

      const scrollClass = this.setScrollStyle(
        offsetHeight / 2,
        this.props.speed || 35
      );
      this.setState({
        rollClass: scrollClass,
      });
    }
  }
  render() {
    const rollClass = this.state.rollClass ? " " + this.state.rollClass : "";
    return (
      <div className="scroll" style={{ height: this.props.height }}>
        <div
          className={"scroll-content" + rollClass}
          style={{ color: "white" }}
        >
          {this.props.children}
          {this.props.children}
        </div>
      </div>
    );
  }
}
