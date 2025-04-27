import { Modal, Button } from "react-bootstrap";

const RedButtonModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Custom Mods and Packages</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          <strong>Craftify Productions: Quality Mod Remakes!</strong>
        </p>
        <ul>
          <li>
          We offer remakes inspired by Ssundee, Zud, GamingToon, and more. Please note we are not the original creators of these mods, but we are working with some of the original developers and have their permission to resell them.
          </li>
          <li>
          Prices reflect the quality of each mod, and our developers are compensated per sale.
          </li>
          <li>
            Need an alternative payment option to PayPal? Reach out to us:
            <ul>
              <li className="text-primary red_btn_pop_text">
                Email: contact@craftifyproductions.com
              </li>
              <li className="text-primary red_btn_pop_text">
                Discord: thunderzlucky
              </li>
            </ul>
          </li>

          <li>
            <strong>Booking & Bulk Orders</strong>
          </li>
          <ul>
            <li>
            Contact us on email or Discord with your request for custom mods or bulk order discounts.
            </li>
            <li>
              <a
                href="https://gtav.craftifyproductions.com/contact"
                className="red_btn_pop_text"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </ul>
        <p>
          Best Regards,
          <br />
          <strong>Thunderzlucky (Owner)</strong>
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default RedButtonModal;
