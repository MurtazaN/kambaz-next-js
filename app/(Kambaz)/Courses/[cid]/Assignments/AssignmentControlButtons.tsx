import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlusLg } from "react-icons/bs";
import { Button } from "react-bootstrap";

export default function AssignmentControlButtons() {
    return (
        <div className="float-end">
            <Button variant="secondary" className="border border-3 black" style={{ borderRadius: '30px' }}>
                40% of Total
            </Button>
            <BsPlusLg />
            <IoEllipsisVertical className="fs-4" />
        </div>
    );
}