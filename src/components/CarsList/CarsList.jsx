import { useEffect, useState } from 'react';
import { useGetCarsQuery } from '../../redux/cars/cars.operations';
import CarItem from '../CarItem/CarItem';

const CardList = () => {
  const [page, setPage] = useState(1);
  const [newData, setNewData] = useState([]);
  const [favorite, setFavorite] = useState(
    () => JSON.parse(localStorage.getItem('favorite')) ?? []
  );
  const { data, isLoading } = useGetCarsQuery(page);

  useEffect(() => {
    if (data) {
      setNewData(prev => [...prev, ...data]);
    }
  }, [data]);

  useEffect(() => {
    localStorage.setItem('favorite', JSON.stringify(favorite));
  }, [favorite]);

  const isFavorite = id => favorite.some(item => item.id === id);

  const addFavorite = id => {
    const carToAdd = newData.find(c => c.id === id);
    if (carToAdd) {
      setFavorite(prevFavorite => [...prevFavorite, carToAdd]);
    }
  };

  const loadMore = () => {
    setPage(prev => (prev += 1));
  };

  return isLoading ? (
    <div>Loading....</div>
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
      <button
        onClick={loadMore}
        className="block ml-auto mr-auto bg-transparent text-primary-blue hover:text-btn-hover font-manrope font-[500] text-[16px]"
      >
        Load more
      </button>
    </>
  );
};

export default CardList;
