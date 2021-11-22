import React, { useEffect } from 'react';
import { Text } from 'react-native';
import { useSelector } from 'react-redux';

import { getJobs, store, getState } from 'store';
import { DefaultLayout } from 'layouts';

export const HomeScreen = () => {
  const { jobs, loadin, error } = useSelector(getState);

  useEffect(() => {
    store.dispatch(getJobs());
  }, []);

  return (
    <DefaultLayout>{jobs && jobs.map(item => <Text>{JSON.stringify(item)}</Text>)}</DefaultLayout>
  );
};
