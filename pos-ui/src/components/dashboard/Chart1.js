import React from 'react'
import moment from 'moment';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, CartesianGrid, Tooltip, Legend } from 'recharts'

const Chart1 = () => {
    const startDate = moment(moment().subtract(29, 'days')).format("DD-MMMM-YYYY")

    const endDate = moment().format("DD-MMMM-YYYY")
    function enumerateDaysBetweenDates(startDate, endDate) {
        let chartData = []
        let n= 2

        while (moment(startDate) <= moment(endDate)) {
            let val = { value: n, date: startDate }
            chartData.push(val);
            n += 2
            startDate = moment(startDate).add(1, 'days').format("DD-MMMM-YYYY");
        }
        return chartData;
    }

    const datesArray = enumerateDaysBetweenDates(startDate, endDate)
    console.log(datesArray)
    // let cdata=[
    //     {
    //         value: "20",
    //         date:"8/20/2023"
    //     },
    //     {
    //         value: "24",
    //         date:"8/21/2023"
    //     },
    //     {
    //         value: "28",
    //         date:"8/22/2023"
    //     },
    //     {
    //         value: "22",
    //         date:"8/23/2023"
    //     },
    //     {
    //         value: "34",
    //         date:"8/24/2023"
    //     }
    // ]

    return (
        <ResponsiveContainer width={"100%"} height={"80%"}>
            <LineChart width={"100%"} height={"400px"} data={datesArray}   margin={{ left: 30, right: 30 }}>
                <YAxis label={{ value: 'Total Sales (PKR)', angle: -90, position: 'insideLeft' }} />

                

                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" interval={'preserveStartEnd'}
                    angle={-45}
                    padding={{left:25, right:25}}
                    minTickGap={-100}
                    dy={30}
                    dx={-30}
                    tick={{ fontSize: "11" }}
                    height={70}
                    

                />
                 <Tooltip />
                <Legend  verticalAlign='top' height={30}/>
                <Line dataKey="value" />

            </LineChart>
        </ResponsiveContainer>
    )
}

export default Chart1