import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TransactionPage = () => {
    const [month, setMonth] = useState('March');
    const [transactions, setTransactions] = useState([]);
    const [statistics, setStatistics] = useState({});
    const [barChartData, setBarChartData] = useState({});
    const [pieChartData, setPieChartData] = useState({});
    
    const fetchTransactions = async () => {
        const response = await axios.get(`/api/transactions?month=${month}`);
        setTransactions(response.data.transactions);
    };
    
    const fetchStatistics = async () => {
        const response = await axios.get(`/api/statistics?month=${month}`);
        setStatistics(response.data);
    };
    
    const fetchCharts = async () => {
        const barResponse = await axios.get(`/api/bar-chart?month=${month}`);
        setBarChartData(barResponse.data);
        
        const pieResponse = await axios.get(`/api/pie-chart?month=${month}`);
        setPieChartData(pieResponse.data);
    };

    useEffect(() => {
        fetchTransactions();
        fetchStatistics();
        fetchCharts();
    }, [month]);

    return (
        <div>
            <h1>Transactions</h1>
            <select onChange={(e) => setMonth(e.target.value)} value={month}>
                {/* Add options for each month */}
            </select>
            <input type="text" placeholder="Search transactions..." />
            <table>
                {/* Render transactions */}
            </table>
            <div>
                <h2>Statistics</h2>
                {/* Render statistics */}
            </div>
            <div>
                <h2>Bar Chart</h2>
                {/* Render bar chart */}
            </div>
            <div>
                <h2>Pie Chart</h2>
                {/* Render pie chart */}
            </div>
        </div>
    );
};

export default TransactionPage;
