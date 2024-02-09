import React, { useEffect, useState } from "react";
import axios from "axios";

import {
  Card,
  CardBody,
  CardTitle,
  Col,
  Container,
  Input,
  Row,
} from "reactstrap";


const Summary = () => {

  const [data, setData] = useState([])

  const searchandler = (listItem) => {

    setData(
        data.filter((item, key) => {
        if(item.name.includes(listItem))
        return item
      })
    )

  }
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_ENDPOINT}/companydetails`, {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
          },
          withCredentials: true,
        })
        .then((response) => response.data)
        .catch((err) => err)
        .then((data) => {
          setData(data.details)

        });
  }, [])

  return (
    <div style={{height:"calc(100vh-100px)"}}>
      <Container fluid >
        <Row className="mt-3">
          <Col xl={3}>
            <div className="mb-3">
              <Input
                type="text"
                className="form-control border border-dark"
                id="formrow-firstname-Input"
                placeholder="Search..."
                onChange={(e) => {searchandler(e)}}
              />
            </div>
          </Col>
        </Row>
        <Row>
          {data.map((data, key) => (
            <Col className="p-2" lg={3} md={4} sm={12}>
              <Card
                className="text-muted p-2 shadow-md"
                style={{ minHeight: "20vh" }}
              >
                <CardTitle className="text-center h5 bg-dark bg-opacity-50 text-white">
                  {data.name}
                </CardTitle>
                <CardBody className="border border-dark rounded ">
                  <p>
                    {data.description}
                  </p>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Summary;
