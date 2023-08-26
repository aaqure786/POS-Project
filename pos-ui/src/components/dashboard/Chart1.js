import React from 'react'
import moment from 'moment';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, CartesianGrid } from 'recharts'

const Chart1 = () => {
    const startDate = moment(moment().subtract(30, 'days')).format("DD-MMMM-YYYY")

    const endDate = moment().format("DD-MMMM-YYYY")
    function enumerateDaysBetweenDates(startDate, endDate) {
        let chartData = []
        while (moment(startDate) <= moment(endDate)) {
            let val ={ value: "0", date:startDate}
            chartData.push(val);
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
        <div className=' w-[96%] mx-[2%] shadow-md  shadow-gray-400 h-[500px] border-t-[2px] border-blue-600 rounded-xl'>
            <h1 className='text-xl font-semibold text-start p-5'>Sales Last 30 Days</h1>
            <div className='mt-2 w-full'>
                <ResponsiveContainer  width={"100%"}   aspect={3}>
                    <LineChart width={"100%"}  height={"400px"} data={datesArray} >
                        <Line dataKey="value" />
                        <YAxis />
                        <CartesianGrid strokeDasharray="3 3"/>
                        <XAxis dataKey="date" interval={'preserveStartEnd'} 
                        angle={-45}
                         padding="no-gap"
                          minTickGap={-100}
                           dy={30}
                           tick={{fontSize:"11"}}
                        />
                        
                        
                    </LineChart>
                </ResponsiveContainer>


            </div>
        </div>
    )
}

export default Chart1