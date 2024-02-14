const CarItem = ({ car }) => {
  const adress = car.address.split(',');
  const splitedFunctional = car.functionalities[0].split(' ');
  const { img } = car;

  return (
    <li className=" h-[426px] flex flex-col">
      <img
        className="object-cover h-[268px] mb-[14px] rounded-xl"
        src={img}
        alt="car"
      />
      <div className="flex mb-[8px] text-[16px] font-[500]">
        <h2>
          {car.make} <span className="text-primary-blue">{car.model}</span>,
        </h2>
        <span> {car.year}</span>
        <span className="ml-auto">{car.rentalPrice}</span>
      </div>
      <div className="flex flex-wrap gap-x-[6px] text-[12px] text-secondary-text">
        <span>{adress[1]}</span>
        <span className="w-[0.5px] h-[16px] bg-color-after"></span>
        <span>{adress[2]}</span>
        <span className="w-[0.5px] h-[16px] bg-color-after "></span>
        <span>{car.rentalCompany}</span>
        <span className="w-[0.5px] h-[16px] bg-color-after "></span>
        <span>Premium</span>
        <span className="w-[0.5px] h-[16px] bg-color-after "></span>
        <span>{car.type}</span>
        <span className="w-[0.5px] h-[16px] bg-color-after "></span>
        <span> {car.model}</span>
        <span className="w-[0.5px] h-[16px] bg-color-after "></span>
        <span>
          {splitedFunctional[0]} {splitedFunctional[0]}
        </span>
      </div>

      <button
        type="button"
        className=" w-[100%] h-[44px] mt-auto font-[600] text-white rounded-xl  bg-primary-blue hover:bg-btn-hover"
      >
        Learn more
      </button>
    </li>
  );
};

export default CarItem;
