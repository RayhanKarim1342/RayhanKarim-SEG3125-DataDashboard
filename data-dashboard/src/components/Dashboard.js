import React, { useContext, useState } from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import { BarChart } from "@mui/x-charts/BarChart";
import { Row, Col, Container, Form } from "react-bootstrap";
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
    xLabel: "Show x-axis labels",
    yLabel: "Show y-axis labels",
    gridlines: "Show gridlines",
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
    xLabel: "Afficher les étiquettes de l'axe des x",
    yLabel: "Afficher les étiquettes de l'axe des y",
    gridlines: "Afficher les lignes de grille",
  },
};

const Dashboard = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language] || translations.en;

  const [showXAxisFig1, setShowXAxisFig1] = useState(true);
  const [showYAxisFig1, setShowYAxisFig1] = useState(false);
  const [showGridlinesFig1, setShowGridlinesFig1] = useState(false);

  const [showXAxisFig2, setShowXAxisFig2] = useState(true);
  const [showYAxisFig2, setShowYAxisFig2] = useState(true);
  const [showGridlinesFig2, setShowGridlinesFig2] = useState(false);

  const employmentDataset = [
    { year: "2020-01", ottawa: 635900, gatin: 182800 },
    { year: "2020-02", ottawa: 627800, gatin: 181400 },
    { year: "2020-03", ottawa: 611600, gatin: 179700 },
    { year: "2020-04", ottawa: 585000, gatin: 169900 },
    { year: "2020-05", ottawa: 564200, gatin: 161600 },
    { year: "2020-06", ottawa: 555700, gatin: 159000 },
    { year: "2020-07", ottawa: 567100, gatin: 164800 },
    { year: "2020-08", ottawa: 579200, gatin: 168100 },
    { year: "2020-09", ottawa: 589600, gatin: 168800 },
    { year: "2020-10", ottawa: 591200, gatin: 170500 },
    { year: "2020-11", ottawa: 592700, gatin: 172200 },
    { year: "2020-12", ottawa: 596700, gatin: 173200 },
    { year: "2021-01", ottawa: 605200, gatin: 172200 },
    { year: "2021-02", ottawa: 616400, gatin: 173600 },
    { year: "2021-03", ottawa: 622300, gatin: 175600 },
    { year: "2021-04", ottawa: 625700, gatin: 177300 },
    { year: "2021-05", ottawa: 626100, gatin: 177200 },
    { year: "2021-06", ottawa: 628200, gatin: 177900 },
    { year: "2021-07", ottawa: 630500, gatin: 180900 },
    { year: "2021-08", ottawa: 625200, gatin: 183000 },
    { year: "2021-09", ottawa: 617800, gatin: 183100 },
    { year: "2021-10", ottawa: 613500, gatin: 182200 },
    { year: "2021-11", ottawa: 614200, gatin: 181200 },
    { year: "2021-12", ottawa: 616400, gatin: 180500 },
    { year: "2022-01", ottawa: 618200, gatin: 180700 },
    { year: "2022-02", ottawa: 623300, gatin: 184300 },
    { year: "2022-03", ottawa: 630400, gatin: 188500 },
    { year: "2022-04", ottawa: 641100, gatin: 193800 },
    { year: "2022-05", ottawa: 647200, gatin: 194000 },
    { year: "2022-06", ottawa: 643200, gatin: 193600 },
    { year: "2022-07", ottawa: 639400, gatin: 191500 },
    { year: "2022-08", ottawa: 638500, gatin: 191800 },
    { year: "2022-09", ottawa: 646300, gatin: 191200 },
    { year: "2022-10", ottawa: 646900, gatin: 190800 },
    { year: "2022-11", ottawa: 649700, gatin: 192600 },
    { year: "2022-12", ottawa: 650500, gatin: 192700 },
    { year: "2023-01", ottawa: 655500, gatin: 191400 },
    { year: "2023-02", ottawa: 655400, gatin: 188000 },
    { year: "2023-03", ottawa: 659100, gatin: 187300 },
    { year: "2023-04", ottawa: 660000, gatin: 189900 },
    { year: "2023-05", ottawa: 665100, gatin: 191000 },
    { year: "2023-06", ottawa: 672200, gatin: 191100 },
    { year: "2023-07", ottawa: 678400, gatin: 189800 },
    { year: "2023-08", ottawa: 683000, gatin: 190500 },
    { year: "2023-09", ottawa: 684300, gatin: 192000 },
    { year: "2023-10", ottawa: 689600, gatin: 193500 },
    { year: "2023-11", ottawa: 690800, gatin: 194500 },
    { year: "2023-12", ottawa: 691300, gatin: 192800 },
    { year: "2024-01", ottawa: 689300, gatin: 194000 },
    { year: "2024-02", ottawa: 689900, gatin: 195100 },
    { year: "2024-03", ottawa: 686800, gatin: 196600 },
    { year: "2024-04", ottawa: 682300, gatin: 194300 },
    { year: "2024-05", ottawa: 679500, gatin: 191200 },
    { year: "2024-06", ottawa: 679300, gatin: 189700 },
    { year: "2024-07", ottawa: 683200, gatin: 188900 },
    { year: "2024-08", ottawa: 690600, gatin: 188200 },
    { year: "2024-09", ottawa: 698100, gatin: 187900 },
    { year: "2024-10", ottawa: 702100, gatin: 188000 },
    { year: "2024-11", ottawa: 702000, gatin: 188400 },
    { year: "2024-12", ottawa: 704300, gatin: 188700 },
    { year: "2025-01", ottawa: 705700, gatin: 188500 },
    { year: "2025-02", ottawa: 708300, gatin: 188500 },
    { year: "2025-03", ottawa: 713500, gatin: 187600 },
    { year: "2025-04", ottawa: 711600, gatin: 187000 },
    { year: "2025-05", ottawa: 707800, gatin: 186900 },
    { year: "2025-06", ottawa: 697600, gatin: 187600 },
  ];

  const monthOptions = employmentDataset.map((item) => item.year);
  const [startDateFig2, setStartDateFig2] = useState(
    monthOptions[monthOptions.length - 6]
  );
  const [endDateFig2, setEndDateFig2] = useState(
    monthOptions[monthOptions.length - 1]
  );

  const employmentFilteredDataset = employmentDataset.filter(
    (item) => item.year >= startDateFig2 && item.year <= endDateFig2
  );

  const validEndOptionsFig2 = monthOptions.filter(
    (date) => new Date(date) >= new Date(startDateFig2)
  );
  const validStartOptionsFig2 = monthOptions.filter(
    (date) => new Date(date) <= new Date(endDateFig2)
  );

  const peopleFormatter = (value) => `${value.toLocaleString()} people`;
  const thousandFormatter = (value) => `${(value / 1000).toFixed(0)}k`;
  const millionFormatter = (value) => `${(value / 1000000).toFixed(2)}M`;
  const percentFormatter = (value) => `${value.toFixed(0)}%`;

  const horizontalChartSetting = {
    xAxis: [
      {
        tickLabelInterval: (index) => index % 3 === 0,
      },
    ],
    height: 400,
    margin: { left: 0, right: 0 },
    position: showXAxisFig1 ? "bottom" : "none",
  };

  return (
    <Container fluid className="dashboard-container py-4">
      <Row>
        <Col md={12}>
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
                formatter: thousandFormatter,
                yWidth: 40,
              },
              {
                label: t.population,
                data: [1073300, 1075300, 1077400, 1079500, 1081500, 1083600],
                formatter: millionFormatter,
                yWidth: 50,
              },
              {
                label: t.unemployed,
                data: [43100, 41600, 41400, 40900, 42100, 45900],
                formatter: thousandFormatter,
                yWidth: 30,
              },
              {
                label: t.participation,
                data: [69.8, 69.7, 70.1, 69.7, 69.3, 68.6],
                formatter: percentFormatter,
                yWidth: 40,
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
                        position: showXAxisFig1 ? "bottom" : "none",
                      },
                    ]}
                    yAxis={[
                      {
                        position: showYAxisFig1 ? "left" : "none",
                        valueFormatter: chart.formatter,
                        width: chart.yWidth,
                      },
                    ]}
                    series={[{ data: chart.data }]}
                    slotProps={{ legend: { hidden: true } }}
                    grid={{
                      vertical: showGridlinesFig1,
                      horizontal: showGridlinesFig1,
                    }}
                    layout="horizontal"
                  />
                </Paper>
              </Col>
            ))}
            <Form className="d-flex align-items-center mt-4">
              <div className="border border-secondary rounded-pill fw-bold bg-dark shadow py-1 px-2 text-white">
                <Form.Check
                  type="switch"
                  label={t.xLabel}
                  checked={showXAxisFig1}
                  onChange={(e) => setShowXAxisFig1(e.target.checked)}
                />
              </div>
              <div className="border border-secondary rounded-pill fw-bold bg-dark shadow py-1 px-2 text-white ms-3">
                <Form.Check
                  type="switch"
                  label={t.yLabel}
                  checked={showYAxisFig1}
                  onChange={(e) => setShowYAxisFig1(e.target.checked)}
                />
              </div>
              <div className="border border-secondary rounded-pill fw-bold bg-dark shadow py-1 px-2 text-white ms-3">
                <Form.Check
                  type="switch"
                  label={t.gridlines}
                  checked={showGridlinesFig1}
                  onChange={(e) => setShowGridlinesFig1(e.target.checked)}
                />
              </div>
            </Form>
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
                dataset={employmentFilteredDataset}
                yAxis={[
                  {
                    scaleType: "band",
                    dataKey: "year",
                    width: 60,
                    position: showYAxisFig2 ? "left" : "none",
                  },
                ]}
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
                xAxis={[{ position: showXAxisFig2 ? "bottom" : "none" }]}
                grid={{
                  vertical: showGridlinesFig2,
                }}
              />
            </Paper>
            <Form className="d-flex align-items-center mt-4">
              <div className="border border-secondary rounded-pill fw-bold bg-dark shadow py-1 px-2 text-white">
                <Form.Check
                  type="switch"
                  label={t.xLabel}
                  checked={showXAxisFig2}
                  onChange={(e) => setShowXAxisFig2(e.target.checked)}
                />
              </div>
              <div className="border border-secondary rounded-pill fw-bold bg-dark shadow py-1 px-2 text-white ms-3">
                <Form.Check
                  type="switch"
                  label={t.yLabel}
                  checked={showYAxisFig2}
                  onChange={(e) => setShowYAxisFig2(e.target.checked)}
                />
              </div>
              <div className="border border-secondary rounded-pill fw-bold bg-dark shadow py-1 px-2 text-white ms-3">
                <Form.Check
                  type="switch"
                  label={t.gridlines}
                  checked={showGridlinesFig2}
                  onChange={(e) => setShowGridlinesFig2(e.target.checked)}
                />
              </div>
              <div className="border border-secondary rounded-pill fw-bold bg-dark shadow py-1 px-2 text-white ms-3">
                <Form.Group controlId="startDateSelect">
                  <Form.Select
                    value={startDateFig2}
                    onChange={(e) => setStartDateFig2(e.target.value)}
                  >
                    {validStartOptionsFig2.map((date) => (
                      <option key={date} value={date}>
                        {date}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </div>

              <Form.Group controlId="endDateSelect">
                <Form.Select
                  value={endDateFig2}
                  onChange={(e) => setEndDateFig2(e.target.value)}
                >
                  {validEndOptionsFig2.map((date) => (
                    <option key={date} value={date}>
                      {date}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Form>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
