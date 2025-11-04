import React from 'react';

const services = [
  {
    icon: '⚙️',
    title: 'Web Development',
    description: 'We build responsive and performant websites using modern technologies that fit your needs.',
  },
  {
    icon: '🎨',
    title: 'UI/UX Design',
    description: 'Our design team creates intuitive and beautiful user interfaces that enhance user engagement.',
  },
  {
    icon: '☁️',
    title: 'Cloud Solutions',
    description: 'Leverage the power of the cloud with our scalable and secure infrastructure solutions.',
  },
  {
    icon: '📊',
    title: 'Data Analytics',
    description: 'Turn your data into actionable insights with our comprehensive analytics services.',
  },
];

const ServicePage = () => {
  return (
    <div className="py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl">Our Services</h2>
          <p className="mt-4 text-lg text-stone-500 dark:text-stone-400">We offer a wide range of services to help you grow.</p>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div key={service.title} className="pt-6">
                <div className="flow-root bg-stone-50 dark:bg-stone-800 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-stone-700 dark:bg-stone-600 rounded-md shadow-lg">
                        <span className="text-2xl">{service.icon}</span>
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium tracking-tight">{service.title}</h3>
                    <p className="mt-5 text-base text-stone-500 dark:text-stone-400">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;