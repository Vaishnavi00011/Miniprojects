import axios from "axios";
import React, { useEffect, useState } from "react";

function MovieTicket() {
  useEffect(() => {
    getTicketData();
  }, []);
  const seats = new Array(50).fill().map((i, index) => index + 1);
  const [selectedSeat, setSelectedSeat] = useState([]);
  const postTicketData = () => {
    const item = {
      seatNo: selectedSeat,
    };
    axios
      .post("http://localhost:5001/api/ticket", item)
      .then(() => {alert("Successfully Booked"); getTicketData(); setSelectedSeat([])});

  };
  const [bookedSeats, setBookedSeats] = useState([]);
  const getTicketData = () => {
    axios
      .get("http://localhost:5001/api/ticket")
      .then((res) => setBookedSeats(res.data.data));
  };

  const putTicketData = () => {
    const item = {
      seatNo: [...bookedSeats[0].seatNo, ...selectedSeat],
    };
    axios.put("http://localhost:5001/api/ticket/" + bookedSeats[0]._id, item).then(()=>{
      getTicketData();
      alert("Successfully");
      setSelectedSeat([])
    });
  };
  return (
    <div>
      
      {JSON.stringify(bookedSeats)}

      <div className="flex flex-wrap gap-4 justify-center">
        {seats.map((i) => (
          <div
            style={{
              borderColor: selectedSeat.includes(i) && "green",
              backgroundColor: bookedSeats[0]?.seatNo?.includes(i) && "red",
            }}
            onClick={() => {
              if ( !bookedSeats[0]?.seatNo?.includes(i)){
                if (selectedSeat.includes(i)) {
                  setSelectedSeat(selectedSeat.filter((j) => i != j));
                } else {
                  setSelectedSeat([...selectedSeat, i]);
                }
              }
              
            }}
            className="w-[8%] h-[12vh] flex justify-center items-center border-2"
          >
            {i}
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          if (bookedSeats.length > 0) {
            putTicketData();
          } else {
            postTicketData();
          }
        }}
      >
        Book
      </button>
    </div>
  );
}

export default MovieTicket;
