import React, { useEffect, useRef, useState } from "react";
import ApexCharts from "apexcharts";
import {
    Card,
    Dropdown,
    DropdownButton,
    Row,
    Col,
    Button,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const EarningLineChart = () => {
    const chartRef = useRef(null);

    const [selectedRange, setSelectedRange] = useState("Last 7 days");

    const options = {
        chart: {
            height: "100%",
            maxWidth: "100%",
            type: "area",
            fontFamily: "Inter, sans-serif",
            dropShadow: { enabled: false },
            toolbar: { show: false },
        },
        tooltip: {
            enabled: true,
            x: { show: false },
        },
        fill: {
            type: "gradient",
            gradient: {
                opacityFrom: 0.55,
                opacityTo: 0,
                shade: "#1C64F2",
                gradientToColors: ["#1C64F2"],
            },
        },
        dataLabels: { enabled: false },
        stroke: { width: 5 },
        grid: {
            show: false,
            strokeDashArray: 4,
            padding: { left: 2, right: 2, top: 0 },
        },
        series: [
            {
                name: "New Users",
                data: [6500, 6418, 6456, 6526, 6356, 6456],
                color: "#1A56DB",
            },
        ],
        xaxis: {
            categories: [
                "01 Feb",
                "02 Feb",
                "03 Feb",
                "04 Feb",
                "05 Feb",
                "06 Feb",
                "07 Feb",
            ],
            labels: { show: false },
            axisBorder: { show: false },
            axisTicks: { show: false },
        },
        yaxis: { show: false },
    };

    useEffect(() => {
        if (chartRef.current) {
            const chart = new ApexCharts(chartRef.current, options);
            chart.render();
            return () => chart.destroy();
        }
    }, []);

    return (
        <Card
            className="shadow-sm border-0 mb-4"
            style={{
                borderRadius: "16px",
                overflow: "hidden",
            }}
        >
            <Card.Body className="p-4">
                {/* Header */}
                <Row className="align-items-center mb-3">
                    <Col xs={12} md={8}>
                        <h5 className="fw-bold mb-1 text-primary">Order Statistics</h5>
                        <p className="text-muted small mb-0">
                            User growth trend for this period
                        </p>
                    </Col>
                    <Col
                        xs={12}
                        md={4}
                        className="text-md-end text-center mt-2 mt-md-0"
                    >
                        <span className="text-success fw-semibold">
                            +12%{" "}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="10"
                                height="14"
                                fill="none"
                                viewBox="0 0 10 14"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M5 13V1m0 0L1 5m4-4 4 4"
                                />
                            </svg>
                        </span>
                    </Col>
                </Row>

                {/* Chart */}
                <div ref={chartRef} style={{ width: "100%", height: "260px" }} />

                <hr className="mt-4" />

                {/* Footer */}
                <Row className="align-items-center">
                    <Col xs={6}>
                        <DropdownButton
                            variant="outline-secondary"
                            size="sm"
                            title={selectedRange}
                            onSelect={(value) => setSelectedRange(value)}
                            className="text-capitalize"
                        >
                            {[
                                "Yesterday",
                                "Today",
                                "Last 7 days",
                                "Last 30 days",
                                "Last 90 days",
                            ].map((label) => (
                                <Dropdown.Item key={label} eventKey={label}>
                                    {label}
                                </Dropdown.Item>
                            ))}
                        </DropdownButton>
                    </Col>
                    <Col xs={6} className="text-end">
                        <Button
                            variant="outline-primary"
                            size="sm"
                            className="fw-semibold text-uppercase"
                        >
                            Users Report{" "}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="8"
                                height="10"
                                fill="none"
                                viewBox="0 0 6 10"
                                className="ms-1"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M1 9l4-4-4-4"
                                />
                            </svg>
                        </Button>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};

export default EarningLineChart;
