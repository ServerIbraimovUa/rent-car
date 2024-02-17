import { useState } from 'react';
import { useGetCarsQuery } from '../redux/cars/cars.operations';
import CardList from '../components/CarsList/CarsList';
import Filters from '../components/Filters/Filters';

const Catalog = () => {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const { data, isLoading, isFetching } = useGetCarsQuery({ page, query });
  return (
    <section className="desktop:py-[100px] py-[50px] ">
      <div className="container">
        <Filters setQuery={setQuery} />
        <CardList
          setPage={setPage}
          data={data}
          query={query}
          isLoading={isLoading}
          isFetching={isFetching}
        />
      </div>
    </section>
  );
};

export default Catalog;
