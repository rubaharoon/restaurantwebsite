import React from "react";
const ExpertsSection = () => {
    const experts = [
      { name: "Thomas Henry", title: "Dessert Specialist", img: "/images/chef1.png" },
      { name: "James Johnson", title: "Chef Master", img: "/images/chef2.png" },
      { name: "Maria Smith", title: "BBQ Specialist", img: "/images/chef3.png" },
    ];
  
    return (
      <section className="py-16 bg-white text-center">
        <h2 className="text-3xl font-semibold mb-10 text-purple-400">Meet Our Experts</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
          {experts.map((expert, index) => (
            <div key={index} className="bg-purple-200 p-8 rounded-lg shadow-md text-center">
              <img src={expert.img} alt={expert.name} className="w-full h-full mx-auto mb-4 rounded-full "/>
              <h3 className="text-xl font-medium text-purple-400">{expert.name}</h3>
              <p className="text-sm text-gray-500">{expert.title}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default ExpertsSection;
  