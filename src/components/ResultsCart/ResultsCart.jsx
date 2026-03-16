import React from 'react';
import { Line, LineChart } from 'recharts';


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


        </div>
    );
};

export default ResultsCart;