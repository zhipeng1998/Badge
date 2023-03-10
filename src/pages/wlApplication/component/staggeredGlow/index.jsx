import "./index.less";
import CarouselWithRole from "@/component/carouselWithRole";

const StaggeredGlow = ({ str, color }) => {
  const list = () => {
    let res = [];
    for (let i in str) {
      res.push(
        <span
          key={i}
          style={{ animationDelay: (i * 0.05).toFixed(2) + "s", color: color }}
        >
          {str[i]}
        </span>
      );
      str[i - 1] === "n" && str[i] === "!" && res.push(<div></div>);
      str[i] === "." && res.push(<div></div>);
    }
    return res;
  };

  return (
    <div className="StaggeredGlow" key={str}>
      <div className="text">
        <div className="luminous">
          {list()?.map((item) => {
            return item;
          })}
        </div>
      </div>
      <CarouselWithRole changeBg={color} />
      {/* {color ? <div className="bgOver"></div> : <div className="bg"></div>} */}
    </div>
  );
};

export default StaggeredGlow;
