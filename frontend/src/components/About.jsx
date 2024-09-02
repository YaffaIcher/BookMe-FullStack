import React, { useEffect, useState } from 'react';
import Loader from './Loader';
import '../css/nav_about.css';

/**
 * About component renders information about the company, BookMe.
 * It displays a loading indicator while the component is in the loading state.
 * Once loading is complete, it shows details about the company's history,
 * services, and advantages.
 */
const About = () => {
  // State to manage the loading state
  const [isLoading, setIsLoading] = useState(true);

  // Simulate data fetching or other asynchronous operations
  useEffect(() => {
    // After loading is complete, set loading to false
    setIsLoading(false);
  }, []);

  return (
    <div>
      {isLoading ? (
        // Show loading spinner while data is being fetched
        <Loader />
      ) : (
        <>
          <div className='about'>
            <h2>About Us</h2>
            <p>
              BookMe is a subsidiary of "Sefer LeKol-Marketing and Distribution Ltd."
              It was established in 1967 and is one of the leading companies in the country in the book industry.
            </p>
            <p>
              BookMe offers books for teenagers, adults, and children.
              Additionally, it is among the largest distribution companies in the country. We have a large and efficient distribution network that delivers books from all publishers to stores across the country.
            </p>
            <p>
              In addition to books, we also distribute all equipment for public libraries, schools, colleges, universities, municipalities, and public institutions.
              BookMe has several retail stores and franchise stores throughout the country.
              The company employs about 50 permanent staff members.
            </p>
            <p>
              BookMe was established in 2001 as the online branch of Sefer LeKol.
              BookMe relies on the inventory and distribution infrastructure of Sefer LeKol,
              which gives us a relative advantage as a virtual bookstore with a large and diverse inventory of books and the ability for fast and efficient delivery.
            </p>
            <p>
              BookMe is considered the largest and cheapest online store!
              Our website offers telephone support during working hours and also the possibility to receive information and assistance via email.
            </p>
            <h2>We are glad you chose us and hope to provide you with the best service</h2>
          </div>
        </>
      )}
    </div>
  );
}

export default About;
