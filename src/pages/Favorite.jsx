import { useEffect, useState } from 'react';
import CarItem from '../components/CarItem/CarItem';

const Favorite = () => {
  const [favorite, setFavorite] = useState(
    () => JSON.parse(localStorage.getItem('favorite')) ?? []
  );

  useEffect(() => {
    localStorage.setItem('favorite', JSON.stringify(favorite));
  }, [favorite]);

  const isFavorite = id => favorite.some(item => item.id === id);

  return (
    <section className="py-[150px]">
      <div className="container">
        <ul className="mb-[100px] grid  tablet:grid-cols-2 desktop:grid-cols-4 desktop:gap-y-[50px]  desktop:gap-[29px] tablet:gap-[20px] tablet:gap-y-[44px] mobile:gap-y-[38px]">
          {favorite.length === 0 ? (
            <h1 className="text-[34px] font-[600]">Empty..</h1>
          ) : (
            favorite?.map(car => (
              <CarItem
                key={car.id}
                car={car}
                setFavorite={setFavorite}
                isFavorite={isFavorite(car.id)}
              />
            ))
          )}
        </ul>
      </div>
    </section>
  );
};

export default Favorite;
