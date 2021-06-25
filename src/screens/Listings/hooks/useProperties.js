import { useQuery } from 'react-query';

function useProperties() {
  return useQuery('properties', () =>
    fetch('https://api.simplyrets.com/properties?offset=20&limit=20', {
      headers: {
        Authorization: `Basic ${btoa('simplyrets:simplyrets')}`,
      },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          return result;
        },
        (error) => {
          throw error;
        },
      ),
  );
}

export { useProperties };
