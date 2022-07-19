import "./Pie.css";

function Pie(props) {
  const {
    total,
    header,
    pie,
  } = props;

  return (
    <>
      <div className="pie-info-wrapper">
        <div className="pie-info">
          <div className="pie-info-header">{header}</div>
          <div className="pie-info-data">{total}</div>
        </div>
      </div>
      {
        pie.map((item, key) => {
          const pieStyle = {
            "--percent": [item.percent],
            "--color": [item.color],
          }
          const pieWrapperStyle = {
            "zIndex": [999-key],
          }
          return (
            <div className="pie-wrapper" style={pieWrapperStyle} key={key}>
              <div 
                className="pie" 
                style={pieStyle}>
              </div>
            </div>
          )
        })
      }
    </>
  );
}

export default Pie;