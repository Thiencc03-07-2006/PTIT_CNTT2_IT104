import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
export default function PTIT_CNTT2_IT104_Session22_Bai03() {
  return (
    <div>
      <h3>Bai 3</h3>
      <div className="d-flex gap-4">
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://laptoptld.com/wp-content/uploads/2022/11/20230518_152922-768x576.jpg"
          />
          <Card.Body>
            <Card.Title>MacBook Air 2018</Card.Title>
            <Card.Text>
              The reason I am selling the machine is because it is too much
              power for what i need
            </Card.Text>
            <div className="d-flex justify-content-between align-items-center">
              <Button variant="primary">Xem chi tiet</Button>
              <p className="mb-0">30.000.000 $</p>
            </div>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://laptoptld.com/wp-content/uploads/2022/11/20230518_152922-768x576.jpg"
          />
          <Card.Body>
            <Card.Title>MacBook Air 2018</Card.Title>
            <Card.Text>
              The reason I am selling the machine is because it is too much
              power for what i need
            </Card.Text>
            <div className="d-flex justify-content-between align-items-center">
              <Button variant="primary">Xem chi tiet</Button>
              <p className="mb-0">30.000.000 $</p>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
