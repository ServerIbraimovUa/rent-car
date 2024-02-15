import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import carsName from '/src/db/makers.json';
import carsPrice from '/src/db/price.json';
// const groupBadgeStyles = {
//   backgroundColor: '#ffffff',
//   borderRadius: '14px',
//   color: '#000000',
//   display: 'inline-block',
//   fontSize: 18,
//   fontWeight: 500,
//   lineHeight: '1.11',
//   textAlign: 'center',
// };
const animatedComponents = makeAnimated();
const Filters = () => {
  return (
    <>
      <form className="flex items-end justify-center gap-[18px] mb-[50px]">
        <label className="flex flex-col gap-[8px]">
          <span className="text-[#8A8A89]">Car brand</span>
          <Select
            closeMenuOnSelect={false}
            components={animatedComponents}
            isMulti
            options={carsName}
          />
        </label>
        <label className="flex flex-col gap-[8px]">
          <span className="text-[#8A8A89]">Price/ 1 hour</span>
          <Select options={carsPrice} />
        </label>
        <label className="flex flex-col gap-[8px]">
          <span className="text-[#8A8A89]">Сar mileage / km</span>
          <Select options={carsPrice} />
        </label>
        <label className="flex flex-col gap-[8px] self-end text-[#8a8a89]">
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
