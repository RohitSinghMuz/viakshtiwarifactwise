import React, { useState } from "react";
import "./MYAccordian.css";

const MyAccordian = ({
  picture,
  first,
  last,
  id,
  gender,
  country,
  description,
}) => {
  const [show, setShow] = useState(false);

  var myFunction = () => {
    let input = document.getElementById("myInput").value;
    input = input.toLowerCase();
    let x = document.getElementsByClassName("carda");

    for (var i = 0; i < x.length; i++) {
      if (!x[i].innerHTML.toLowerCase().includes(input)) {
        x[i].style.display = "none";
      } else {
        x[i].style.display = "inline";
      }
    }
  };
  var modal = document.getElementById("id01");

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  return (
    <>
      <div className="main-heading">
        <div className="det">
          <div class="imgd">
            <img src={picture}></img>
            <h3 className="namee">
              {first}
              {last}
            </h3>
          </div>
          <p onClick={() => setShow(!show)}> {show ? "> " : "<"} </p>
        </div>
      </div>
      {show && (
        <div className="carda">
          <div className="answers">
            {" "}
            <div className="addr">
              <div className="datav">
                <p>Age</p>
                <p> {id}</p>
              </div>
              <div className="datav">
                <p>Gender</p>
                <p>{gender}</p>
              </div>
              <div className="datav">
                <p>Country</p>
                <p> {country}</p>
              </div>
            </div>
            <div className="discr">
              <p>Description</p>
              <p>{description} </p>
            </div>
            <div className="mybtn1">
              <button type="button" className="btn1">
                {" "}
                <img src="https://img.icons8.com/ios-glyphs/15/000000/edit--v1.png" />
              </button>
              <button type="button" className="btn1">
                <img src="https://img.icons8.com/plasticine/15/000000/filled-trash.png" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MyAccordian;
