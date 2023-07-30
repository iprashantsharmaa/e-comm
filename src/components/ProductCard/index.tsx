import React from 'react';

type Props = {
  itemName: string;
  price: string;
  image: string;
}
export default function ProductCard({
  itemName,
  price,
  image,
}: Props) {
  return (
    <div className="flex flex-col items-center justify-between rounded shadow-xl p-6 bg-white max-w-xs w-full">
      <div className="flex flex-col items-center space-y-2">
        <span className="font-bold text-lg text-center">{itemName}</span>
        <div className="flex flex-row items-center space-x-2">
          <span className="text-sm text-amber-600 font-semibold">Price</span>
          <span className="text-sm">{`$ ${price}`}</span>
        </div>
      </div>
      <img
        className="object-contain h-80 mt-6"
        src={image ?? ''}
        alt={itemName}
      />
    </div>
  );
}
