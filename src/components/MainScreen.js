import React, { Component } from "react";
import { Row, Container, Col, Navbar, Nav, Tabs } from "react-bootstrap";
import { MdChevronLeft,MdCreditCard,MdLightbulbOutline,MdDirectionsCar } from "react-icons/md";
import { FaRegQuestionCircle, FaRegPlayCircle,FaMobileAlt,FaNewspaper,FaSatelliteDish,FaGripfire,FaPhone,FaDesktop,FaUmbrella,FaDumpsterFire,FaGraduationCap } from "react-icons/fa";
import { RiHandCoinLine } from "react-icons/ri";
import { HiOutlineReceiptTax , HiOutlineDotsHorizontal} from "react-icons/hi";
import { GiTap } from "react-icons/gi";

import { Tab } from "bootstrap";

class MainScreen extends Component {
  render() {
    return (
      <Container>
        <Navbar collapseOnSelect expand="lg" bg="" variant="dark" className="nav-bar-header">
          <Row className="nav-bar-row">
            <Col xs={1} sm={1} md={1} lg={1}>
              <Navbar.Brand href="#home">
                {" "}
                <MdChevronLeft />{" "}
              </Navbar.Brand>
            </Col>
            <Col xs={4} sm={4} md={4} lg={4}>
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="#features">Features</Nav.Link>
                </Nav>
              </Navbar.Collapse>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />{" "}
            </Col>
            <Col xs={5} sm={5} md={5} lg={5}>
              <Nav.Item>
                <Nav.Link href="/home">Bill Payment & FASTag </Nav.Link>
              </Nav.Item>
            </Col>
            <Col xs={1} sm={1} md={1} lg={1}>
              <Nav.Item>
                <Nav.Link href="/home">
                  <FaRegPlayCircle />
                </Nav.Link>
              </Nav.Item>
            </Col>
            <Col xs={1} sm={1} md={1} lg={1}>
              <Nav.Item>
                <Nav.Link href="/home">
                  <FaRegQuestionCircle />
                </Nav.Link>
              </Nav.Item>
            </Col>
          </Row>
        </Navbar>
        <Tabs defaultActiveKey="BillPayment" id="uncontrolled-tab-example" className="mb-3 sub-header">
          <Tab eventKey="BillPayment" title="Bill Payment & FASTag">
            <Row className="bill-payment-icon">
              <Col>
              <div>
              < MdCreditCard/>
              <p>Credit Cards</p>
              </div>
              </Col>
              <Col>
              <div>
                <FaMobileAlt/>
                <p>Postpaid</p>
              </div>
              </Col>
              <Col>
              <div>
                <MdLightbulbOutline/>
                <p>Electricity</p>
              </div>
              </Col>
              <Col>
              <div>
                <FaSatelliteDish/>
                <p>DTH</p>
              </div>
              </Col>
            </Row>

            <Row className="bill-payment-icon">
              <Col>
              <div>
              < MdDirectionsCar/>
              <p>ICICI FASTag</p>
              </div>
              </Col>
              <Col>
              <div>
                <MdDirectionsCar/>
                <p>Other FASTag</p>
              </div>
              </Col>
              <Col>
              <div>
                <FaGripfire/>
                <p>Piped Gas</p>
              </div>
              </Col>
              <Col>
              <div>
                <FaDumpsterFire/>
                <p>LPG Cylinder Gas Boooking</p>
              </div>
              </Col>
            </Row>
            

            <Row className="bill-payment-icon">
              <Col>
              <div>
              < FaGraduationCap/>
              <p>Education</p>
              </div>
              </Col>
              <Col>
              <div>
                <RiHandCoinLine/>
                <p>Loan Repayment</p>
              </div>
              </Col>
              <Col>
              <div>
                <FaUmbrella/>
                <p>ICICI Pru</p>
              </div>
              </Col>
              <Col>
              <div>
                <FaUmbrella/>
                <p>Insurance</p>
              </div>
              </Col>
            </Row>

            <Row className="bill-payment-icon">
              <Col>
              <div>
              < GiTap/>
              <p>Water</p>
              </div>
              </Col>
              <Col>
              <div>
                <FaPhone/>
                <p>Landline / Broadbrand</p>
              </div>
              </Col>
              <Col>
              <div>
                <FaDesktop/>
                <p>Cable TV</p>
              </div>
              </Col>
              <Col>
              <div>
                <HiOutlineReceiptTax/>
                <p>Tax</p>
              </div>
              </Col>
            </Row>

            <Row className="bill-payment-icon">
              <Col >
              <div>
              < FaNewspaper/>
              <p>Others</p>
              </div>
              </Col>
              <Col>
              <div>
                <HiOutlineDotsHorizontal/>
                <p>Show Less</p>
              </div>
              </Col>
              <Col></Col>
              <Col></Col>
            </Row>


          </Tab>
          <Tab eventKey="MyBills" title="My Bills">
            my bills
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

export default MainScreen;
