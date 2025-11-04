import React from 'react';

const Contact = () => {
  return (
    <div className="py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl">Contact Us</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-stone-500 dark:text-stone-400">
            We'd love to hear from you. Send us a message and we'll get back to you as soon as possible.
          </p>
        </div>
        <div className="mt-12">
          <form action="#" method="POST" className="max-w-lg mx-auto">
            <div className="grid grid-cols-1 gap-y-6">
              <div>
                <label htmlFor="full-name" className="sr-only">Full name</label>
                <input
                  type="text"
                  name="full-name"
                  id="full-name"
                  autoComplete="name"
                  className="block w-full shadow-sm py-3 px-4 placeholder-stone-500 dark:placeholder-stone-400 focus:ring-stone-500 focus:border-stone-500 border-stone-300 dark:border-stone-600 rounded-md bg-white dark:bg-stone-800"
                  placeholder="Full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full shadow-sm py-3 px-4 placeholder-stone-500 dark:placeholder-stone-400 focus:ring-stone-500 focus:border-stone-500 border-stone-300 dark:border-stone-600 rounded-md bg-white dark:bg-stone-800"
                  placeholder="Email"
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="block w-full shadow-sm py-3 px-4 placeholder-stone-500 dark:placeholder-stone-400 focus:ring-stone-500 focus:border-stone-500 border-stone-300 dark:border-stone-600 rounded-md bg-white dark:bg-stone-800"
                  placeholder="Message"
                  defaultValue={''}
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-stone-700 hover:bg-stone-800 dark:bg-stone-600 dark:hover:bg-stone-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-stone-500"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;