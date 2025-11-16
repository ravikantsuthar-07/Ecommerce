import { Breadcrumb, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { formateName } from "../Utills/FormateName";


const BreadCrumbCom = ({ paths = [] }) => {
    return (
        <Card className="shadow-sm border-0 p-2">
            <Breadcrumb>
                <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
                    <i className="fa-solid fa-house me-1"></i> Home
                </Breadcrumb.Item>

                {paths.map((item, index) => (
                    <Breadcrumb.Item
                        key={index}
                        linkAs={item.to ? Link : undefined}
                        linkProps={item.to ? { to: item.to } : undefined}
                        active={!item.to}
                    >
                        {item.isSlug ? formateName(item.label) : item.label}
                    </Breadcrumb.Item>
                ))}
            </Breadcrumb>
        </Card>
    );
};

export default BreadCrumbCom;
