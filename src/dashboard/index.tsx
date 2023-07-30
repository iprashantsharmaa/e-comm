import React, { useState } from 'react';
import Products from '../components/Products';
import Header from '../components/Header';

export default function Dashboard() {
  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategory] = useState('All categories');

  return (
    <>
      <Header
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        category={category}
        onCategoryChange={setCategory}
      />
      <Products
        category={category}
        searchQuery={searchQuery}
      />
    </>
  );
}
