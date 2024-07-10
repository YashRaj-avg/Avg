import React from "react";

const About=()=>{
    return(
        
        <div className=''>
        <div className='relative  '>
        <img className="w-full"src='./e.jpg'alt="image"/>


        <div className=" absolute top-[20%] right-[25%] max-w-3xl p-8 md:p-16 bg-slate-800 rounded-lg shadow-xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-yellow-400">About Us</h2>
          <p className="text-lg leading-relaxed text-white">
            Welcome to our gaming universe! Dive into the realm where pixels meet passion, and every
            adventure tells a story. Whether you're a fierce warrior or a cunning strategist, there's
            always a place for you here.
          </p>
          <p className="text-lg leading-relaxed mt-4 text-white">
            Our mission is simple: to create unforgettable experiences that ignite your imagination and
            keep you on the edge of your seat. Join us as we push boundaries, defy expectations, and
            celebrate the artistry of gaming.
          </p>
          <p className="text-lg leading-relaxed mt-4 text-white">
            Let's embark on epic quests, forge alliances, and conquer new worlds together. The journey
            awaits - are you ready?
          </p>
        </div>
        </div>
        </div>
   
    );
  };
    
   
export default About;
