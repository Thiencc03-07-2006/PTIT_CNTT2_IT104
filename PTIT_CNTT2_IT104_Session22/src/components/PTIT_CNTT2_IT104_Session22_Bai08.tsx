import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function GridComplexExample() {
  return (
    <div>
      <h3>Bai 8</h3>
      <Form>
        <h4 className="text-center">Dang ky tai khoan</h4>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Nhap email" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Mat khau</Form.Label>
            <Form.Control type="password" placeholder="Nhap mat khau" />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Ho va ten</Form.Label>
          <Form.Control placeholder="Vi du: Nguyen Van A" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>Dia chi</Form.Label>
          <Form.Control placeholder="Vi du: Thanh Xuan,Ha Noi" />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Thanh pho</Form.Label>
            <Form.Select defaultValue="Ha Noi">
              <option>Ha Noi</option>
              <option>...</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Quan</Form.Label>
            <Form.Select defaultValue="Thanh Xuan">
              <option>Thanh Xuan</option>
              <option>...</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Ma buu dien</Form.Label>
            <Form.Control />
          </Form.Group>
        </Row>
        <div className="d-flex justify-content-center">
          <Button className="w-50" variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default GridComplexExample;
