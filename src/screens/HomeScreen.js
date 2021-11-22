import React, { useEffect } from 'react';
import { Text } from 'react-native';

import { getJobs, store } from 'store';
import { DefaultLayout } from 'layouts';

export const HomeScreen = () => {
  useEffect(() => {
    store.dispatch(getJobs());
  }, []);

  return (
    <DefaultLayout>
      <Text>Home Screen</Text>
    </DefaultLayout>
  );
};
