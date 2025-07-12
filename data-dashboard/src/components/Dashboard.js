import React, { useContext } from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import { BarChart } from "@mui/x-charts/BarChart";
import { Row, Col, Container, Button } from "react-bootstrap";
import Paper from "@mui/material/Paper";
import { LanguageContext } from "../LanguageContext";

const translations = {
  en: {
    title: "Ottawa Stats",
    greeting: "Hi",
    subtitle: "Ottawa so far in 2025...",
    employed: "Employed",
    population: "Population",
    unemployed: "Unemployed",
    participation: "Participation Rate",
    chartTitle: "Number of Employed People in Ottawa and Gatineau since 2020",
    months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  },
  fr: {
    title: "Statistiques d'Ottawa",
    greeting: "Salut",
    subtitle: "Ottawa jusqu'à présent en 2025...",
    employed: "Employés",
    population: "Population",
    unemployed: "Sans emploi",
    participation: "Taux de participation",
    chartTitle:
      "Nombre de personnes employées à Ottawa et Gatineau depuis 2020",
    months: ["Janv", "Févr", "Mars", "Avr", "Mai", "Juin"],
  },
};

const Dashboard = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language] || translations.en;

  const employmentDataset = [
    { year: "2020", ottawa: 596700, gatin: 173200 },
    { year: "2021", ottawa: 616400, gatin: 180500 },
    { year: "2022", ottawa: 650500, gatin: 192700 },
    { year: "2023", ottawa: 691300, gatin: 192800 },
    { year: "2024", ottawa: 704300, gatin: 188700 },
    { year: "2025", ottawa: 697600, gatin: 187600 },
  ];

  const peopleFormatter = (value) => `${value.toLocaleString()} people`;

  const horizontalChartSetting = {
    xAxis: [
      {
        tickLabelInterval: (index) => index % 3 === 0,
        margin: { right: 200 },
      },
    ],
    height: 400,
    margin: { left: 0, right: 100 },
  };

  return (
    <Container fluid className="dashboard-container py-4">
      <Row>
        <Col md={2}>
          <div
            className="sidebar text-white gy-4 rounded-4 border border-secondary shadow-lg p-3 ms-1 mt-2 mb-2"
            style={{ height: "98%", backgroundColor: "#11171d" }}
          >
            <h2 className="display-6 fw-bold fs-4 mb-5">{t.title}</h2>
            <Button variant="light" className="w-100 mb-3 rounded-pill">
              {t.greeting}
            </Button>
          </div>
        </Col>
        <Col md={10}>
          <Row
            className="gy-4 rounded-4 border border-secondary shadow-lg ms-0 me-1 pb-3 px-3 mt-2"
            style={{ backgroundColor: "#11171d" }}
          >
            <h5 className="px-3 display-6 fs-4 text-white fw-bold shadow-lg">
              {t.subtitle}
            </h5>

            {[
              {
                label: t.employed,
                data: [705700, 708300, 713500, 711600, 707800, 697600],
              },
              {
                label: t.population,
                data: [1073300, 1075300, 1077400, 1079500, 1081500, 1083600],
              },
              {
                label: t.unemployed,
                data: [43100, 41600, 41400, 40900, 42100, 45900],
              },
              {
                label: t.participation,
                data: [69.8, 69.7, 70.1, 69.7, 69.3, 68.6],
              },
            ].map((chart, index) => (
              <Col md={3} key={index}>
                <Paper
                  variant="outlined"
                  className="p-0 rounded-4 border border-secondary"
                >
                  <h5 className="pt-3 px-3 display-6 fs-6 text-white fw-bold">
                    {chart.label}
                  </h5>
                  <LineChart
                    xAxis={[
                      {
                        data: t.months,
                        scaleType: "point",
                        axisLine: { stroke: "transparent" },
                        tickLine: { stroke: "transparent" },
                      },
                    ]}
                    yAxis={[{ position: "none" }]}
                    series={[{ data: chart.data }]}
                    slotProps={{ legend: { hidden: true } }}
                    layout="horizontal"
                  />
                </Paper>
              </Col>
            ))}
          </Row>

          <Row
            className="rounded-4 border border-secondary shadow-lg ms-0 me-1 p-3 mt-3"
            style={{ backgroundColor: "#11171d" }}
          >
            <Paper
              variant="outlined"
              className="p-0 rounded-4 border border-secondary"
            >
              <h5 className="pt-3 px-3 display-6 fs-3 text-white fw-bold pb-3">
                {t.chartTitle}
              </h5>
              <BarChart
                dataset={employmentDataset}
                yAxis={[{ scaleType: "band", dataKey: "year", width: 60 }]}
                series={[
                  {
                    dataKey: "ottawa",
                    label: "Ottawa",
                    valueFormatter: peopleFormatter,
                    stack: "total",
                    color: "#00A78D",
                  },
                  {
                    dataKey: "gatin",
                    label: "Gatineau",
                    valueFormatter: peopleFormatter,
                    stack: "total",
                    color: "#003DA5",
                  },
                ]}
                layout="horizontal"
                {...horizontalChartSetting}
                sx={{
                  "& .MuiChartsAxis-tickLabel": {
                    maxWidth: "none",
                    textOverflow: "unset",
                    overflow: "visible",
                    whiteSpace: "nowrap",
                    fontSize: "1rem",
                  },
                }}
              />
            </Paper>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
