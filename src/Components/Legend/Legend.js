import "./Legend.css";

function Legend(props) {
  const {
    total,
    active,
    noactive,
    done,
    defaultTotal,
    setPieInfo,
  } = props;

  const cyrilicItems = {
    Всего: [total],
    Активных: [active],
    Неактивных: [noactive],
    Завершенных: [done],
  }

  return (
    <div className="legend">
      {
        Object.entries(cyrilicItems)
        .map((item, key) => (
          <div className="legend-item space-between" key={key}>
            <div 
              onMouseEnter={() => setPieInfo(item[1])}
              onMouseLeave={() => setPieInfo(defaultTotal)}
            >
              {`${item[0]}:`}
            </div>
            <div 
              onMouseEnter={() => setPieInfo(item[1])}
              onMouseLeave={() => setPieInfo(defaultTotal)}
            >
              {item[1]}
            </div>
          </div>
        ))
      }
    </div>
  );
}

export default Legend;