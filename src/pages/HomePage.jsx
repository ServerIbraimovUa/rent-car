const HomePage = () => {
  const carRentalFeatures = {
    'Diverse Range of Cars':
      'Whether you need a stylish sedan for a business trip, a spacious SUV for family vacations, or a compact car for urban adventures, we have the perfect solution for you.',
    'Easy Booking':
      'Our website provides a simple and intuitive interface for booking. Just select your dates, choose the type of car, and complete your order in just a few clicks.',
    'Fair Prices':
      'We value your budget and offer transparent and competitive rates. No hidden fees, only clear rental conditions.',
    'Safety and Comfort':
      'All our cars undergo regular maintenance to ensure your safety and comfort on the road.',
    'Flexible Rental Options':
      'Choose the duration of your rental that suits your plans – from a few hours to several weeks.',
  };
  return (
    <section className="py-[50px] home min-h-[100%]">
      <div className="container flex flex-col desktop:flex-row gap-[10px] items-start ">
        <h1 className="p-[10px] rounded-[20px] font-[600] text-[26px] desktop:text-[32px]  bg-[#a5c7ffd5]">
          Welcome to{' '}
          <span className="font-serif text-primary-blue">
            {'RentalCars.com'}
          </span>
        </h1>
        <div className="text-[18px] p-[22px] rounded-[20px] ml-auto desktop:max-w-[50%] bg-[#a5c7ff99]">
          <h2 className="text-[24px] font-[600]">Features:</h2>
          <ul className="grid desktop:grid-cols-1 grid-cols-2 font-[500] gap-[4px]">
            {Object.entries(carRentalFeatures).map(
              ([feature, description], index) => (
                <li key={index}>
                  <strong className="text-primary-blue mr-[4px] font-[600]">
                    {feature}:
                  </strong>{' '}
                  {description}
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
