import { assets } from '../../assets/assets';
const Companies = () => {
  return (
    <div className="pt-6">
      <p className="text-base text-gray-500">Trusted by learners from</p>
      <div className="flex flex-wrap justify-center items-center gap-6 md:gap-16 md:mt-10 mt-5 ">
        <img src={assets.microsoft_logo} alt="Microsoft Logo" className="w-20 md:w-28"/>
        <img src={assets.walmart_logo} alt="Walmart Logo" className="w-20 md:w-28" />
        <img src={assets.accenture_logo} alt="Accenture Logo" className="w-20 md:w-28"/>
        <img src={assets.adobe_logo} alt="Adobe Logo" className="w-20 md:w-28" />
        <img src={assets.paypal_logo} alt="Paypal Logo" className="w-20 md:w-28" />
      </div>
    </div>
  );
};

export default Companies;
