import React, { useState } from "react";

import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,

  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBContainer,
} from "mdb-react-ui-kit";


function MovieCard({imageUrl, title, text}) {
  const [MovieModal, setMovieModal] = useState(false);

  const toggleShow = () => setMovieModal(!MovieModal);

  return (
    <>
    <MDBCard className="hover-overlay" onClick={toggleShow} style = {{cursor: "pointer"}}>
      <img
        src={imageUrl}
        position="top"
        style={{width: "250px", height: "350px", objectFit: "cover"}}
      />
      <div className='mask' style={{backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <div>
          <p style={{fontFamily: "var(--font-montserrat)", fontSize: "28px", fontWeight: "600", color: "rgb(255, 255, 255)", textAlign:"center", lineHeight: "33.6px"}}>{title}</p>
          <p style={{fontFamily: "var(--font-montserrat)", fontSize: "15px", fontWeight: "300", color: "rgb(255, 255, 255)", textAlign:"center"}}>Click to view session time</p>
        </div>
      </div>
    </MDBCard>

    <MDBModal show={MovieModal} setShow={setMovieModal} tabIndex="-1" centered>
      <MDBModalDialog centered style={{maxWidth: "35%"}} size="lg">
        <MDBModalContent style={{ backgroundColor: 'black', border: "2px solid white"}}>
          <MDBModalBody>
            <div style={{display:"flex", flexDirection: "row"}}>
              <div className="modal-image" style={{marginRight:"15px"}}>
              <img
                src={imageUrl}
                style={{width: "250px", height: "350px", objectFit: "cover"}}
              />
              </div>
              <div style={{marginLeft:"15px", width: "100%"}}>
                <MDBModalTitle style={{color:"white", fontFamily:"var(--font-montserrat)"}}>{title}</MDBModalTitle>
                <div className="" style={{marginTop: "10px"}}>
                  <p style={{color:"white", fontFamily:"var(--font-montserrat)"}}>Session Time</p>
                  <ul style={{color:"white", fontFamily:"var(--font-montserrat)"}}>
                    <li>10:00am</li>
                    <li>12:00pm</li>
                    <li>3:00pm</li>
                    <li>6:00pm</li>
                  </ul>
                </div>
                
              </div>
              <div style={{marginLeft:"15px"}}>
              <MDBBtn
              className="btn-close"
              color="none"
              onClick={toggleShow}
              style={{backgroundColor: "white"}}>

              </MDBBtn>
              </div>
              
              
            </div>
            
           
          
          </MDBModalBody>
        </MDBModalContent>
      </MDBModalDialog>
    </MDBModal>
    </>
  );
}

export default MovieCard
