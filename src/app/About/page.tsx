// import { getAuth } from 'firebase/auth';
import Image from 'next/image';

export default function About(){
  // const user = getAuth();
  // if(user){
  //   console.log(user)
  // }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-6xl mx-auto p-10 shadow-sm rounded-lg">
        <h1 className="text-4xl font-bold text-center mb-4">About Us</h1>
        <p className="text-lg text-gray-600 mb-6">
          Welcome to our company! We are dedicated to providing the best service possible. Our team is composed of experienced professionals who are passionate about what they do.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-around">
          <div className=" md:mb-0">
            <Image 
              src="https://res.cloudinary.com/dvmmuj2r0/image/upload/fl_preserve_transparency/v1727181095/Designer_4_iutvxb.jpg?_s=public-apps" 
              alt="Our Team" 
              width={320}
              height={320}
              className="w-64 h-64 md:w-64 md:h-64 lg:w-64 lg:h-64 object-cover rounded-full shadow-lg" 
            />
            <h2 className="text-2xl font-semibold text-center mt-4">Our Team</h2>
          </div>
          <div className="md:ml-6">
          
            <h2 className="text-2xl font-semibold text-center mt-4">Our Mission</h2>
            <p className="text-gray-600">
              Our mission is to deliver high-quality products that bring value to our customers. We strive to innovate and continuously improve our offerings to meet the evolving needs of our clients by leveraging AutoML solutions that automatically handle data preprocessing, model selection, and hyperparameter tuning, allowing us to focus on delivering impactful results.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};