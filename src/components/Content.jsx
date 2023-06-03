
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

import { useState } from 'react';
import axios from 'axios';

export default function Content() {
  const [emailText, setEmailText] = useState('');
  const [apiResponse, setApiResponse] = useState(null);
  const [predictionResult, setPredictionResult] = useState('');
  

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://127.0.0.1:8000/predict', { email_text: emailText });
      // setApiResponse(response.data);
      // setEmailText('');
      setPredictionResult(response.data.Priority);
      

    } catch (error) {
      console.log(error)
      // Handle errors
    }
  };

  return (
    <div className="bg-white">
      <div className="relative isolate px-6 pt-14 lg:px-8">
      <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>

      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
      <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            Now you can Label your Mails with ML techniques.
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            A BERT Model Trained with 5000+ Data
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            Unlock the Power of our Advanced Machine Learning Model, Trained with Over 5500 Data Points! With the Integration of BERT for Spam Classification and Logistic Regression for Prioritization, Join us in Unleashing its Full Potential and Let's Hack the Efficiency of Email Management Together!
            </p>
            
          </div>
      </div>

      <div className="mx-auto max-w-2xl text-center">
      <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Try Now</h2>            <p class="mt-2 text-lg leading-8 text-gray-600"> Effortlessly Prioritize Emails and Boost Productivity with Our Cutting-Edge Machine Learning Solution!</p>
      </div>

      <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20" onSubmit={handleFormSubmit}>
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">Enter the Email Text</label>
            <div className="mt-2.5">
              <textarea
                name="message"
                id="message"
                rows="4"
                value={emailText}
                onChange={(e) => setEmailText(e.target.value)}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button type="submit" className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Prioritize Now</button>
        </div>
      </form>
     
      {predictionResult && (
        <div className="mt-10 mx-auto max-w-xl">
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-2">Test Result</h2>
            <p>Priority of the Email: {predictionResult}</p>
          </div>
        </div>
      )}


      <br></br>
      <br></br>
    </div>
  );
}
