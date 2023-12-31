import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import clsx from 'clsx';
import React from 'react';
import Select from '../Select';
import Corousel from '../Corousel';
import { useGetAllCategories } from '../../hooks/useGetAllCategories';

const Links = [
  'Best Sellers',
  'Gift Ideas',
  'New Releases',
  'Todays Deals',
  'Customer Service',
];

type Props = {
  category: string;
  onCategoryChange: (val: string) => void;
  searchQuery: string;
  onSearchChange:(val: string) => void;
}

export default function Header({
  category,
  onCategoryChange,
  searchQuery,
  onSearchChange,
}: Props) {
  const actionsClasses = clsx(
    'top-[10%] flex flex-col space-y-4 absolute md:space-y-0 w-4/5 md:w-1/2 md:flex-row md:space-x-6 md:left-1/2 md:-translate-x-1/2',
  );
  const {
    data: categories = [],
    isLoading,
  } = useGetAllCategories();

  return (
    <div className="flex justify-center h-3/5">
      <div className="z-50 fixed bg-slate-900 w-full py-2">
        <div className="flex justify-center space-x-6 items-center animate-marquee w-full overflow-hidden">
          {Links.map((link) => (
            <span
              key={link}
              className="text-xs text-white cursor-pointer"
            >
              {link}
            </span>
          ))}
        </div>
      </div>
      <Corousel />
      <div className={actionsClasses}>
        <div className="flex flex-1 items-center rounded-md overflow-hidden bg-white">
          <input
            className="flex flex-1 p-2.5 text-sm bg-transparent focus:outline-none"
            id="search-input"
            value={searchQuery}
            onChange={({ target: { value } }) => onSearchChange(value)}
            placeholder="Search Product"
          />
          <IconButton>
            <SearchIcon />
          </IconButton>
        </div>
        <div className="flex-1 flex items-center justify-between space-x-6 md:justify-start">
          <Select
            className="!w-1/2"
            onChange={onCategoryChange}
            options={['All categories', ...categories]}
            value={category}
            disabled={isLoading}
          />
          <div className="flex items-center space-x-6">
            <IconButton className="!bg-gray-800 w-10 h-10">
              <ShoppingCartIcon
                fontSize="small"
                className="text-white"
              />
            </IconButton>
            <IconButton className="!bg-gray-800">
              <PersonIcon className="text-white" />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
}
