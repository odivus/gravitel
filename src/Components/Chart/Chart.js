import { useState } from "react";
import Legend from "../Legend/Legend";
import Pie from "../Pie/Pie";
import "./Chart.css";

function Chart(props) {
  const {
    total,
    active,
    noactive,
    done,
    header,
    pie,
  } = props.data;

  const [pieInfo, setPieInfo] = useState(total);
  const [defaultTotal] = useState(total);

  return (
    <div className="pie-wrap">
      <Pie 
        total={pieInfo}
        header={header}
        pie={pie}
      />
      <Legend 
        total={total}
        active={active}
        noactive={noactive}
        done={done}
        defaultTotal={defaultTotal}
        setPieInfo={setPieInfo}
      />
    </div>
  );
}

export default Chart;