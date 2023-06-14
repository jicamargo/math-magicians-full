import { useState } from 'react';
import Calculator from '@/components/Calculator';
import Header from '@/components/Header';

const Calc = () => {
  return (
    <>
       <Header>
        <h1>Let's crunch those numbers together!</h1>
      </Header>
      <Calculator />
    </>
  );
};
export default Calc;
