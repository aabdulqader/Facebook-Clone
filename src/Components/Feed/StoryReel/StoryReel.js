import React from "react";
import Story from "./Story/Story";
import "./StoryReel.css";
import image from "./abdul-qader.png";

const StoryReel = () => {
  return (
    <div className="storyReel">
      <Story
        image="https://images.pexels.com/photos/5063828/pexels-photo-5063828.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        userSrc={image}
        username="Abdul Qader"
      />
      <Story
        image="https://images.pexels.com/photos/6194973/pexels-photo-6194973.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        userSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Donald_Trump_official_portrait.jpg/220px-Donald_Trump_official_portrait.jpg"
        username="Donald Trump"
      />
      <Story
        image="https://images.pexels.com/photos/3782852/pexels-photo-3782852.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        userSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Enabling_eCommerce-_Small_Enterprises%2C_Global_Players_%2839008130265%29_%28cropped%29.jpg/220px-Enabling_eCommerce-_Small_Enterprises%2C_Global_Players_%2839008130265%29_%28cropped%29.jpg"
        username="Jack Ma"
      />
      <Story
        image="https://images.pexels.com/photos/2879814/pexels-photo-2879814.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        userSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Joe_Biden_official_portrait_2013_cropped.jpg/220px-Joe_Biden_official_portrait_2013_cropped.jpg"
        username="Joy Biden"
      />
      <Story
        image="https://images.pexels.com/photos/1382734/pexels-photo-1382734.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        userSrc="https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        username="Helina Jamwali"
      />
    </div>
  );
};

export default StoryReel;
