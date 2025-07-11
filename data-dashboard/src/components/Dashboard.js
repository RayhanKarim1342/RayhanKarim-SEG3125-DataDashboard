import React from "react";
import { ChartContainer } from "@mui/x-charts/ChartContainer";
import { BarPlot } from "@mui/x-charts/BarChart";
import { LinePlot } from "@mui/x-charts/LineChart";
import { Row, Col, Container } from "react-bootstrap";
import Paper from "@mui/material/Paper";

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const xLabels = [
  "Page A",
  "Page B",
  "Page C",
  "Page D",
  "Page E",
  "Page F",
  "Page G",
];

const lineData = [100, 200, 150, 300, 250, 400, 350];

const Dashboard = () => {
  return (
    <Container fluid className="dashboard-container py-4">
      <Row>
        <Col md={2}>
          <div className="sidebar text-white gy-4 rounded-4 border border-dark-subtle shadow-lg p-3 ms-2">
            <h2>Dashboard Sidebar</h2>
            <ul>
              <li>Overview</li>
              <li>Reports</li>
              <li>Settings</li>
            </ul>
          </div>
        </Col>
        <Col md={10}>
          <Row className="gy-4 rounded-4 border border-dark-subtle shadow-lg ms-5 me-5 p-3">
            <Col md={6}>
              <Paper variant="outlined" className="p-3 rounded-4">
                <h5>Bar Chart Example</h5>
                <ChartContainer
                  width={320}
                  height={250}
                  series={[{ data: uData, label: "uv", type: "bar" }]}
                  xAxis={[{ scaleType: "band", data: xLabels }]}
                >
                  <BarPlot />
                </ChartContainer>
              </Paper>
            </Col>
            <Col md={6}>
              <Paper variant="outlined" className="p-3 rounded-4">
                <h5>Line Chart Example</h5>
                <ChartContainer
                  width={320}
                  height={250}
                  series={[{ data: lineData, label: "Visits", type: "line" }]}
                  xAxis={[{ scaleType: "point", data: xLabels }]}
                >
                  <LinePlot />
                </ChartContainer>
              </Paper>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
