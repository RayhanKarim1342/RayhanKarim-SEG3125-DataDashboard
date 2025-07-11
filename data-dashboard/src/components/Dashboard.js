import React from "react";
import { ChartContainer } from "@mui/x-charts/ChartContainer";
import { BarPlot } from "@mui/x-charts/BarChart";
import { LineChart } from "@mui/x-charts/LineChart";
import { Row, Col, Container, Button } from "react-bootstrap";
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
          <div
            className="sidebar text-white gy-4 rounded-4 border border-dark-subtle shadow-lg p-3 ms-1 mt-2 mb-2"
            style={{ height: "98%" }}
          >
            <h2 className="display-6 fw-bold fs-4 mb-5">Ottawa Stats</h2>
            <Button variant="light" className="w-100 mb-3 rounded-pill">
              Hi
            </Button>
          </div>
        </Col>
        <Col md={10}>
          <Row className="gy-4 rounded-4 border border-dark-subtle shadow-lg ms-0 me-1 p-3 mt-2">
            <Col md={3}>
              <Paper variant="outlined" className="p-0 rounded-4">
                <h5 className="pt-3 px-3">Line Chart Example</h5>
                <LineChart
                  xAxis={[
                    {
                      data: ["Sep", "Oct", "Nov", "Dec", "Jan", "Feb"],
                      scaleType: "point",
                      color: "#fff",
                      tickLabelStyle: { fill: "#000" },
                      axisLine: { stroke: "transparent" },
                      tickLine: { stroke: "transparent" },
                    },
                  ]}
                  yAxis={[
                    {
                      position: "none",
                    },
                  ]}
                  series={[
                    {
                      data: [2, 5.5, 2, 8.5, 1.5, 5],
                    },
                  ]}
                  slotProps={{
                    legend: { hidden: true },
                  }}
                />
              </Paper>
            </Col>
            <Col md={3}>
              <Paper variant="outlined" className="p-0 rounded-4">
                <h5 className="pt-3 px-3">Line Chart Example</h5>
                <LineChart
                  xAxis={[
                    {
                      data: ["Sep", "Oct", "Nov", "Dec", "Jan", "Feb"],
                      scaleType: "point",
                      color: "#fff",
                      tickLabelStyle: { fill: "#000" },
                      axisLine: { stroke: "transparent" },
                      tickLine: { stroke: "transparent" },
                    },
                  ]}
                  yAxis={[
                    {
                      position: "none",
                    },
                  ]}
                  series={[
                    {
                      data: [2, 5.5, 2, 8.5, 1.5, 5],
                    },
                  ]}
                  slotProps={{
                    legend: { hidden: true },
                  }}
                />
              </Paper>
            </Col>
            <Col md={3}>
              <Paper variant="outlined" className="p-0 rounded-4">
                <h5 className="pt-3 px-3">Line Chart Example</h5>
                <LineChart
                  xAxis={[
                    {
                      data: ["Sep", "Oct", "Nov", "Dec", "Jan", "Feb"],
                      scaleType: "point",
                      color: "#fff",
                      tickLabelStyle: { fill: "#000" },
                      axisLine: { stroke: "transparent" },
                      tickLine: { stroke: "transparent" },
                    },
                  ]}
                  yAxis={[
                    {
                      position: "none",
                    },
                  ]}
                  series={[
                    {
                      data: [2, 5.5, 2, 8.5, 1.5, 5],
                    },
                  ]}
                  slotProps={{
                    legend: { hidden: true },
                  }}
                />
              </Paper>
            </Col>
            <Col md={3}>
              <Paper variant="outlined" className="p-0 rounded-4">
                <h5 className="pt-3 px-3">Line Chart Example</h5>
                <LineChart
                  xAxis={[
                    {
                      data: ["Sep", "Oct", "Nov", "Dec", "Jan", "Feb"],
                      scaleType: "point",
                      color: "#fff",
                      tickLabelStyle: { fill: "#000" },
                      axisLine: { stroke: "transparent" },
                      tickLine: { stroke: "transparent" },
                    },
                  ]}
                  yAxis={[
                    {
                      position: "none",
                    },
                  ]}
                  series={[
                    {
                      data: [2, 5.5, 2, 8.5, 1.5, 5],
                    },
                  ]}
                  slotProps={{
                    legend: { hidden: true },
                  }}
                />
              </Paper>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
