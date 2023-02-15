import "./index.less";
import A1 from "@/assets/img/A1.png";
import A2 from "@/assets/img/A2.png";
import A3 from "@/assets/img/A3.png";
// import img2 from "@/assets/img/B1.png";
import B1 from "@/assets/img/B1.png";
import B2 from "@/assets/img/B2.png";
import B3 from "@/assets/img/B3.png";

import { useEffect, useState } from "react";
const CardRotate = () => {
  const [img1, setImg1] = useState(A1);
  const [img2, setImg2] = useState(B1);
  useEffect(() => {
    setTimeout(() => {
      queue([2, 3, 4, 5]);
    }, 6000);
    // console.log(document.querySelector(".imgs"));
  }, []);

  useEffect(() => {
    console.log(img1, "img1", img2, "img2");
    // console.log(
    //   document.querySelector(".imgs").style
    // document.querySelector(".imgs").addEventListener("mouseenter",e=>{
    //   document.querySelector(".imgs").style.animation = "rotate 1.2s cubic-bezier(0.165, 0.84, 0.44, 1)";
    // })
    // );
  }, [img1, img2]);

  const queue = (num) => {
    let promise = Promise.resolve();
    num.forEach((v) => {
      promise = promise.then((_) => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            selectImg(v);
            resolve();
          }, 3000);
        });
      });
    });
  };
  const selectImg = (i) => {
    switch (i) {
      case 0:
        setImg1(A1);
        break;
      case 1:
        setImg2(B1);
        break;
      case 2:
        setImg1(A2);
        break;
      case 3:
        setImg2(B2);
        break;
      case 4:
        setImg1(A3);
        break;
      case 5:
        setImg2(B3);
        queue([0, 1, 2, 3, 4, 5]);
        break;
      default:
        break;
    }
  };

  return (
    <div className="cardRotate">
      <div className="imgs">
        <img src={img1} id="img1" />
        <img src={img2} id="img2" />
      </div>
    </div>
  );
};

export default CardRotate;
