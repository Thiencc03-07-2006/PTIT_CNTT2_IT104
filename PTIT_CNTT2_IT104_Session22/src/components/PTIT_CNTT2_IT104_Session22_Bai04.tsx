import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
export default function PTIT_CNTT2_IT104_Session22_Bai04() {
  return (
    <div>
      <h3>Bai 4</h3>
      <DropdownButton variant="primary" title="Nguyen Van A">
        <Dropdown.Item>Cai dat</Dropdown.Item>
        <Dropdown.Item>Doi mat khau</Dropdown.Item>
        <Dropdown.Item>Dang xuat</Dropdown.Item>
      </DropdownButton>
    </div>
  );
}
