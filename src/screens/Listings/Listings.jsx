import { useProperties } from './hooks/useProperties';

const Listings = () => {
  const { data, error, isFetching } = useProperties();

  if (error) return <div>{error.message}</div>;

  if (isFetching) return <div>Loading</div>;

  return <div>{JSON.stringify(data)}</div>;
};

export { Listings };
