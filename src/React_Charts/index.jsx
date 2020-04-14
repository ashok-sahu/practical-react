import React from 'react'
import LineChart from './Charts/LineChart'
import BarChart from './Charts/BarChart'
import DoughnutChart from './Charts/DoughnutChart'

const ReactChart = () => {
    return (
        <div className='chart'>
            <div className='lineChart'>
                <LineChart/>
            </div>
            <div className='lineChart'>
                <BarChart/>
            </div>
            <div className='lineChart'>
                <DoughnutChart/>
            </div>
        </div>
    )
}

export default ReactChart
