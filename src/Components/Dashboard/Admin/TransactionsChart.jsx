import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts'

const data = [
    {name : "january" , sales : 2200},
    {name : "february" , sales : 7850},
    {name : "march" , sales : 4760},
    {name : "april" , sales : 3320},
    {name : "may" , sales : 680},
    {name : "june" , sales : 9300},
    {name : "july" , sales : 6100},
    {name : "august" , sales : 7800},
    {name : "september" , sales : 6200},
    {name : "october" , sales : 1300},
    {name : "november" , sales : 4500},
    {name : "december" , sales : 3200}
]

export default function TransactionsChart() {
  return (
    <div>
        <LineChart width={830} height={300} data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip/>
            <Legend/>
            <Line strokeWidth={2} type="monotone" stroke='#22c55e' dataKey="sales"/>
        </LineChart>
        <p className='bg-green-500'></p>
    </div>
  )
}
