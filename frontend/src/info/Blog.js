import React from "react";
import corona from "../assets/corona.png";
import exercise from "../assets/exercise.png";

const Blog = () => {
  const Posts = [
    {
      img: corona,
      category: "Pandemic",
      title: "Corona Virus",
      author: "Ram Prasad",
      date: "2021",
      article:
        "COVID-19, also called coronavirus disease 2019, is an illness caused by a virus. The virus is called severe acute respiratory syndrome coronavirus 2, or more commonly, SARS-CoV-2. It started spreading at the end of 2019 and became a pandemic disease in 2020.",
    },
    {
      img: exercise, 
      category: "Fitness",
      title: "Exercise 1/2 Hour a Day",
      author: "Sita",
      date: "2021",
      article:
        "Exercising for just half an hour a day can greatly improve your physical and mental health. It boosts cardiovascular fitness, strengthens muscles, and enhances flexibility. Activities like brisk walking, jogging, cycling, or yoga can help maintain a healthy weight and reduce the risk of chronic diseases such as diabetes, heart disease, and hypertension. Exercise also releases endorphins, improving mood, reducing stress, and enhancing overall well-being. Consistency is key—choose activities you enjoy to make it a daily habit. Start small and stay committed!",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-200 text-black rounded-lg shadow-xl p-10 h-auto">
      <div className="flex">
        <div className="md:w-1/2">
          <img
            src="https://imgs.search.brave.com/rNTuFTAjgFRvrZsrY-zrhaIv0wCUdqt3BQrE_FLqBxo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzIxLzQ3Lzk5/LzM2MF9GXzIyMTQ3/OTk0Nl8yeVVtV1Jt/VlBCa2E2ZDR6Y1hi/QmhKYlJyYThXY3BR/Vi5qcGc"
            alt="Featured Article"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="md:w-1/2 p-8">
          <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium">
            Featured
          </span>
          <h2 className="text-2xl font-bold text-gray-900 mt-4 mb-4">
            The Future of Blood Donation: Innovations and Advancements
          </h2>
          <p className="text-gray-600 mb-6">
            A platform that connects blood donors and those in need of blood. Our team believes in the power of technology to bring a positive change to the world, and with HealthNet, we're committed to making blood donation smooth and efficient.
          </p>
          <div className="flex items-center text-sm text-gray-500 mb-6">
            <div className="mr-4">Ankit Dhakal</div>
            <div>12 July, 2024</div>
          </div>
          <button className="bg-red-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-red-700">
            Read Full Article →
          </button>
        </div>
      </div>

      <div className="bg-red-600 mt-12 w-1/4 text-white text-2xl px-6 py-2 rounded-full mb-10 font-bold hover:bg-red-700 text-center">
        Read More Articles
      </div>

      <div className="bg-white rounded-lg  flex-1 justify-between  items-center shadow-md p-6">
        {Posts.map((post, index) => (
          <div key={index} className="mb-8">
            <div className="flex">
              <img src={post.img} alt={post.title} className="w-1/4 h-52 object-cover rounded-lg" />
            
            <div>
                <span className="relative top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm">
                {post.category}
              </span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{post.title}</h3>
              <p className="text-gray-600 mb-4">{post.article}</p>
              <div className="flex items-center text-md text-gray-500">
                <div className="mr-4">{post.author}</div>
                <div>{post.date}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
