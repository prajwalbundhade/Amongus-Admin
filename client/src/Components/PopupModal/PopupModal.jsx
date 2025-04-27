import React from "react";
import { Modal, Button } from "react-bootstrap";

const PopupModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title className='red_btn_pop_text text-primary'>Welcome to Craftify Productions</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p><strong>Craftify Productions: Quality Mod Remakes!</strong></p>
        <ul>
          <li>We offer remakes inspired by Ssundee, Zud, GamingToon, and more. Please note we are not the original creators of these mods, but we are working with some of the original developers and have their permission to resell them.</li>
          <li>Prices reflect the quality of each mod, and our developers are compensated per sale.</li>
          <li>Need an alternative payment option to PayPal? Contact us at:
            <ul>
              <li className='red_btn_pop_text text-primary'>Email: contact@craftifyproductions.com</li>
              <li className='red_btn_pop_text text-primary'>Discord: thunderzlucky</li>
            </ul>
          </li>

          <li>
            <strong>Booking & Bulk Orders</strong>
          </li><ul><li>
          Contact us on email or Discord with your request for custom mods or bulk order discounts.

          </li>
        </ul>
        </ul>
        <p>Regards,<br />Thunderzlucky (Owner)</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PopupModal;
