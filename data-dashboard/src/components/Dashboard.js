import React, { useContext, useState } from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import { BarChart } from "@mui/x-charts/BarChart";
import { Row, Col, Container, Form } from "react-bootstrap";
import Paper from "@mui/material/Paper";
import { LanguageContext } from "../LanguageContext";
import Box from "@mui/material/Box";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const translations = {
  en: {
    title: "Ottawa Stats",
    greeting: "Hi",
    subtitle: "Ottawa so far in 2025...",
    employed: "Employed",
    population: "Population",
    unemployed: "Unemployed",
    participation: "Participation Rate",
    chartTitle: "Number of Employed People in Ottawa and Gatineau",
    months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    xLabel: "x labels",
    yLabel: "y labels",
    gridlines: "gridlines",
    chartTitle2: "Working Age Population in Ottawa and Gatineau",
    from: "From",
    to: "To",
    totalPop: "Total Population",
  },
  fr: {
    title: "Statistiques d'Ottawa",
    greeting: "Salut",
    subtitle: "Ottawa jusqu'à présent en 2025...",
    employed: "Employés",
    population: "Population",
    unemployed: "Sans emploi",
    participation: "Taux de participation",
    chartTitle: "Nombre de personnes employées à Ottawa et Gatineau",
    months: ["Jan", "Fév", "Mar", "Avr", "Mai", "Juin"],
    xLabel: "x étiquettes",
    yLabel: "x étiquettes",
    gridlines: "quadrillage",
    chartTitle2: "Population en âge de travailler à Ottawa et Gatineau",
    from: "De",
    to: "À",
    totalPop: "Population totale",
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

  const [showXAxisFig3, setShowXAxisFig3] = useState(true);
  const [showYAxisFig3, setShowYAxisFig3] = useState(true);
  const [showGridlinesFig3, setShowGridlinesFig3] = useState(false);

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

  const populationDataset = [
    { year: "2020-01", ottawa: 951900, gatin: 285000 },
    { year: "2020-02", ottawa: 953800, gatin: 285300 },
    { year: "2020-03", ottawa: 955800, gatin: 285700 },
    { year: "2020-04", ottawa: 957600, gatin: 286000 },
    { year: "2020-05", ottawa: 959300, gatin: 286200 },
    { year: "2020-06", ottawa: 960900, gatin: 286500 },
    { year: "2020-07", ottawa: 962400, gatin: 286700 },
    { year: "2020-08", ottawa: 963900, gatin: 287000 },
    { year: "2020-09", ottawa: 965200, gatin: 287300 },
    { year: "2020-10", ottawa: 966300, gatin: 287600 },
    { year: "2020-11", ottawa: 967400, gatin: 287800 },
    { year: "2020-12", ottawa: 968300, gatin: 288000 },
    { year: "2021-01", ottawa: 969100, gatin: 288200 },
    { year: "2021-02", ottawa: 970000, gatin: 288500 },
    { year: "2021-03", ottawa: 970800, gatin: 288700 },
    { year: "2021-04", ottawa: 971700, gatin: 288900 },
    { year: "2021-05", ottawa: 972300, gatin: 289200 },
    { year: "2021-06", ottawa: 973200, gatin: 289400 },
    { year: "2021-07", ottawa: 974300, gatin: 289700 },
    { year: "2021-08", ottawa: 975700, gatin: 289900 },
    { year: "2021-09", ottawa: 977200, gatin: 290100 },
    { year: "2021-10", ottawa: 978900, gatin: 290300 },
    { year: "2021-11", ottawa: 980600, gatin: 290500 },
    { year: "2021-12", ottawa: 982300, gatin: 290700 },
    { year: "2022-01", ottawa: 984100, gatin: 290900 },
    { year: "2022-02", ottawa: 985900, gatin: 291100 },
    { year: "2022-03", ottawa: 987500, gatin: 291200 },
    { year: "2022-04", ottawa: 989100, gatin: 291400 },
    { year: "2022-05", ottawa: 990700, gatin: 291600 },
    { year: "2022-06", ottawa: 992300, gatin: 291900 },
    { year: "2022-07", ottawa: 993900, gatin: 292200 },
    { year: "2022-08", ottawa: 995700, gatin: 292500 },
    { year: "2022-09", ottawa: 997600, gatin: 293000 },
    { year: "2022-10", ottawa: 999600, gatin: 293400 },
    { year: "2022-11", ottawa: 1001500, gatin: 293700 },
    { year: "2022-12", ottawa: 1003500, gatin: 294000 },
    { year: "2023-01", ottawa: 1005500, gatin: 294400 },
    { year: "2023-02", ottawa: 1007800, gatin: 294800 },
    { year: "2023-03", ottawa: 1010400, gatin: 295300 },
    { year: "2023-04", ottawa: 1012800, gatin: 295600 },
    { year: "2023-05", ottawa: 1015400, gatin: 296000 },
    { year: "2023-06", ottawa: 1018100, gatin: 296500 },
    { year: "2023-07", ottawa: 1021000, gatin: 296900 },
    { year: "2023-08", ottawa: 1023900, gatin: 297300 },
    { year: "2023-09", ottawa: 1026700, gatin: 297700 },
    { year: "2023-10", ottawa: 1029600, gatin: 298100 },
    { year: "2023-11", ottawa: 1032500, gatin: 298500 },
    { year: "2023-12", ottawa: 1035400, gatin: 298900 },
    { year: "2024-01", ottawa: 1038500, gatin: 299200 },
    { year: "2024-02", ottawa: 1041800, gatin: 299600 },
    { year: "2024-03", ottawa: 1045100, gatin: 300000 },
    { year: "2024-04", ottawa: 1048500, gatin: 300400 },
    { year: "2024-05", ottawa: 1051300, gatin: 300800 },
    { year: "2024-06", ottawa: 1054500, gatin: 301300 },
    { year: "2024-07", ottawa: 1057600, gatin: 301700 },
    { year: "2024-08", ottawa: 1060600, gatin: 302200 },
    { year: "2024-09", ottawa: 1063700, gatin: 302700 },
    { year: "2024-10", ottawa: 1066400, gatin: 303200 },
    { year: "2024-11", ottawa: 1068900, gatin: 303600 },
    { year: "2024-12", ottawa: 1071100, gatin: 304000 },
    { year: "2025-01", ottawa: 1073300, gatin: 304300 },
    { year: "2025-02", ottawa: 1075300, gatin: 304700 },
    { year: "2025-03", ottawa: 1077400, gatin: 305100 },
    { year: "2025-04", ottawa: 1079600, gatin: 305500 },
    { year: "2025-05", ottawa: 1081500, gatin: 305800 },
    { year: "2025-06", ottawa: 1083600, gatin: 306300 },
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

  const [startDateFig3, setStartDateFig3] = useState(monthOptions[0]);
  const [endDateFig3, setEndDateFig3] = useState(
    monthOptions[monthOptions.length - 1]
  );

  const filteredPopulationDataset = populationDataset.filter(
    (entry) =>
      new Date(entry.year) >= new Date(startDateFig3) &&
      new Date(entry.year) <= new Date(endDateFig3)
  );

  const xAxisData = filteredPopulationDataset.map((entry) => entry.year);
  const ottawaData = filteredPopulationDataset.map((entry) => entry.ottawa);
  const gatinData = filteredPopulationDataset.map((entry) => entry.gatin);
  const totalData = filteredPopulationDataset.map(
    (entry) => entry.ottawa + entry.gatin
  );

  const validEndOptionsFig3 = monthOptions.filter(
    (date) => new Date(date) >= new Date(startDateFig3)
  );
  const validStartOptionsFig3 = monthOptions.filter(
    (date) => new Date(date) <= new Date(endDateFig3)
  );

  const peopleFormatter = (value) => {
    const formatter = new Intl.NumberFormat(
      language === "fr" ? "fr-FR" : "en-US"
    );
    return `${formatter.format(value)} ${
      language === "fr" ? "personnes" : "people"
    }`;
  };

  const thousandFormatter = (value) => {
    const formatted = new Intl.NumberFormat(
      language === "fr" ? "fr-FR" : "en-US",
      {
        maximumFractionDigits: 0,
      }
    ).format(value / 1000);
    return `${formatted}${language === "fr" ? "k" : "k"}`;
  };

  const millionFormatter = (value) => {
    const formatted = new Intl.NumberFormat(
      language === "fr" ? "fr-FR" : "en-US",
      {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }
    ).format(value / 1_000_000);
    return `${formatted}${language === "fr" ? "M" : "M"}`;
  };

  const percentFormatter = (value) => {
    const formatted = new Intl.NumberFormat(
      language === "fr" ? "fr-FR" : "en-US",
      {
        maximumFractionDigits: 0,
      }
    ).format(value);
    return `${formatted}%`;
  };

  const standardFormatter = (value) => {
    const locale = language === "fr" ? "fr-FR" : "en-US";

    return new Intl.NumberFormat(locale, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
      useGrouping: true,
    }).format(value);
  };

  const horizontalChartSetting = {
    xAxis: [
      {
        tickLabelInterval: (index) => index % 3 === 0,
      },
    ],
    height: 800,
    margin: { left: 0, right: 0 },
    position: showXAxisFig1 ? "bottom" : "none",
  };

  const [showTotal, setShowTotal] = useState(true);
  const [showOttawa, setShowOttawa] = useState(true);
  const [showGatineau, setShowGatineau] = useState(true);

  const chartSeries = [];

  if (showTotal) {
    chartSeries.push({ data: totalData, label: t.totalPop, area: true });
  }
  if (showOttawa) {
    chartSeries.push({ data: ottawaData, label: "Ottawa", area: true });
  }
  if (showGatineau) {
    chartSeries.push({ data: gatinData, label: "Gatineau", area: true });
  }

  return (
    <Container className="dashboard-container py-2">
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
                    height={200}
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
                xAxis={[
                  {
                    position: showXAxisFig2 ? "bottom" : "none",
                    valueFormatter: thousandFormatter,
                  },
                ]}
                grid={{
                  vertical: showGridlinesFig2,
                }}
                margin={[{ left: showXAxisFig2 ? 0 : 50 }]}
              />
            </Paper>
            <Form className="d-flex align-items-center flex-wrap mt-4 gap-3">
              <div className="border border-secondary rounded-pill fw-bold bg-dark shadow py-1 px-3 text-white">
                <Form.Check
                  type="switch"
                  label={t.xLabel}
                  checked={showXAxisFig2}
                  onChange={(e) => setShowXAxisFig2(e.target.checked)}
                />
              </div>

              <div className="border border-secondary rounded-pill fw-bold bg-dark shadow py-1 px-3 text-white">
                <Form.Check
                  type="switch"
                  label={t.yLabel}
                  checked={showYAxisFig2}
                  onChange={(e) => setShowYAxisFig2(e.target.checked)}
                />
              </div>

              <div className="border border-secondary rounded-pill fw-bold bg-dark shadow py-1 px-3 text-white">
                <Form.Check
                  type="switch"
                  label={t.gridlines}
                  checked={showGridlinesFig2}
                  onChange={(e) => setShowGridlinesFig2(e.target.checked)}
                />
              </div>

              <div className="d-flex align-items-center gap-3 ms-auto">
                <div className="border border-secondary rounded-pill fw-bold bg-dark shadow py-1 ps-3 pe-1 text-white">
                  <Form.Group
                    controlId="startDateSelect"
                    className="d-flex flex-column"
                  >
                    <div className="d-flex align-items-center gap-2">
                      <Form.Label className="fw-bold text-white mb-0 text-nowrap">
                        {t.from}
                      </Form.Label>
                      <Form.Select
                        className="bg-dark text-white border-0 fw-bold rounded-pill"
                        value={startDateFig2}
                        onChange={(e) => setStartDateFig2(e.target.value)}
                      >
                        {validStartOptionsFig2.map((date) => (
                          <option key={date} value={date}>
                            {date}
                          </option>
                        ))}
                      </Form.Select>
                    </div>
                  </Form.Group>
                </div>

                <div className="border border-secondary rounded-pill fw-bold bg-dark shadow py-1 ps-3 pe-1 text-white">
                  <Form.Group
                    controlId="endDateSelect"
                    className="d-flex flex-column"
                  >
                    <div className="d-flex align-items-center gap-2">
                      <Form.Label className="fw-bold text-white mb-0 text-nowrap">
                        {t.to}
                      </Form.Label>
                      <Form.Select
                        className="bg-dark text-white border-0 fw-bold rounded-pill"
                        value={endDateFig2}
                        onChange={(e) => setEndDateFig2(e.target.value)}
                      >
                        {validEndOptionsFig2.map((date) => (
                          <option key={date} value={date}>
                            {date}
                          </option>
                        ))}
                      </Form.Select>
                    </div>
                  </Form.Group>
                </div>
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
                {t.chartTitle2}
              </h5>

              <LineChart
                xAxis={[
                  {
                    data: xAxisData,
                    scaleType: "point",
                    position: showXAxisFig3 ? "bottom" : "none",
                  },
                ]}
                series={[
                  ...chartSeries.map((series) => ({
                    ...series,
                    valueFormatter: series.valueFormatter || standardFormatter,
                  })),
                ]}
                height={800}
                margin={{
                  top: 20,
                  bottom: 10,
                  left: showYAxisFig3 ? 0 : 50,
                  right: 50,
                }}
                yAxis={[
                  {
                    width: 100,
                    position: showYAxisFig3 ? "left" : "none",
                    valueFormatter: standardFormatter,
                  },
                ]}
                grid={{ horizontal: showGridlinesFig3 }}
              />
              <Box
                display="flex"
                justifyContent="center" // 👈 This centers horizontally
                gap={2}
                mb={2}
              >
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={showTotal}
                      onChange={() => setShowTotal((prev) => !prev)}
                    />
                  }
                  label={t.totalPop}
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={showOttawa}
                      onChange={() => setShowOttawa((prev) => !prev)}
                    />
                  }
                  label="Ottawa"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={showGatineau}
                      onChange={() => setShowGatineau((prev) => !prev)}
                    />
                  }
                  label="Gatineau"
                />
              </Box>
            </Paper>
            <Form className="d-flex align-items-center flex-wrap mt-4 gap-3">
              <div className="border border-secondary rounded-pill fw-bold bg-dark shadow py-1 px-3 text-white">
                <Form.Check
                  type="switch"
                  label={t.xLabel}
                  checked={showXAxisFig3}
                  onChange={(e) => setShowXAxisFig3(e.target.checked)}
                />
              </div>

              <div className="border border-secondary rounded-pill fw-bold bg-dark shadow py-1 px-3 text-white">
                <Form.Check
                  type="switch"
                  label={t.yLabel}
                  checked={showYAxisFig3}
                  onChange={(e) => setShowYAxisFig3(e.target.checked)}
                />
              </div>

              <div className="border border-secondary rounded-pill fw-bold bg-dark shadow py-1 px-3 text-white">
                <Form.Check
                  type="switch"
                  label={t.gridlines}
                  checked={showGridlinesFig3}
                  onChange={(e) => setShowGridlinesFig3(e.target.checked)}
                />
              </div>

              <div className="d-flex align-items-center gap-3 ms-auto">
                <div className="border border-secondary rounded-pill fw-bold bg-dark shadow py-1 ps-3 pe-1 text-white">
                  <Form.Group
                    controlId="startDateSelect"
                    className="d-flex flex-column"
                  >
                    <div className="d-flex align-items-center gap-2">
                      <Form.Label className="fw-bold text-white mb-0 text-nowrap">
                        {t.from}
                      </Form.Label>
                      <Form.Select
                        className="bg-dark text-white border-0 fw-bold rounded-pill"
                        value={startDateFig3}
                        onChange={(e) => setStartDateFig3(e.target.value)}
                      >
                        {validStartOptionsFig3.map((date) => (
                          <option key={date} value={date}>
                            {date}
                          </option>
                        ))}
                      </Form.Select>
                    </div>
                  </Form.Group>
                </div>

                <div className="border border-secondary rounded-pill fw-bold bg-dark shadow py-1 ps-3 pe-1 text-white">
                  <Form.Group
                    controlId="endDateSelect"
                    className="d-flex flex-column"
                  >
                    <div className="d-flex align-items-center gap-2">
                      <Form.Label className="fw-bold text-white mb-0 text-nowrap">
                        {t.to}
                      </Form.Label>
                      <Form.Select
                        className="bg-dark text-white border-0 fw-bold rounded-pill"
                        value={endDateFig3}
                        onChange={(e) => setEndDateFig3(e.target.value)}
                      >
                        {validEndOptionsFig3.map((date) => (
                          <option key={date} value={date}>
                            {date}
                          </option>
                        ))}
                      </Form.Select>
                    </div>
                  </Form.Group>
                </div>
              </div>
            </Form>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
