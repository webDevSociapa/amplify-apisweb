import { useEffect, useState } from 'react';
import ROffice from '../../../../assets/images/ContactUs/apisarabiaNew1.png';
import RegisterOffice from '../../../../assets/images/ContactUs/newHeadOffice.jpg';
import FactoryAddress from '../../../../assets/images/ContactUs/Apisfactory1.png';
import axios from 'axios';

const FactoryTabs = () => {
  const [activeTab, setActiveTab] = useState('FactoryAddress');
  const [contactDetails, setContactDetails] = useState([]);

  const tabContent = {
    // RegisteredOffice: {
    //   image: RegisterOffice.src,
    //   title: 'Registered Office',
    //   address1: '18/32, East Patel Nagar New Delhi 110 008 India',
    //   address2:
    //     'Telephone No : +91-11-43206666, Fax No: +91-11-43559111, vikas.cs@apisindia.com',
    //   mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1750.7789475989298!2d77.17160334758306!3d28.6430095782245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d029570d2aacd%3A0x705df65106416c81!2s18%2C%20Block%204%2C%20East%20Patel%20Nagar%2C%20Patel%20Nagar%2C%20New%20Delhi%2C%20Delhi%20110008!5e0!3m2!1sen!2sin!4v1734948627355!5m2!1sen!2sin',
    // },
    // OverseasOperation: {
    //   image: ROffice.src,
    //   title: 'Overseas Operation',
    //   address1: 'Apis Arabia Foods LLC TP030603, National Industries Park Dubai - UAE',
    //   address2:
    //     'Telephone No : +971-43439442, admin@apisarabia.ae, General enquiries: mail@apisindia.com',
    //   mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1861093.4468067323!2d52.62910215109915!3d24.34829915112267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f0de9ff1fe65f%3A0xc60195bfe55b15fd!2sApis%20Arabia-%20Dubai!5e0!3m2!1sen!2sin!4v1734948929909!5m2!1sen!2sin',
    // },
    FactoryAddress: {
      image: FactoryAddress.src,
      title: 'Factory Address',
      address1: 'Address: 66-72, Peerpura Rd, Roorkee, Shimlauni, Uttarakhand 247667',
      address2:
        'General enquiries: mail@apisindia.com',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3461.7411819388685!2d77.88127159999999!3d29.814020799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390eb35b4768d7c9%3A0x58151f4740f1e8b7!2sApis%20India%20Limited!5e0!3m2!1sen!2sin!4v1737982556579!5m2!1sen!2sin',
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/contactDetails');
        setContactDetails(response.data[0]);
      } catch (error) {
        console.error('Error fetching contact details:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="w-full text-center px-4">
      <div className="flex flex-wrap justify-around mb-4">
        {Object.keys(tabContent).map((tab) => (
          <button
            key={tab}
            className={`text-lg font-bold capitalize px-2 py-1 ${activeTab === tab
                ? 'text-[#9F7B49] border-b-2 border-[#000000]'
                : 'text-[#9F7B49]'
              }`}
            onClick={() => setActiveTab(tab)}
          >
            {tabContent[tab].title}
          </button>
        ))}
      </div>
      <div>
        {/* <h1
          className="text-[#545454] text-3xl font-bold mb-10 capitalize"
          style={{ color: 'rgb(159, 123, 73)', marginBottom: '75px' }}
        >
          {tabContent[activeTab].title}
        </h1> */}
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
          <img
            src={tabContent[activeTab].image}
            alt={tabContent[activeTab].title}
            width={637}
            height={344}
            className="w-full md:w-auto h-auto object-cover border border-stone-500 rounded"
          />
          <div className="w-full md:w-1/2 mt-4 md:mt-0 text-left xl:ml-3">
            <div className="mb-6">
              <h3 className="text-[#9F7B49] text-xl font-bold mb-2">{tabContent[activeTab].title}</h3>
              <p className="text-black text-sm leading-relaxed">{tabContent[activeTab].address1}</p>
              <p className="text-black text-sm leading-relaxed mt-2">{tabContent[activeTab].address2}</p>
            </div>
            <div>
              <iframe
                src={tabContent[activeTab].mapUrl}
                width="100%"
                height="300"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FactoryTabs;
