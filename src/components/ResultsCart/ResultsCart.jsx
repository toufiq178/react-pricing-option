import React from 'react';
import { AreaChart, Line, LineChart, XAxis, YAxis, Area, Tooltip, CartesianGrid, BarChart, Bar, RadialBarChart, RadialBar } from 'recharts';


const studentData = [
    {
        "id": 1,
        "name": "Rahim",
        "math": 85,
        "chemistry": 78,
        "physics": 90
    },
    {
        "id": 2,
        "name": "Karim",
        "math": 72,
        "chemistry": 80,
        "physics": 75
    },
    {
        "id": 3,
        "name": "Sadia",
        "math": 92,
        "chemistry": 88,
        "physics": 95
    },
    {
        "id": 4,
        "name": "Nusrat",
        "math": 67,
        "chemistry": 74,
        "physics": 70
    },
    {
        "id": 5,
        "name": "Hasan",
        "math": 81,
        "chemistry": 79,
        "physics": 84
    }
]

const ResultsCart = () => {
    return (
        <div >

            <LineChart style={{ width: '40%', height: 400 }} data={studentData}>
                <Line dataKey={"math"} stroke='red'></Line>
                <Line dataKey={"physics"} ></Line>
                <Line dataKey={"chemistry"} stroke='yellow'></Line>
            </LineChart>

            <AreaChart style={{ width: '100%', maxWidth: '400px', maxHeight: '40vh', aspectRatio: 1.618 }} data={studentData}>

                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey={"name"}  ></XAxis>
                <YAxis dataKey={"math"}  ></YAxis>
                <Tooltip />
                <Area dataKey="physics" stroke="#8884d8" fill="#8884d8"></Area>

            </AreaChart>

            <BarChart style={{ width: '100%', maxWidth: '300px', maxHeight: '70vh', aspectRatio: 1.618 }} data={studentData}>
                
                <XAxis dataKey="name" />
                <YAxis width="auto" />
                <Bar dataKey={"math"} fill='#8884d8'/>
            </BarChart >

            <RadialBarChart  style={{ width: '100%', maxWidth: '700px', maxHeight: '80vh', aspectRatio: 1.618 }} data={studentData}>

                <RadialBar label={{ position: 'insideStart', fill: '#fff' }} background dataKey="math"/>
            </RadialBarChart>
        </div>
    );
};

export default ResultsCart;