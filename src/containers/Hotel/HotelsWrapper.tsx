import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";

import { getAllHotels } from "../../api/hotels";
import HotelCard from "../../components/HotelCard/HotelCard";
import WithSpinner from "../../hocs/WithSpinner/WithSpinner";
import { Wrapper, CardContainer } from "./HotelsWrapper.styles";

const WithSpinnerHotelCard = WithSpinner(Wrapper);
const HotelsWrapper: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [hotels, setHotels] = useState([]);
  const [selected, setSelected] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    async function apicall() {
      getAllHotels()
        .then(result => {
          console.log(result);
          setHotels(result.data.data);
          return setIsLoading(false);
        })
        .catch(err => {
          setIsLoading(true);
          return toast.error("Something Went Wrong with Server...");
        });
    }
    apicall();
  }, []);

  return (
    <WithSpinnerHotelCard isLoading={isLoading}>
      {hotels.length > 0 ? (
        hotels.slice(0, 20).map((hotel, key) => {
          return (
            <CardContainer key={key}>
              <HotelCard
                key={key}
                onClick={() => setSelected(!selected)}
                selected={selected}
                {...hotel}
              />
            </CardContainer>
          );
        })
      ) : (
        <>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          {/* Same as */}
          <ToastContainer />
          Loading....
        </>
      )}
    </WithSpinnerHotelCard>
  );
};

export default HotelsWrapper;
