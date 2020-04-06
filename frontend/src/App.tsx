import React, { useEffect, useState, useRef } from 'react';
import 'echarts';
import 'echarts-gl';
import ReactEcharts from "echarts-for-react";
import './App.css';


function App() {
  const [data, setData] = useState([[0, 0, 0]])
  const option = {
    grid3D: {},
    xAxis3D: {
      min: -50,
      max: 50,
    },
    yAxis3D: {
      min: -50,
      max: 50,
    },
    zAxis3D: {
      min: -50,
      max: 50,
    },
    series: [{
      type: 'scatter3D',
      data: data,
      animation: false
    }]
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (data.length > 10) {
        data.shift()
      }
      setData([...data, [Math.random() * 25, Math.random() * 25, Math.random() * 25]])
    }, 1000)

    return(() => {clearInterval(intervalId)})
  })

  return (
    <div className="App">
      <ReactEcharts
        option={option}
        style={{ height: '100vh', width: "100vw" }}
      />
    </div>
  );
}

export default App;
