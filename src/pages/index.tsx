import React, { Fragment } from "react";
import {
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
} from "@chakra-ui/react";

const HomePage = () => {
  return (
    <div className="bg-slate-800 min-h-screen flex justify-center items-center">
      <Fragment>
        <div className="flex p-[1.25rem] w-[18.75rem] h-[18.75rem] bg-slate-500 shadow-md rounded-md">
          <Slider aria-label="slider-ex-1" defaultValue={30}>
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
        </div>
      </Fragment>
    </div>
  );
};

export default HomePage;
