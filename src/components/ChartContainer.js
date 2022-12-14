import AreaChartComponent from './AreaChart'
import BarChartComponent from './BarChart'
import Wrapper from '../assets/wrappers/ChartsContainer'
import { useState } from 'react';
import { useSelector } from 'react-redux';

const ChartContainer = () => {
  const [barChart, setBarChart] = useState(true);
  const { monthlyApplications:data } = useSelector((store) => store.allJobs);
  
  return (
    <Wrapper>
      <h4>monthly applications</h4>
      <button type='button' onClick={() => setBarChart(!barChart)}>
        {barChart ? 'Area Chart' : 'Bar Chart'}
      </button>
      {barChart ? <BarChartComponent data={data} /> : <AreaChartComponent data={data} />} 
    </Wrapper>
  )
}

export default ChartContainer