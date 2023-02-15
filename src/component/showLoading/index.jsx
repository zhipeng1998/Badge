import "./index.less";
import loading from "@/assets/img/loading.png";

const ShowLoading = () => {
  return (
    <div className="showLoading">
      <div className="car">
        <img src={loading} alt="" />
      </div>
      <div className="line"></div>
      <div className="load">LOADING...</div>
    </div>
  );
};

export default ShowLoading;
