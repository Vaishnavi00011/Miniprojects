import React, { useState } from "react";
import CalcCss from "./Calc.css";

function Calc() {
  const [value, setValue] = useState(0);
  console.log(value);

  const remove=()=>{

    setValue(value.slice(-value.length, -1))
  }

  return (
    <div className="body">
      <div class="container">
        <div class="input-div">
          <input placeholder="" value={value} />
        </div>
        <div class="button">
          <div class="div1">
            <button onClick={() => setValue(value + "7")} class="btn-1">
              7
            </button>
            <button onClick={() => setValue(value + "8")} class="btn-1">
              8
            </button>
            <button onClick={() => setValue(value + "9")} class="btn-1">
              9
            </button>
            <button onClick={() => setValue(value + "+")} class="btn-2">
              +
            </button>
          </div>
          <div class="div1">
            <button onClick={() => setValue(value + "4")} class="btn-1">
              4
            </button>
            <button onClick={() => setValue(value + "5")} class="btn-1">
              5
            </button>
            <button onClick={() => setValue(value + "6")} class="btn-1">
              6
            </button>
            <button onClick={() => setValue(value + "-")} class="btn-2">
              -
            </button>
          </div>
          <div class="div1">
            <button onClick={() => setValue(value + "1")} class="btn-1">
              1
            </button>
            <button onClick={() => setValue(value + "2")} class="btn-1">
              2
            </button>
            <button onClick={() => setValue(value + "3")} class="btn-1">
              3
            </button>
            <button onClick={() => setValue(value + "*")} class="btn-2">
              x
            </button>
          </div>
          <div class="div1">
            <button onClick={() => remove()} class="btn-3">
              c
            </button>
            <button onClick={() => setValue(value + "0")} class="btn-1">
              0
            </button>
            <button onClick={() => setValue(eval)} class="btn-2">
              =
            </button>
            <button onClick={() => setValue(value + "/")} class="btn-2">
              /
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calc;
