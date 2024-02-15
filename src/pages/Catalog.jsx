import CardList from '../components/CarsList/CarsList';
import Filters from '../components/Filters/Filters';

const Catalog = () => {
  return (
    <section className="py-[100px]">
      <div className="container">
        <Filters />
        <CardList />
      </div>
    </section>
  );
};

export default Catalog;
