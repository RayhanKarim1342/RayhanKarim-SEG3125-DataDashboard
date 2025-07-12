import React from "react";
import { LineChart, markElementClasses } from "@mui/x-charts/LineChart";
import { Row, Col, Container, Button } from "react-bootstrap";
import Paper from "@mui/material/Paper";

const Dashboard = () => {
  return (
    <Container fluid className="dashboard-container py-4">
      <Row>
        <Col md={2}>
          <div
            className="sidebar text-white gy-4 rounded-4 border border-secondary shadow-lg p-3 ms-1 mt-2 mb-2"
            style={{ height: "98%", backgroundColor: "#11171d" }}
          >
            <h2 className="display-6 fw-bold fs-4 mb-5">Ottawa Stats</h2>
            <Button variant="light" className="w-100 mb-3 rounded-pill">
              Hi
            </Button>
          </div>
        </Col>
        <Col md={10}>
          <Row
            className="gy-4 rounded-4 border border-secondary shadow-lg ms-0 me-1 p-3 mt-2"
            style={{ backgroundColor: "#11171d" }}
          >
            <Col md={3}>
              <Paper
                variant="outlined"
                className="p-0 rounded-4 border border-secondary"
              >
                <h5 className="pt-3 px-3 display-6 fs-5 text-white fw-bold">
                  Employed
                </h5>
                <LineChart
                  xAxis={[
                    {
                      data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                      scaleType: "point",
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
                      data: [705700, 708300, 713500, 711600, 707800, 697600],
                    },
                  ]}
                  slotProps={{
                    legend: { hidden: true },
                  }}
                />
              </Paper>
            </Col>
            <Col md={3}>
              <Paper
                variant="outlined"
                className="p-0 rounded-4 border border-secondary"
              >
                <h5 className="pt-3 px-3 display-6 fs-5 text-white fw-bold">
                  Population
                </h5>
                <LineChart
                  xAxis={[
                    {
                      data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                      scaleType: "point",
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
                      data: [
                        1073300, 1075300, 1077400, 1079500, 1081500, 1083600,
                      ],
                    },
                  ]}
                  slotProps={{
                    legend: { hidden: true },
                  }}
                />
              </Paper>
            </Col>
            <Col md={3}>
              <Paper
                variant="outlined"
                className="p-0 rounded-4 border border-secondary"
              >
                <h5 className="pt-3 px-3 display-6 fs-5 text-white fw-bold">
                  Unemployment
                </h5>
                <LineChart
                  xAxis={[
                    {
                      data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                      scaleType: "point",
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
                      data: [43100, 41600, 41400, 40900, 42100, 45900],
                    },
                  ]}
                  slotProps={{
                    legend: { hidden: true },
                  }}
                />
              </Paper>
            </Col>
            <Col md={3}>
              <Paper
                variant="outlined"
                className="p-0 rounded-4 border border-secondary"
              >
                <h5 className="pt-3 px-3 display-6 fs-5 text-white fw-bold">
                  Participation Rate
                </h5>
                <LineChart
                  xAxis={[
                    {
                      data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                      scaleType: "point",
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
                      data: [69.8, 69.7, 70.1, 69.7, 69.3, 68.6],
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
