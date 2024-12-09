import PropTypes from "prop-types";
import Button from "../Shared/Button/Button";
import { useState } from "react";
import { DateRange } from "react-date-range";
import { differenceInCalendarDays } from "date-fns";
import BookingModal from "../Modal/BookingModal";
import useAuth from "../../hooks/useAuth";

const RoomReservation = ({ room, refetch }) => {
  const { user } = useAuth();

  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const [state, setState] = useState([
    {
      startDate: new Date(room?.from),
      endDate: new Date(room?.to),
      key: "selection",
    },
  ]);

  const totalPrice = parseInt(
    differenceInCalendarDays(new Date(room.to), new Date(room.from)) *
      room?.price
  );

  // const totalPrice = room?.price

  // console.log(totalPrice);
  return (
    <div className="rounded-xl border-[1px] border-neutral-200 overflow-hidden bg-white">
      <div><p className="text-xl px-2 py-3 text-center">Available date</p></div>
      <hr />

      <div className="flex justify-center">
        <DateRange
          showDateDisplay={false}
          rangeColors={["#F43F5E"]}
          editableDateInputs={true}
          onChange={(item) => {
            // console.log(item);
            setState([
              {
                startDate: room.from,
                endDate: room.to,
                key: "selection",
              },
            ]);
          }}
          moveRangeOnFirstSelection={false}
          // onChange={item => setState([item.selection])}
          ranges={state}
        />
      </div>

      <hr />
      <div className="p-4">
        <Button
          disabled={room?.booked}
          onClick={() => setIsOpen(true)}
          label={room?.booked ? 'ALready Booked' : "Book Doctor"}
        />
      </div>

      {/* for booking modal */}

      <BookingModal
        refetch={refetch}
        isOpen={isOpen}
        closeModal={closeModal}
        bookingInfo={{
          ...room,
          price: totalPrice,
          guest: {
            name: user?.displayName,
            email: user?.email,
            image: user?.photoURL,
          },
        }}
      >

      </BookingModal>

      <hr />
      <div className="p-4 flex items-center justify-between font-semibold text-lg">
        <div>Total</div>
        <div>${totalPrice}</div>
      </div>
    </div>
  );
};

RoomReservation.propTypes = {
  room: PropTypes.object,
  refetch : PropTypes.func,
};

export default RoomReservation;
