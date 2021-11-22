import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { JobList } from 'components';
import { getJobs, store, getState } from 'store';
import { ListLayout } from 'layouts';

export const HomeScreen = ({ navigation }) => {
  const { jobs, loading, error } = useSelector(getState);

  useEffect(() => {
    store.dispatch(getJobs());
  }, []);

  return (
    <ListLayout>{jobs && !error && <JobList navigation={navigation} data={jobs} />}</ListLayout>
  );
};
