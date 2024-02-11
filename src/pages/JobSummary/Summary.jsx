import * as Yup from "yup";
import React, { useEffect, useState } from "react";
import axios from "axios";

import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Col,
  Container,
  Form,
  FormFeedback,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
  Row,
} from "reactstrap";
import { useFormik } from "formik";
import withReactContent from "sweetalert2-react-content";
import Swal from 'sweetalert2'
import Divider from '../../common/Divider'

const Summary = () => {
  const [data, setData] = useState([]);
  const [modal, setModal] = useState(false);

  const validation = useFormik({
    initialValues: {
      name: "",
      post: "",
      last_date: new Date(Date.now()),
      description: "",
      referrer_id: "65bf211133ac19c3ffd058bf",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Please Enter Your Company Name"),
      post: Yup.string().required("Please Enter Post"),
    }),
    onSubmit: (values) => {
      console.log(values)
      axios
      .post(`${process.env.REACT_APP_API_ENDPOINT}/companydetails`, values, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        withCredentials: true,
      })
      .then((response) => response.data)
      .catch((err) => err)
      .then((data) => {
        if(data.success) {
          withReactContent(Swal).fire({
            title: <i>Job Added</i>,
            inputValue:"",
            icon:"success",
            timer:2000,
            heightAuto:false,
            showConfirmButton:false,
          })
        } else {
          withReactContent(Swal).fire({
            title: <i>{data.message}</i>,
            inputValue:"",
            icon:"success",
            timer:2000,
            heightAuto:false,
            showConfirmButton:false,
          })
        }
      });

      setModal(false)

      validation.resetForm()
    },
  });

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_ENDPOINT}/companydetails`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        withCredentials: true,
      })
      .then((response) => response.data)
      .catch((err) => {
        setData([])
        console.log(err.response.data.message)
        withReactContent(Swal).fire({
          title: <i>asdas</i>,
          inputValue:"",
          icon:"error",
          timer:2000,
          heightAuto:false,
          showConfirmButton:false,
        })

      })
      .then((data) => {
        setData(data?.details);
      });
  }, []);

  return (
    <div style={{ height: "calc(100vh-100px)" }}>
      <Modal
        isOpen={modal}
        toggle={() => {
          setModal(!modal);
        }}
        centered
      >
        <ModalHeader
          toggle={() => {
            setModal(false);
          }}
          tag="h5"
          className="py-3 px-4 border-bottom-0"
        >
          Add Job
        </ModalHeader>
        <ModalBody className="p-4">
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              validation.handleSubmit();
              return false;
            }}
          >
            <Row>
              <Col className="col-12">
                <div className="mb-3">
                  <Label className="form-label">Comapany Name</Label>
                  <Input
                    name="name"
                    type="text"
                    placeholder="Enter Comapany Name"
                    onChange={validation.handleChange}
                    onBlur={validation.handleBlur}
                    value={validation.values.name || ""}
                    invalid={
                      validation.touched.name && validation.errors.name
                        ? true
                        : false
                    }
                  />
                  {validation.touched.name && validation.errors.name ? (
                    <FormFeedback type="invalid">
                      {validation.errors.name}
                    </FormFeedback>
                  ) : null}
                </div>
              </Col>
              <Col className="col-12">
                <div className="mb-3">
                  <Label className="form-label">Job Post</Label>
                  <Input
                    name="post"
                    placeholder="Enter Job Post"
                    type="text"
                    onChange={validation.handleChange}
                    onBlur={validation.handleBlur}
                    value={validation.values.post || ""}
                    invalid={
                      validation.touched.post && validation.errors.post
                        ? true
                        : false
                    }
                  />
                  {validation.touched.post && validation.errors.post ? (
                    <FormFeedback type="invalid">
                      {validation.errors.post}
                    </FormFeedback>
                  ) : null}
                </div>
              </Col>
              <Col className="col-12">
                <div className="mb-3">
                  <Label className="form-label">Last Date</Label>
                  <Input
                    name="last_date"
                    className="form-control"
                    type="datetime-local"
                    id="example-datetime-local-input"
                    onChange={validation.handleChange}
                    onBlur={validation.handleBlur}
                    value={validation.values.last_date || ""}
                    invalid={
                      validation.touched.last_date &&
                      validation.errors.last_date
                        ? true
                        : false
                    }
                  />
                  {validation.touched.last_date &&
                  validation.errors.last_date ? (
                    <FormFeedback type="invalid">
                      {validation.errors.last_date}
                    </FormFeedback>
                  ) : null}
                </div>
              </Col>
              <Col className="col-12">
                <div className="mb-3">
                  <Label className="form-label">Job Description</Label>
                  <Input
                    name="description"
                    placeholder="Enter Job Description"
                    type="text"
                    onChange={validation.handleChange}
                    onBlur={validation.handleBlur}
                    value={validation.values.description || ""}
                    invalid={
                      validation.touched.description &&
                      validation.errors.description
                        ? true
                        : false
                    }
                  />
                  {validation.touched.description &&
                  validation.errors.description ? (
                    <FormFeedback type="invalid">
                      {validation.errors.description}
                    </FormFeedback>
                  ) : null}
                </div>
              </Col>
            </Row>

            <Row className="mt-2">
              <Col className="col-12  d-flex justify-content-end">
                <button
                  type="submit"
                  className="btn btn-dark"
                  id="btn-save-event"
                >
                  Save
                </button>
              </Col>
            </Row>
          </Form>
        </ModalBody>
      </Modal>
      <Container fluid>
        <Row className="mt-3">
          <Col lg={10} sm={9} xs={8}>
            <div className="mb-3">
              <Input
                type="text"
                className="form-control border border-dark"
                id="formrow-firstname-Input"
                placeholder="Search..."
                style={{
                  borderRadius:'30px'
                }}
                // onChange={(e) => {searchandler(e)}}
              />
            </div>
          </Col>
          <Col lg={2} sm={3} xs={4}>
            <div className="d-flex flex-wrap gap-2 justify-content-center">
              <Button
                color="primary"
                className="btn btn-dark waves-effect waves-light"
                onClick={() => {
                  setModal(true);
                }}
              >
                Add Job
              </Button>
            </div>
          </Col>
        </Row>
        <Divider/>
        <Row>
          {data.map((data, key) => (
            <Col key={key} className="p-2" lg={3} md={4} sm={12}>
              <Card
                className="text-muted p-2 shadow-md"
                style={{ minHeight: "20vh" }}
              >
                <CardTitle className="text-center h5 bg-dark bg-opacity-50 text-white rounded">
                  {data.name}
                </CardTitle>
                <CardBody className="border border-dark rounded ">
                  <p
                  className="p-0 m-0 text-muted"
                  style={{
                    fontWeight:'100',
                    fontSize: '15px'
                  }}>{data.last_date.split("T").join(" ").split("Z")[0]}</p>
                  <p>{data.description}</p>
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
