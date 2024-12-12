import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  const cartItemCount = 6;

  return (
    <header className="bg-light border-bottom py-3">
      <div className="container">
        <div className="row align-items-center">
          {/* Logo */}
          <div className="col-auto">
            <img
              src="logo_licoreria.jpg"
              alt="Logo"
              className="img-fluid"
              style={{ maxHeight: "50px" }}
            />
          </div>
          <div className="col">
            <h1 className="m-0 text-center">Licorería Juntada</h1>
          </div>
          <div className="col-auto position-relative">
            <FaShoppingCart size={24} />
            {cartItemCount > 0 && (
              <span
                className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                style={{ fontSize: "0.75rem" }}
              >
                {cartItemCount}
              </span>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
