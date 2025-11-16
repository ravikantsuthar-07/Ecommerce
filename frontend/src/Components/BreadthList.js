import React from "react";

const BreadthList = ({ items = [] }) => {
  return (
    <div className="bg-white border rounded-3 shadow-sm px-3 py-2 my-2">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb mb-0 small align-items-center">
          {items.map((item, index) => (
            <li
              key={index}
              className={`breadcrumb-item d-flex align-items-center ${
                index === items.length - 1 ? "active fw-semibold text-dark" : ""
              }`}
              aria-current={index === items.length - 1 ? "page" : undefined}
            >
              {item.href && index !== items.length - 1 ? (
                <a
                  href={item.href}
                  className="text-decoration-none text-dark d-flex align-items-center"
                >
                  {item.icon && <i className={`${item.icon} me-1 text-secondary`}></i>}
                  {item.label}
                </a>
              ) : (
                <>
                  {item.icon && <i className={`${item.icon} me-1 text-secondary`}></i>}
                  {item.label}
                </>
              )}
            </li>
          ))}
        </ol>
      </nav>

      <style>{`
        .breadcrumb-item a:hover {
          color: #dc3545 !important;
          transition: color 0.2s ease;
        }
        .breadcrumb-item + .breadcrumb-item::before {
          color: #aaa;
          content: "›";
          font-weight: bold;
        }
      `}</style>
    </div>
  );
};

export default BreadthList;
