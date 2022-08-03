// React
import { useEffect, useState } from "react";

// Styles
import "./home.css";

// Components
import Navbar from "../../components/Navbar/Navbar";
import StatusBox from "../../components/StatusBox/StatusBox";

// MUI
// import TextField from "@mui/material/TextField";
import SpeedIcon from "@mui/icons-material/Speed";

// Requests
import {
  getAccounts,
  getAssets,
  getCustomers,
  getDataPoints,
  getDevices,
  getDocuments,
  getForms,
  getInvites,
  getMedia,
  getMessages,
  getNamespaces,
  getOrders,
  getPatients,
  getRelationships,
  getRules,
  getTemplates,
  getUsers,
  getWorkflows
} from "../../services/factoryFour/factoryFour";

// Types
import { StatusResponse } from "../../services/factoryFour/facotyFour.types";
import { Box, Slider, Stack } from "@mui/material";

const REQUESTS_LIST = [
  getAccounts,
  getAssets,
  getCustomers,
  getDataPoints,
  getDevices,
  getDocuments,
  getForms,
  getInvites,
  getMedia,
  getMessages,
  getNamespaces,
  getOrders,
  getPatients,
  getRelationships,
  getRules,
  getTemplates,
  getUsers,
  getWorkflows
];

function Home() {
  const [status, setStatus] = useState<StatusResponse[]>([]);
  const [time, setTime] = useState(15);
  const [error, setError] = useState(null);

  function getAllRequests() {
    return new Promise(async function (resolve, reject) {
      try {
        const all = await Promise.all(
          REQUESTS_LIST.map(async function (request) {
            const response = request();
            return response;
          })
        );
        resolve(all);
      } catch (error) {
        reject(error);
      }
    });
  }

  /* === Initial Request === */
  useEffect(() => {
    getAllRequests()
      .then(function (res) {
        setStatus(res as StatusResponse[]);
      })
      .catch(function (error) {
        setError(error);
      });
  }, []);

  /* === Interval Request === */
  useEffect(() => {
    const interval = setInterval(() => {
      getAllRequests()
        .then(function (res) {
          setStatus(res as StatusResponse[]);
        })
        .catch(function (error) {
          setError(error);
        });
    }, time * 1000);
    return () => {
      clearInterval(interval);
    };
  }, [time]);

  function handleChange(event: Event, newValue: number | number[]) {
    if (Number(newValue) >= 1) {
      setTime(newValue as number);
    } else {
      alert("The minimum refresh time you can set is 1 second.");
    }
  }

  return (
    <div className="home">
      <Navbar />
      <main>
        <h1 className="title">Your Enspoints</h1>
        <Box
          className="change-interval"
          sx={{ minWidth: 290, width: "60%", maxWidth: 400 }}
        >
          <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
            <Slider
              min={1}
              max={100}
              aria-label="Volume"
              value={time}
              defaultValue={1}
              valueLabelDisplay="auto"
              onChange={handleChange}
            />
            <SpeedIcon />
          </Stack>
        </Box>

        <div className="status-list">
          {status?.map((status, index) => (
            <StatusBox
              key={index}
              title={status?.name ?? "Unknown"}
              success={status?.success}
              time={status?.time}
              hostname={status?.hostname}
              error={status?.error}
              status={status.status}
            />
          ))}
        </div>
        {error && <h2>{error}</h2>}
      </main>
    </div>
  );
}

export default Home;
