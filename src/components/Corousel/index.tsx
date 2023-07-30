import React, { useEffect, useState } from 'react';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import IconButton from '@mui/material/IconButton';

const banners = [
  '/banners/banner_1.jpeg',
  '/banners/banner_2.jpeg',
  '/banners/banner_3.jpeg',
  '/banners/banner_4.jpeg',
];

export default function Corousel() {
  const [bannerIndex, setBannerIndex] = useState(0);

  const handlePrevious = () => {
    if (bannerIndex <= 0) {
      setBannerIndex(3);
    } else {
      setBannerIndex((index) => index - 1);
    }
  };

  const handleNext = () => {
    if (bannerIndex >= 3) {
      setBannerIndex(0);
    } else {
      setBannerIndex((index) => index + 1);
    }
  };

  return (
    <>
      <img
        className="-z-1 w-full h-full !object-cover transform duration-1000 ease-in-out"
        alt="banner"
        src={banners[bannerIndex]}
      />
      <div className="w-full px-10 flex justify-between items-center !absolute top-[30%]">
        <IconButton
          onClick={handlePrevious}
          className="!bg-gray-300"
        >
          <NavigateBeforeIcon />
        </IconButton>
        <IconButton
          onClick={handleNext}
          className="!bg-gray-300"
        >
          <NavigateNextIcon />
        </IconButton>
      </div>
    </>
  );
}
