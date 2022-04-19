import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../components/Header';
import AccountBook from '../components/accountBook/AccountBook';

import { fetchAllItemFormAccountBook } from '../stores/accoutBookSlice';

export const AccountBookLayout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllItemFormAccountBook());
  }, [dispatch]);

  return (
    <div className="accountBookLayout">
      <Header />
      <AccountBook />
    </div>
  );
};

export default AccountBookLayout;
