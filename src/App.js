import './tailwind.css'
import { useState, useEffect } from 'react';
import { url } from './api/api';
import { chartData } from "./charts/ChartData";

import * as d3 from "d3-scale-chromatic";
import CustomSelect from './components/form/CustomSelect';
import Widget from './widgets/Widget';
import MainHeader from './components/UI/MainHeader';
import Container from './components/Container';

function App() {

  const [initialData, setInitialData] = useState({
    items: [],
    dropDownList: [],
  })

  const [data, setData] = useState({
    organicSource: null,
    directSource: null,
    referralSource: null,
    sessionsPerUser: null,
    avgSessionTime: null,
    pagePerSession: null,
    selectedValue: "Jan 2018",
  })

  useEffect(() => {

    const rows = []
    const dropDownList = []

    fetch(url)
      .then(response => response.json())
      .then(data => {
        const tempRows = data.valueRanges[0].values;

        for(let i = 1; i < tempRows.length; i++) {
          
          const rowObj = {}
          
          for(let j = 0; j < tempRows[i].length; j++) {
            rowObj[tempRows[0][j]] = tempRows[i][j];
          }

          rows.push(rowObj);

        }

        rows.forEach(arr => dropDownList.push(arr.month))

        if(!rows && !dropDownList) {
          console.log('can\'t get response')
        } else {
          setInitialData(prevInitialData => ({
            ...prevInitialData,
            items: rows,
            dropDownList
          }))
        }

      })
      .catch(error => console.log(error))

  }, [])

  useEffect(() => {

    if(initialData.items.length > 0 && initialData.dropDownList.length > 0) {

      let tempData = initialData.items.filter(item => item.month === data.selectedValue)

      setData(prevData => ({
        ...prevData,
        organicSource: tempData[0].organic_source,
        directSource: tempData[0].direct_source,
        referralSource: tempData[0].referral_source,
        avgSessionTime: tempData[0].avg_session_time,
        sessionsPerUser: tempData[0].number_of_sessions_per_users,
        pagePerSession: tempData[0].page_per_session,
      }))

    }

  }, [initialData, data.selectedValue])

  const changeMonth = (event) => {
    setData(prevData => ({
      ...prevData,
      selectedValue: event.target.value
    }))
  }
  const test = chartData({
    labels: ["Sessions", "Average session time", "Pages per session"],
    data: [
      data.sessionsPerUser,
      data.avgSessionTime,
      data.pagePerSession,
    ],
    colorRangeInfo: {
      colorStart: 0,
      colorEnd: 1,
      useEndAsStart: true,
    },
    scale: d3.interpolateCool,
    dataLabel: "data for doughnut chart",
  });
  

  return (
    <div className="bg-blue-600 min-h-screen">
      
      <Container className="pt-5">
        {
          initialData.items.length === 0 ? (
            <MainHeader header="Fetching Data" />
          ) : (
            <div>

              <MainHeader header="Custom Dashboard" />
              <CustomSelect
                changeHandler={changeMonth}
                list={initialData.dropDownList}
                selected={data.selectedValue}
              />

              <div className="app__widget">
                <Widget data={data} />
              </div>

            </div>
          )
        }
      </Container>

    </div>
  );
}

export default App;
