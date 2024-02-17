import Select from 'react-select';
import carsName from '/src/db/makers.json';
import carsPrice from '/src/db/price.json';

const Filters = ({ setQuery }) => {
  const onSubmit = e => {
    e.preventDefault();
    const marka = e.target.elements.make.value;
    // const price = e.target.elements.price.value;
    setQuery(marka);
  };
  const onChange = e => {
    setQuery(e.value);
  };
  return (
    <>
      <form
        onSubmit={onSubmit}
        className="flex desktop:flex-row desktop:items-end justify-center gap-[18px] mb-[50px] p-[8px] mobile:flex-col border rounded-[20px] border-gray-300 bg-[#a5c7ffd5]"
      >
        <label className="flex flex-col gap-[8px] desktop:w-[224px]">
          <span className="text-[#8A8A89]">Car brand</span>
          <Select options={carsName} name="make" onChange={onChange} />
        </label>
        <label className="flex flex-col gap-[8px] desktop:w-[125px]">
          <span className="text-[#8A8A89]">Price/ 1 hour</span>
          <Select options={carsPrice} name="price" />
        </label>
        <label className="flex flex-col gap-[8px] desktop:w-[160px]">
          <span className="text-[#8A8A89]">Сar mileage / km</span>
          <Select options={carsPrice} />
        </label>
        <label className="flex flex-col gap-[8px] text-[#8a8a89]">
          <Select options={carsPrice} />
        </label>
        <button
          type="submit"
          className="flex items-center justify-center w-[168px] h-[44px] min-h-11 font-manrope font-[600] text-white rounded-xl  bg-primary-blue hover:bg-btn-hover"
        >
          Search
        </button>
      </form>
    </>
  );
};

export default Filters;
