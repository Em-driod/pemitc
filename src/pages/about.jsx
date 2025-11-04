import React from 'react';

const team = [
  {
    name: 'John Doe',
    role: 'Co-Founder / CEO',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    name: 'Jane Smith',
    role: 'Co-Founder / CTO',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    name: 'Peter Jones',
    role: 'Lead Designer',
    imageUrl: 'https://via.placeholder.com/150',
  },
];

const About = () => {
  return (
    <div className="py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl">About Us</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-stone-500 dark:text-stone-400">
            We are a passionate team dedicated to building innovative solutions that empower our users and drive progress.
          </p>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold">Our Mission</h3>
          <p className="mt-4 max-w-3xl mx-auto text-md text-stone-500 dark:text-stone-400">
            To provide high-quality, user-centric web applications that are both powerful and easy to use. We believe in the power of technology to solve complex problems and strive to create products that make a real difference in people's lives. Our goal is to push the boundaries of what's possible on the web.
          </p>
        </div>

        <div className="mt-20">
          <div className="text-center">
            <h3 className="text-2xl font-bold">Meet Our Team</h3>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((person) => (
              <div key={person.name} className="text-center">
                <img className="mx-auto h-40 w-40 rounded-full" src={person.imageUrl} alt="" />
                <h4 className="mt-6 text-lg font-medium">{person.name}</h4>
                <p className="text-stone-600 dark:text-stone-400">{person.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;