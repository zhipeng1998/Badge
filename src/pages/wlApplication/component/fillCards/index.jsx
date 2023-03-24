import "./index.less";
import $ from "jquery";
import { useState } from "react";
import { message } from "antd";
import { useEffect } from "react";
import request from "@/utils/axios";

const FillCards = ({ FillInComplete }) => {
  const [nowCard, setNowCard] = useState(undefined);
  const [future, setFuture] = useState([0, 0, 0, 0, 0, 0]);

  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    checkToken();

    // document.getElementById("EMAIL").addEventListener("click", fillInIt);
  }, []);

  const checkToken = async () => {
    let check = await request.get("/user/check");
    if (!check.data.status) {
      console.log(check.data.name, "check");
      ["email", "code", "why", "future", "film"].forEach((item) => {
        if (!check.data.name.includes(item)) {
          console.log(item);
          $("#" + item.toUpperCase()).attr("class", "item ok");
        }
      });
    } else {
      ["email", "code", "why", "future", "film"].forEach((item) => {
        $("#" + item.toUpperCase()).attr("class", "item ok");
      });
      setTimeout(() => {
        FillInComplete();
      }, 3000);
    }
  };

  const updateEmail = async (email, e) => {
    let res = await request.postFormData("/user/update_email", { email });
    console.log(res, "res");
    if (res) {
      $(".new").attr("class", "item ok");
      setNowCard(undefined);
      // fillInIt(e);
    }
  };

  const updateCodeNone = async () => {
    let res = await request.postFormData("/user/update_code", { code: "none" });
    console.log(res, "res");
    if (res) {
      $(".new").attr("class", "item ok");
      setNowCard(undefined);
      // fillInIt(e);
    }
  };

  const updateCode = async (code) => {
    console.log(code);
    let res = await request.postFormData("/user/update_code", { code });
    console.log(res, "res");
    if (res) {
      $(".new").attr("class", "item ok");
      setNowCard(undefined);
    }
  };

  const updateWhy = async (why) => {
    console.log(why);
    let res = await request.postFormData("/user/update_question", { why });
    console.log(res, "res");
    if (res) {
      $(".new").attr("class", "item ok");
      setNowCard(undefined);
    }
  };

  const updateFuture = async (future) => {
    console.log(future);
    let res = await request.postFormData("/user/update_question", { future });
    console.log(res, "res");
    if (res) {
      $(".new").attr("class", "item ok");
      setNowCard(undefined);
    }
  };
  const updateFilm = async (film) => {
    console.log(film);
    let res = await request.postFormData("/user/update_question", film);
    console.log(res, "res");
    if (res) {
      $(".new").attr("class", "item ok");
      setNowCard(undefined);
      checkToken();
      // setTimeout(() => {
      //   FillInComplete();
      // }, 3000);
    }
  };

  const fillInIt = (e, dom) => {
    // if (!e.includes("ok")) {
    console.log(!!e, dom.target.outerHTML);
    if (e && !dom.target.outerHTML.includes("ok")) {
      console.log(e);
      $(".new").attr("class", "item");

      setNowCard(e);
      $("#" + e).addClass("new");
      $("#" + e).addClass(e.toLowerCase());
    } else if (e) {
      console.log("first");
      messageApi.open({
        type: "warning",
        content: "Filled in and cannot be changed",
      });
    }
  };
  const stepToCode = (e) => {
    let reg = /^([a-zA-Z\d][\w-]{2,})@(\w{2,})\.([a-z]{2,})(\.[a-z]{2,})?$/;
    console.log("#" + e);
    if (reg.test($("#email").val())) {
      updateEmail($("#email").val(), e);
    } else if ($("#email").val()) {
      messageApi.open({
        type: "warning",
        content: "The mailbox format is incorrect",
      });
    } else {
      messageApi.open({
        type: "warning",
        content: "The form item is not filled",
      });
    }
  };

  const stepToWhy = (e) => {
    console.log(e, $("#code").val());
    if (e === "NOT") {
      // $(".new").attr("class", "item ok");
      // setNowCard(undefined);
      updateCodeNone();
    } else if (!$("#code").val()) {
      messageApi.open({
        type: "warning",
        content: "The form item is not filled",
      });
    } else {
      console.log("first", e);
      updateCode($("#code").val());
    }
  };

  const stepToFuture = (e) => {
    console.log(e, $("#why").val());
    if (!$("#why").val()) {
      messageApi.open({
        type: "warning",
        content: "The form item is not filled",
      });
    } else {
      console.log("first", e);
      updateWhy($("#why").val());
    }
  };
  function countNum(arr, res) {
    var newArrays = arr.filter(function (item) {
      return item === res;
    });
    return newArrays.length;
  }
  function countArr(arr, res) {
    let a = [];
    arr.forEach((item, index) => {
      if (item === res) {
        a.push(index + 1);
      }
    });
    return a.join();
  }
  // const stepToFuture = (e) => {
  //   console.log(future, countNum(future, 1));
  //   if (countNum(future, 1) < 3) {
  //     messageApi.open({
  //       type: "warning",
  //       content: "The form item is not filled",
  //     });
  //   } else {
  //     console.log(future);
  //     // updateCode($("#code").val());
  //   }
  //   $(".new").attr("class", "item ok");
  //   // setNowCard(e);
  //   // fillInIt(e);
  // };
  const stepToFILM = (e) => {
    // console.log(future, countNum(future, 1));
    if (countNum(future, 1) > 3 || countNum(future, 1) === 0) {
      messageApi.open({
        type: "warning",
        content: "Select at least one,three choices max",
      });
    } else {
      console.log(countArr(future, 1));
      updateFuture(countArr(future, 1));
    }
    // $(".new").attr("class", "item ok");
    // setNowCard(e);
    // fillInIt(e);
  };
  const stepToOver = (e) => {
    if (
      !$("#film_one").val() ||
      !$("#film_two").val() ||
      !$("#film_three").val()
    ) {
      messageApi.open({
        type: "warning",
        content: "The form item is not filled",
      });
    } else {
      console.log("first", e);
      updateFilm({
        film_one: $("#film_one").val(),
        film_two: $("#film_two").val(),
        film_three: $("#film_three").val(),
      });
    }

    // $(".new").attr("class", "item ok");
    // setNowCard(e);
  };
  const selectIt = (e) => {
    let arr = JSON.parse(JSON.stringify(future));
    arr[e] ? (arr[e] = 0) : (arr[e] = 1);
    setFuture(arr);
  };
  // const changeClass = (e) => {
  //   let a = "choice";
  //   if (future[0] === 1) {
  //     a = "choiceOk";
  //   }
  //   console.log(a);
  //   return a;
  // };

  return (
    <div className="FillCards">
      {contextHolder}
      <div className="CardsForFill">
        <div
          id="EMAIL"
          className="item"
          onClick={(e) => {
            console.log(e);
            fillInIt(e.target.outerText, e);
          }}
        >
          <div className="titleN">EMAIL</div>
          {nowCard === "EMAIL" && (
            <>
              <div className="require">(require)</div>
              <div className="descript">
                We promise not to span you.Just a kind reminder before the mint
                date
              </div>
              <div className="sign-in-htm">
                <div className="group">
                  <input
                    id="email"
                    type="text"
                    className="input"
                    placeholder="email address"
                  />
                </div>

                <div className="group">
                  <input
                    type="submit"
                    className="button"
                    value="submit"
                    onClick={() => stepToCode("CODE")}
                  />
                </div>
              </div>
            </>
          )}
        </div>
        <div
          id="CODE"
          className="item"
          onClick={(e) => {
            fillInIt(e.target.outerText, e);

            // console.log(e.target.outerText);
          }}
        >
          <div className="titleN">CODE</div>
          {nowCard === "CODE" && (
            <>
              <div className="require">(optional)</div>
              <div className="descript">collab code if you have one</div>
              <div className="sign-in-htm">
                <div className="group" style={{ marginTop: 50 }}>
                  <input
                    id="code"
                    className="input"
                    placeholder="collab code"
                  />
                </div>

                <div className="group">
                  <input
                    type="submit"
                    className="button"
                    value="submit"
                    onClick={() => stepToWhy("WHY")}
                  />
                </div>

                <div className="group" style={{ marginTop: 50 }}>
                  <input
                    id="email"
                    type="text"
                    className="input inputPlaceholder"
                    placeholder="I don't have one."
                    onClick={() => stepToWhy("NOT")}
                  />
                </div>
              </div>
            </>
          )}
        </div>
        <div
          id="WHY"
          className="item"
          onClick={(e) => {
            fillInIt(e.target.outerText, e);
          }}
        >
          <div className="titleN">WHY</div>
          {nowCard === "WHY" && (
            <>
              <div className="descript">
                Why can you make KlassTown a better community? (Four hundred
                words max)
              </div>
              <div className="sign-in-htm" style={{ marginTop: 30 }}>
                <div className="group">
                  <textarea id="why" rows="10" cols="30" maxLength="400" />
                </div>

                <div className="group">
                  <input
                    type="submit"
                    className="button"
                    value="submit"
                    onClick={() => stepToFuture("FUTURE")}
                  />
                </div>
              </div>
            </>
          )}
        </div>
        <div
          id="FUTURE"
          className="item"
          onClick={(e) => {
            fillInIt(e.target.outerText, e);
          }}
        >
          <div className="titleN" style={{ marginTop: 40 }}>
            FUTURE
          </div>

          {nowCard === "FUTURE" && (
            <>
              <div
                className="descript"
                style={{ marginTop: 10, fontSize: 22, lineHeight: "28px" }}
              >
                Which part of KlassTown would you like to see more? Multiply
                choices(three choices max)
              </div>
              <div className="sign-in-htm" style={{ marginTop: 5 }}>
                <div
                  className="group"
                  style={{ marginTop: 10 }}
                  onClick={() => selectIt(0)}
                >
                  <input
                    disabled
                    className={future[0] === 1 ? "choiceOk" : "choice"}
                    placeholder="Fashion, Outfit choices"
                  />
                </div>

                <div
                  className="group"
                  style={{ marginTop: 10 }}
                  onClick={() => selectIt(1)}
                >
                  <input
                    disabled
                    className={future[1] === 1 ? "choiceOk" : "choice"}
                    placeholder="Story Arc"
                  />
                </div>

                <div
                  className="group"
                  style={{ marginTop: 10 }}
                  onClick={() => selectIt(2)}
                >
                  <input
                    disabled
                    className={future[2] === 1 ? "choiceOk" : "choice"}
                    placeholder="Interactive Stirytelling"
                  />
                </div>

                <div
                  className="group"
                  style={{ marginTop: 10 }}
                  onClick={() => selectIt(3)}
                >
                  <textarea
                    className={future[3] === 1 ? "choiceOk" : "choice"}
                    disabled
                    style={{ height: 80 }}
                    placeholder="Still visualization of Characters(e.g. IIIustrations,comics)"
                    rows="10"
                    cols="30"
                    maxLength="400"
                  />
                </div>

                <div
                  className="group"
                  style={{ marginTop: 10 }}
                  onClick={() => selectIt(4)}
                >
                  <textarea
                    className={future[4] === 1 ? "choiceOk" : "choice"}
                    disabled
                    style={{ height: 80 }}
                    placeholder="Moving-image adaptation (e.g. animation,film,short cosplay video)"
                    rows="10"
                    cols="30"
                    maxLength="400"
                  />
                  {/* <input
                    disabled
                    className={future[4] === 1 ? "choiceOk" : "choice"}
                    placeholder="Moving-image adaptation(e.g. animation,film,short cosplay video)"
                  /> */}
                </div>

                <div
                  className="group"
                  style={{ marginTop: 10 }}
                  onClick={() => selectIt(5)}
                >
                  <input
                    disabled
                    className={future[5] === 1 ? "choiceOk" : "choice"}
                    placeholder="RPG Game"
                  />
                </div>

                <div className="group">
                  <input
                    type="submit"
                    className="button"
                    value="submit"
                    onClick={() => stepToFILM("FILM")}
                  />
                </div>
              </div>
            </>
          )}
        </div>
        <div
          id="FILM"
          className="item"
          onClick={(e) => {
            fillInIt(e.target.outerText, e);
          }}
        >
          <div className="titleN">FILM</div>
          {nowCard === "FILM" && (
            <>
              <div className="descript" style={{ marginTop: 10 }}>
                What are your favourate spa/secret agent films? Name Three.
              </div>
              <div className="sign-in-htm" style={{ marginTop: 10 }}>
                <div className="group">
                  <textarea
                    id="film_one"
                    rows="5"
                    cols="30"
                    maxLength="400"
                    style={{ height: 130 }}
                  />
                </div>
                <div className="group">
                  <textarea
                    id="film_two"
                    rows="5"
                    cols="30"
                    maxLength="400"
                    style={{ height: 130 }}
                  />
                </div>
                <div className="group" style={{ margin: 0 }}>
                  <textarea
                    id="film_three"
                    rows="5"
                    cols="30"
                    maxLength="400"
                    style={{ height: 130 }}
                  />
                </div>

                <div className="group" style={{ margin: 0 }}>
                  <input
                    type="submit"
                    className="button"
                    value="submit"
                    onClick={() => stepToOver(undefined)}
                  />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default FillCards;
