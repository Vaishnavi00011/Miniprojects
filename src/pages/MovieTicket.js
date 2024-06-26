import axios from "axios";
import React, { useEffect, useState } from "react";

function MovieTicket() {
  useEffect(() => {
    getTicketData();
  }, []);
  const seats = new Array(40).fill().map((i, index) => index + 1);
  const [selectedSeat, setSelectedSeat] = useState([]);
  const [bookedSeats, setBookedSeats] = useState([]);
  const postTicketData = () => {
    const item = {
      seatNo: selectedSeat
    };
    axios.post("http://localhost:5001/api/ticket", item).then(() => {
      alert("successfully booked");
      getTicketData();
      setSelectedSeat([]);
    });
  };
 
  const getTicketData = () => {
    axios
      .get("http://localhost:5001/api/ticket")
      .then((res) => setBookedSeats(res.data.data));
  };

  const putTicketData = () => {
    const item = {
      seatNo: [...bookedSeats[0]?.seatNo , ...selectedSeat],
    };
    axios
      .put("http://localhost:5001/api/ticket/" + bookedSeats[0]._id, item)
      .then(() => {
        getTicketData();
        alert("successfully");
        setSelectedSeat([]);
      });
  };

  return (
    <div>
      {JSON.stringify(bookedSeats)}
      <div className=" flex flex-wrap gap-10 items-center justify-center">
        {seats.map((i) => (
          <div
            style={{
              borderColor: selectedSeat.includes(i) && "blue",
              backgroundColor: bookedSeats[0]?.seatNo?.includes(i) && "red",
            }}
            onClick={() => {
              if (!bookedSeats[0]?.seatNo?.includes(i)) {
                if (selectedSeat.includes(i)) {
                  setSelectedSeat(selectedSeat.filter((j) => i != j));
                } else {
                  setSelectedSeat([...selectedSeat, i]);
                }
              }
            }}
            className="w-[7%] h-[12vh] flex justify-center items-center border-2"
          >
            {i}
          </div>
        ))}

        <button
          onClick={() => {
            if (bookedSeats.length > 0) {
              putTicketData();
            } else {
              postTicketData();
            }
          }}
          className="w-[10%] h-[8vh] border-2 border-black"
        >
          Book
        </button>
      </div>
    </div>
  );
}

export default MovieTicket;
