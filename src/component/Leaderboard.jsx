// src/components/Leaderboard.jsx
import React, { useState } from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import "./Leaderboard.css";

const data = [
  {
    id: 1,
    rankName: "Alice",
    calmarRatio: 1.5,
    overallProfit: 1500,
    avgDailyProfit: 50,
    winPercentage: 75,
    price: 100,
  },
  {
    id: 2,
    rankName: "Bob",
    calmarRatio: 1.2,
    overallProfit: 1200,
    avgDailyProfit: 40,
    winPercentage: 70,
    price: 80,
  },
  {
    id: 3,
    rankName: "Charlie",
    calmarRatio: 1.3,
    overallProfit: 1300,
    avgDailyProfit: 45,
    winPercentage: 72,
    price: 90,
  },
  {
    id: 4,
    rankName: "David",
    calmarRatio: 1.1,
    overallProfit: 1100,
    avgDailyProfit: 38,
    winPercentage: 68,
    price: 75,
  },
  {
    id: 5,
    rankName: "Eve",
    calmarRatio: 1.4,
    overallProfit: 1400,
    avgDailyProfit: 48,
    winPercentage: 73,
    price: 95,
  },
  {
    id: 6,
    rankName: "Frank",
    calmarRatio: 1.0,
    overallProfit: 1000,
    avgDailyProfit: 35,
    winPercentage: 65,
    price: 70,
  },
  {
    id: 7,
    rankName: "Grace",
    calmarRatio: 1.6,
    overallProfit: 1600,
    avgDailyProfit: 52,
    winPercentage: 77,
    price: 105,
  },
  {
    id: 8,
    rankName: "Hank",
    calmarRatio: 1.2,
    overallProfit: 1200,
    avgDailyProfit: 40,
    winPercentage: 70,
    price: 80,
  },
  {
    id: 9,
    rankName: "Ivy",
    calmarRatio: 1.3,
    overallProfit: 1300,
    avgDailyProfit: 45,
    winPercentage: 72,
    price: 90,
  },
  {
    id: 10,
    rankName: "Jack",
    calmarRatio: 1.1,
    overallProfit: 1100,
    avgDailyProfit: 38,
    winPercentage: 68,
    price: 75,
  },
];

const Leaderboard = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedValue, setSelectedValue] = useState(0);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (value) => {
    setAnchorEl(null);
    if (value !== undefined) {
      setSelectedValue(value);
    }
  };

  return (
    <div className="leaderboard-container">
      <div className="leaderboard-header">
        <h2>Basic Backtest</h2>
        <div className="buttons">
          <Button variant="contained" className="slippage-button">
            Slippage
          </Button>
          <Button
            variant="contained"
            className="dropdown-button"
            onClick={handleClick}
          >
            {selectedValue} ▼
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={() => handleClose()}
          >
            {[0, 1, 2, 3].map((number) => (
              <MenuItem key={number} onClick={() => handleClose(number)}>
                {number}
              </MenuItem>
            ))}
          </Menu>
        </div>
      </div>
      <table className="leaderboard-table">
        <thead>
          <tr>
            <th>Sr.No</th>
            <th>Rank Name</th>
            <th>Calmar Ratio</th>
            <th>Overall Profit</th>
            <th>Avg. Daily Profit</th>
            <th>Win % (Day)</th>
            <th>Price (Rs)</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.rankName}</td>
              <td>{user.calmarRatio}</td>
              <td>{user.overallProfit}</td>
              <td>{user.avgDailyProfit}</td>
              <td>{user.winPercentage}</td>
              <td>{user.price}</td>
              <td>
                <Button variant="contained" className="action-button">
                  Action
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
