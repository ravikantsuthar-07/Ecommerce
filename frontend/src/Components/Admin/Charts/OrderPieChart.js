import React from "react";
import Chart from "react-apexcharts";
import { Card, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const OrderStatusStatistics = () => {
    const chartOptions = {
        series: [1250, 2600, 2500, 4000],
        options: {
            chart: {
                type: "pie",
                toolbar: { show: false },
            },
            colors: ["#4B6BFB", "#00BFA6", "#FFB84C", "#FF4C4C"],
            stroke: { colors: ["#fff"], width: 1 },
            labels: ["Pending", "Confirmed", "Packaged", "Delivered"],
            plotOptions: {
                pie: {
                    expandOnClick: true,
                    dataLabels: {
                        offset: -8,
                    },
                },
            },
            dataLabels: {
                enabled: true,
                style: {
                    fontFamily: "Inter, sans-serif",
                    fontSize: "13px",
                    fontWeight: 500,
                },
            },
            legend: {
                position: "bottom",
                fontFamily: "Inter, sans-serif",
                fontSize: "13px",
                labels: { colors: "#6c757d" },
                itemMargin: { horizontal: 10, vertical: 5 },
            },
            responsive: [
                {
                    breakpoint: 992, // tablets
                    options: {
                        chart: { height: 320 },
                        legend: { fontSize: "12px" },
                        dataLabels: { style: { fontSize: "11px" } },
                    },
                },
                {
                    breakpoint: 576, // mobile
                    options: {
                        chart: { height: 250 },
                        legend: {
                            fontSize: "11px",
                            itemMargin: { vertical: 3 },
                        },
                        dataLabels: {
                            style: { fontSize: "10px" },
                        },
                    },
                },
            ],
        },
    };

    return (
        <Card
            className="border-0 shadow-sm mb-4"
            style={{
                borderRadius: "18px",
                background: "rgba(255, 255, 255, 0.9)",
                backdropFilter: "blur(10px)",
                transition: "all 0.3s ease-in-out",
            }}
        >
            <Card.Body className="p-2 p-md-4">
                {/* Header */}
                <Row className="align-items-center mb-3">
                    <Col xs="auto" className="d-flex align-items-center">
                        <h5
                            className="fw-bold mb-0 text-primary me-2"
                            style={{ fontSize: "1.1rem" }}
                        >
                            📊 Order Status Statistics
                        </h5>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="text-secondary"
                            viewBox="0 0 20 20"
                        >
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm0 16a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm1-5.034V12a1 1 0 0 1-2 0v-1.418a1 1 0 0 1 1.038-.999 1.436 1.436 0 0 0 1.488-1.441 1.501 1.501 0 1 0-3-.116.986.986 0 0 1-1.037.961 1 1 0 0 1-.96-1.037A3.5 3.5 0 1 1 11 11.466Z" />
                        </svg>
                    </Col>
                    <Col className="text-end d-none d-md-block">
                        <span
                            className="badge bg-light text-primary border border-primary border-opacity-25"
                            style={{
                                fontSize: "0.75rem",
                                fontWeight: 500,
                            }}
                        >
                            Updated 2h ago
                        </span>
                    </Col>
                </Row>

                {/* Chart Section */}
                <div
                    className="d-flex justify-content-center align-items-center"
                    style={{
                        width: "100%",
                        minHeight: "260px",
                    }}
                >
                    <Chart
                        options={chartOptions.options}
                        series={chartOptions.series}
                        type="pie"
                        height="100%"
                        width="80%"
                    />
                </div>
            </Card.Body>
        </Card>
    );
};

export default OrderStatusStatistics;
