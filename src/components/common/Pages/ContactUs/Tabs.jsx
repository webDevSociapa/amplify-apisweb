import { useEffect, useState } from "react";
import ROffice from "../../../../assets/images/ContactUs/apisarabiaNew1.png";
import RegisterOffice from "../../../../assets/images/ContactUs/newHeadOffice.jpg";
import axios from "axios";

const ContactSection = () => {
  const [contactDetails, setContactDetails] = useState({});

  const offices = [
    {
      image: RegisterOffice.src,
      title: "Registered Office",
      address1: "18/32, East Patel Nagar New Delhi 110 008 India",
      address2: "Mail@apisindia.com",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1750.7789475989298!2d77.17160334758306!3d28.6430095782245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d029570d2aacd%3A0x705df65106416c81!2s18%2C%20Block%204%2C%20East%20Patel%20Nagar%2C%20Patel%20Nagar%2C%20New%20Delhi%2C%20Delhi%20110008!5e0!3m2!1sen!2sin!4v1734948627355!5m2!1sen!2sin",
    },
    {
      image: ROffice.src,
      title: "Overseas Operation",
      address1: "Apis Arabia Foods LLC TP030603, National Industries Park Dubai - UAE",
      address2:
        "Telephone No : +971-43439442, admin@apisarabia.ae, General enquiries: mail@apisindia.com",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1861093.4468067323!2d52.62910215109915!3d24.34829915112267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f0de9ff1fe65f%3A0xc60195bfe55b15fd!2sApis%20Arabia-%20Dubai!5e0!3m2!1sen!2sin!4v1734948929909!5m2!1sen!2sin",
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/contactDetails");
        setContactDetails(response.data[0]);
      } catch (error) {
        console.error("Error fetching contact details:", error);
      }
    };
    fetchData();
  }, []);

  return (
  <div className="w-full px-4 space-y-12">
  {offices.map((office, index) => (
    <div
      key={index}
      className="flex flex-col items-center text-center space-y-4"
    >
      {/* Details */}
      <div className="w-full md:w-3/4 lg:w-1/2  space-y-2">
        <h3 className="text-[#9F7B49] text-2xl font-bold">
          {office.title}
        </h3>

        {/* Address */}
        <p className="text-black text-base leading-relaxed">
          {office.address1}
        </p>

        {/* Email */}
        {office.email && (
          <p className="text-black text-base leading-relaxed">
            <span className="font-medium">Email: </span>
            <a
              href={`mailto:${office.email}`}
              className="text-blue-600 underline"
            >
              {office.email}
            </a>
          </p>
        )}
      </div>

      {/* Image */}
      <img
        src={office.image}
        alt={office.title}
        className="max-w-[1000px] w-full h-[400px] object-cover rounded-lg shadow-md border border-stone-300"
      />

      {/* Map */}
      <div className="max-w-[1000px] w-full">
        <iframe
          src={office.mapUrl}
          height="400"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full rounded-lg shadow-md border border-stone-300"
        ></iframe>
      </div>
    </div>
  ))}
</div>


  );
};

export default ContactSection;
