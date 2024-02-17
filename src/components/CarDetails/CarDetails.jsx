function CarDetails({ car }) {
  const { img } = car;
  const functional = [...car.accessories, ...car.functionalities];
  const mileage = car.mileage.toString().split('');
  return (
    <div className="flex flex-col relative">
      <img className="  mb-[14px] rounded-xl" src={img} alt="car" />
      <div className="flex mb-[8px] text-[16px] font-[500]">
        <h2>
          {car.make} <span className="text-primary-blue">{car.model}</span>,
        </h2>
        <span> {car.year}</span>
      </div>
      <div className="flex flex-wrap gap-x-[6px] mb-[14px]  text-[12px] text-secondary-text">
        <span>{car.address}</span>
        <span className="w-[0.5px] h-[16px] bg-color-after "></span>
        <span>Id:{car.id}</span>
        <span className="w-[0.5px] h-[16px] bg-color-after "></span>
        <span>Year: {car.year}</span>
        <span className="w-[0.5px] h-[16px] bg-color-after "></span>
        <span>Type: {car.type}</span>
        <span className="w-[0.5px] h-[16px] bg-color-after "></span>
        <span>Fuel Consumption: {car.fuelConsumption}</span>
        <span className="w-[0.5px] h-[16px] bg-color-after "></span>
        <span>Engine Size: {car.engineSize}</span>
      </div>

      <h3 className="mb-[24px] text-[14px]">{car.description}</h3>

      <div className="mb-[24px]">
        <h3 className="mb-[8px] text-[14px]">
          Accessories and functionalities:
        </h3>
        <ul className="flex flex-wrap gap-x-[12px] h-[44px] mb-[24px]  text-[12px] text-secondary-text">
          {functional.map((item, idx) => {
            return (
              <li
                key={idx}
                className="after:absolute after:mx-[6px] after:w-[0.5px] after:h-[16px] after:bg-color-after"
              >
                <span>{item}</span>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="mb-[24px]">
        <h3 className="mb-[15px] text-[14px]">Rental Conditions: </h3>
        <div className="flex flex-wrap gap-2 text-[12px] text-[#363535]">
          <p>{car.rentalConditions}</p>
          <p>
            Mileage:{' '}
            <span className="text-primary-blue ">{`${mileage.splice(
              0,
              1
            )},${mileage.join('')}`}</span>
          </p>
          <p>
            Price: <span className="text-primary-blue ">{car.rentalPrice}</span>
          </p>
        </div>
      </div>

      <a
        href="tel:+380730000000"
        className="flex items-center justify-center w-[168px] h-[44px] min-h-11 font-[600] text-white rounded-xl  bg-primary-blue hover:bg-btn-hover"
      >
        Rent car
      </a>
    </div>
  );
}

export default CarDetails;
