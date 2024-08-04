import React, { useState } from "react";
import "./PlaceItem.css";
import Card from "../../shared/components/UIElement/Card";
import Button from "../../shared/components/FormElements/Button";
import Modal from "../../shared/components/UIElement/Modal";
import Map from "../../shared/components/UIElement/Map";

const PlaceItem = (props) => {
  const [showMap, setShowMap] = useState(false);

  const openMapHandeler = () => {
    setShowMap(true);
  };

  const closeMapaHandler = () => {
    setShowMap(false);
  };
  return (
    <React.Fragment>
      <Modal
        show={showMap}
        onCancel={closeMapaHandler}
        header={props.address}
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-actions"
        footer={<Button onClick={closeMapaHandler}>CLOSE</Button>}
      >
        <div className="map-container">
          <Map center={props.coordinate} zoom={13} />
        </div>
      </Modal>
      <li className="place-item">
        <Card className="place-item__content">
          <div className="place-item__image">
            <img src={props.image} alt={props.title} />
          </div>
          <div className="place-item__info">
            <h2>{props.title}</h2>
            <h3>{props.address}</h3>
            <p>{props.description}</p>
          </div>
          <div className="place-item__actions">
            <Button inverse onClick={openMapHandeler}>
              VIEW ON MAP
            </Button>
            <Button to={`/places/${props.id}`}>EDIT</Button>
            <Button danger>DELETE</Button>
          </div>
        </Card>
      </li>
    </React.Fragment>
  );
};

export default PlaceItem;
