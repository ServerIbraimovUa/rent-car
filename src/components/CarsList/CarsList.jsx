import { useEffect, useState } from 'react';

import CarItem from '../CarItem/CarItem';
import Loading from '../Loading/Loading';

const CardList = ({ setPage, data, isLoading, isFetching, query }) => {
  const [newData, setNewData] = useState([]);
  const [favorite, setFavorite] = useState(
    () => JSON.parse(localStorage.getItem('favorite')) ?? []
  );

  useEffect(() => {
    if (data) {
      if (query) {
        setNewData(data);
        return;
      }
      setNewData(prev => [...prev, ...data]);
    }
  }, [data]);

  useEffect(() => {
    if (!query) {
      setNewData([]);
    }
  }, [query]);

  useEffect(() => {
    localStorage.setItem('favorite', JSON.stringify(favorite));
  }, [favorite]);

  const isFavorite = id => favorite.some(item => item.id === id);

  const addFavorite = id => {
    const carToAdd = newData.find(c => c.id === id);
    if (carToAdd) {
      setFavorite(prevFavorite => [carToAdd, ...prevFavorite]);
    }
  };

  const loadMore = () => {
    setPage(prev => (prev += 1));
  };

  return isLoading ? (
    <Loading />
  ) : (
    <>
      <ul className="mb-[100px] grid  tablet:grid-cols-2 desktop:grid-cols-4 desktop:gap-y-[50px]  desktop:gap-[29px] tablet:gap-[20px] tablet:gap-y-[44px] mobile:gap-y-[38px]">
        {newData?.map(car => (
          <CarItem
            key={car.id}
            car={car}
            addFavorite={addFavorite}
            setFavorite={setFavorite}
            isFavorite={isFavorite(car.id)}
          />
        ))}
      </ul>
      {newData.length >= 12 && (
        <button
          onClick={loadMore}
          className="block ml-auto mr-auto bg-transparent text-primary-blue hover:text-btn-hover font-manrope font-[500] text-[16px]"
        >
          {isFetching ? 'Loading..' : 'Load more'}
        </button>
      )}
    </>
  );
};

export default CardList;
