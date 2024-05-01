const HEAD = (
  <div
    style={{
      height: "50px",
      width: "50px",
      borderRadius: "100%",
      border: "10px solid black",
      position: "absolute",
      top: "50px",
      right: "-30px",
    }}
  ></div>
);

const BODY = (
  <div
    style={{
      background: "black",
      height: "100px",
      width: "10px",
      position: "absolute",
      top: "120px",
      right: "0px",
    }}
  ></div>
);

const RIGHT_ARM = (
  <div
    style={{
      background: "black",
      height: "10px",
      width: "100px",
      position: "absolute",
      top: "150px",
      right: "-100px",
      rotate: "-30deg",
      transformOrigin: "left bottom",
    }}
  ></div>
);

const LEFT_ARM = (
  <div
    style={{
      background: "black",
      height: "10px",
      width: "100px",
      position: "absolute",
      top: "150px",
      right: "10px",
      rotate: "30deg",
      transformOrigin: "right bottom",
    }}
  ></div>
);

const RIGHT_LEG = (
  <div
    style={{
      background: "black",
      height: "10px",
      width: "100px",
      position: "absolute",
      top: "210px",
      right: "-90px",
      rotate: "60deg",
      transformOrigin: "left bottom",
    }}
  ></div>
);

const LEFT_LEG = (
  <div
    style={{
      background: "black",
      height: "10px",
      width: "100px",
      position: "absolute",
      top: "210px",
      right: 0,
      rotate: "-60deg",
      transformOrigin: "right bottom",
    }}
  ></div>
);

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

type HangmanDrawingProps = {
  numberOfGuesses: number;
};

export function HangmanDrawing({ numberOfGuesses }: HangmanDrawingProps) {
  return (
    <div className="hangman-drawing-cont">
      {BODY_PARTS.slice(0, numberOfGuesses)}
      {/* {HEAD} */}
      <div
        style={{
          height: "50px",
          width: "10px",
          background: "black",
          position: "absolute",
          top: "0",
          right: "0",
        }}
      ></div>
      <div
        style={{
          height: "10px",
          width: "200px",
          background: "black",
          marginLeft: "120px",
        }}
      ></div>
      <div
        style={{
          height: "400px",
          width: "10px",
          marginLeft: "120px",
          background: "black",
        }}
      ></div>
      <div
        style={{ height: "10px", width: "270px", background: "black" }}
      ></div>
    </div>
  );
}
