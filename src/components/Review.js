import React from 'react';
import Slider from 'react-slick';

const reviews = [
    {
        image: 'https://via.placeholder.com/100',
        name: 'Jane Doe',
        designation: 'Software Engineer',
        quote: 'Souvik is an exceptional developer with a deep understanding of technology and a great problem-solving mindset.',
    },
    {
        image: 'https://via.placeholder.com/100',
        name: 'John Smith',
        designation: 'Tech Lead',
        quote: 'Working with Souvik has been a fantastic experience. His skills in software development are top-notch.',
    },
    {
        image: 'https://via.placeholder.com/100',
        name: 'Alice Johnson',
        designation: 'Project Manager',
        quote: 'Souvik consistently delivers high-quality code and is a valuable asset to any team. His enthusiasm for coding is inspiring.',
    },
];


const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: false,
    centerPadding: '0',
    rows: 1,
  };
  
  const Review = () => {
    return (
      <div className="bg-gray-900 bg-opacity-80 p-6 rounded-lg shadow-lg p-6">
        <h2 className="text-3xl font-semibold mb-8 font-bold bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">What Engineers Say About Me</h2>
        <Slider {...settings} className="relative">
          {reviews.map((review, index) => (
            <div key={index} className="flex-shrink-0 w-full sm:w-1/2 px-4">
              <div className="bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 text-white p-6 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105">
                <div className="flex justify-center mb-3">
                  <img src={review.image} alt={`${review.name}'s profile`} className="w-20 h-20 rounded-full border-4 border-white" />
                </div>
                <h3 className="text-lg font-semibold text-center mb-2">{review.name}</h3>
                <p className="text-sm text-center mb-4">{review.designation}</p>
                <p className="text-base text-center">{review.quote}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  };

export default Review;
