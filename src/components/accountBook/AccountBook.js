import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PriceLists from './PriceLists';

export const AccountBook = () => {
  const { accountBookItems } = useSelector((state) => state.accoutBook);

  return (
    <div className="accountBook__container">
      <PriceLists items={accountBookItems} />
    </div>
  );
};

export default AccountBook;
