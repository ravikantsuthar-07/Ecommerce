import React, { useState } from "react";
import { Nav, Accordion, Button, Collapse } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const menuItems = [
  { label: "Dashboard", icon: "fa-gauge", path: "/admin/dashboard" },
  {
    label: "Orders",
    icon: "fa-cart-shopping",
    path: "/admin/orders",
    subItems: [
      { label: "All", path: "/admin/orders/all" },
      { label: "Pending", path: "/admin/orders/pending" },
      { label: "Confirmed", path: "/admin/orders/completed" },
      { label: "Packaged", path: "/admin/orders/packaged" },
      { label: "Delivered", path: "/admin/orders/delivered" },
    ],
  },
  {
    label: "Categories",
    icon: "fa-box-open",
    path: "/admin/category",
    subItems: [
      { label: "Main Category", path: "/admin/category/main" },
      { label: "Sub Categories", path: "/admin/category/sub" },
    ],
  },
  {
    label: "Products",
    icon: "fa-box-open",
    path: "/admin/products",
    subItems: [
      { label: "All", path: "/admin/products/all" },
      { label: "Limited Stock", path: "/admin/products/limit" },
      { label: "Add A New Product", path: "/admin/products/add-new" },
    ],
  },
  { label: "Customers", icon: "fa-user", path: "/admin/customers" },
  { label: "Inventory", icon: "fa-warehouse", path: "/admin/inventory" },
  // { label: "Payments", icon: "fa-money-bill-1-wave", path: "/payments" },
  // { label: "Support", icon: "fa-headphones", path: "/support" },
  // { label: "Business", icon: "fa-building", path: "/business" },
  // { label: "Settings", icon: "fa-gear", path: "/setting" },
];

const AsideSidebar = ({ isCollapsed }) => {
  const location = useLocation();
  const [openDropdowns, setOpenDropdowns] = useState({});

  const toggleDropdown = (label) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  return (
    <div
      className={`position-fixed top-0 start-0 h-100 bg-light border-end shadow-sm transition-all ${isCollapsed ? "sidebar-collapsed" : "sidebar-expanded"
        }`}
      style={{
        width: isCollapsed ? "60px" : "240px",
        zIndex: 1040,
        overflowY: "auto",
        transition: "width 0.3s ease-in-out",
      }}
    >
      <div className="pt-4 px-1 mt-5">
        <Nav className="flex-column">
          {menuItems.map((item) => {
            const isActive =
              location.pathname === item.path ||
              (item.subItems && location.pathname.startsWith(item.path));
            const isOpen = openDropdowns[item.label];

            if (item.subItems) {
              return (
                <div key={item.label} className="mb-1">
                  <Button
                    variant="light"
                    onClick={() => toggleDropdown(item.label)}
                    className={`d-flex align-items-center w-100 text-start border-0 px-3 py-2 rounded ${isActive ? "bg-primary text-white" : "text-secondary"
                      }`}
                    title={isCollapsed ? item.label : ""}
                  >
                    <i className={`fa-solid ${item.icon} me-2`} />
                    {!isCollapsed && (
                      <>
                        <span className="flex-grow-1">{item.label}</span>
                        <i
                          className={`fa-solid fa-chevron-down ms-auto small transition-transform ${isOpen ? "rotate-180" : ""
                            }`}
                        />
                      </>
                    )}
                  </Button>

                  <Collapse in={isOpen && !isCollapsed}>
                    <div className="ps-4 mt-1">
                      {item.subItems.map((sub) => (
                        <Nav.Item key={sub.path}>
                          <Link
                            to={sub.path}
                            className={`d-block py-1 ps-2 rounded text-decoration-none small ${location.pathname === sub.path
                              ? "text-primary fw-semibold"
                              : "text-muted"
                              }`}
                          >
                            {sub.label}
                          </Link>
                        </Nav.Item>
                      ))}
                    </div>
                  </Collapse>
                </div>
              );
            } else {
              return (
                <Nav.Item key={item.label} className="mb-1">
                  <Link
                    to={item.path}
                    className={`d-flex align-items-center px-3 py-2 rounded text-decoration-none ${isActive
                      ? "bg-primary text-white"
                      : "text-secondary hover:bg-light"
                      }`}
                    title={isCollapsed ? item.label : ""}
                  >
                    <i className={`fa-solid ${item.icon} me-2`} />
                    {!isCollapsed && <span>{item.label}</span>}
                  </Link>
                </Nav.Item>
              );
            }
          })}
        </Nav>
      </div>
    </div>
  );
};

export default AsideSidebar;
