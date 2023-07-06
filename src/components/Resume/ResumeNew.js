import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/JDuPlessisCV.pdf (1).pdf";
import bscPdf from "../../Assets/UWC Transcript.pdf";
import awsCloudPdf from "../../Assets/AWS Certified Cloud Practitioner certificate (2).pdf";
import awsDeveloperPdf from "../../Assets/AWS Certified Developer - Associate certificate .pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
    const [width, setWidth] = useState(1200);

    useEffect(() => {
        setWidth(window.innerWidth);
    }, []);

    const handleDownload = (pdfFile) => {
        const link = document.createElement("a");
        link.href = pdfFile;
        link.setAttribute("download", pdfFile.split("/").pop());
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
    };

    return (
        <div>
            <Container fluid className="resume-section">
                <Particle />
                <Row style={{ justifyContent: "center", position: "relative" }}>
                    <Button
                        variant="primary"
                        onClick={() => handleDownload(pdf)}
                        style={{ maxWidth: "250px" }}
                    >
                        <AiOutlineDownload />
                        &nbsp;Download CV
                    </Button>
                </Row>

                <Row className="resume">
                    <Document file={pdf} className="d-flex justify-content-center">
                        <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
                    </Document>
                </Row>

                <Row style={{ justifyContent: "center", position: "relative" }}>
                    <Button
                        variant="primary"
                        onClick={() => handleDownload(bscPdf)}
                        style={{ maxWidth: "250px", marginTop: "20px" }}
                    >
                        <AiOutlineDownload />
                        &nbsp;Download B.Sc Certificate
                    </Button>
                </Row>

                <Row className="resume">
                    <Document file={bscPdf} className="d-flex justify-content-center">
                        <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
                    </Document>
                </Row>

                <Row style={{ justifyContent: "center", position: "relative" }}>
                    <Button
                        variant="primary"
                        onClick={() => handleDownload(awsCloudPdf)}
                        style={{ maxWidth: "250px", marginTop: "20px" }}
                    >
                        <AiOutlineDownload />
                        &nbsp;Download AWS Cloud Practitioner Certificate
                    </Button>
                </Row>

                <Row className="resume">
                    <Document
                        file={awsCloudPdf}
                        className="d-flex justify-content-center"
                    >
                        <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
                    </Document>
                </Row>

                <Row style={{ justifyContent: "center", position: "relative" }}>
                    <Button
                        variant="primary"
                        onClick={() => handleDownload(awsDeveloperPdf)}
                        style={{ maxWidth: "250px", marginTop: "20px" }}
                    >
                        <AiOutlineDownload />
                        &nbsp;Download AWS Developer Associate Certificate
                    </Button>
                </Row>

                <Row className="resume">
                    <Document
                        file={awsDeveloperPdf}
                        className="d-flex justify-content-center"
                    >
                        <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
                    </Document>
                </Row>
            </Container>
        </div>
    );
}

export default ResumeNew;
