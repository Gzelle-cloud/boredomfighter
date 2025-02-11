import { useEffect, useState } from "react";

function WhenImBored() {
  const [stillBored, setStillBored] = useState("Get started!");
  const [activity, setActivity] = useState("Activity is coming...");
  const [newActivity, setNewActivity] = useState(false);

  useEffect(() => {
    const getActivity = async () => {
      const response = await fetch("https://bored.api.lewagon.com/api/activity");
      const data = await response.json();
      setActivity(data);
    };

    if (newActivity) {
      getActivity();
      setNewActivity(false);
    }
  }, [newActivity]);

  const buttonClicked = () => {
    setStillBored("Still bored");
    setNewActivity(true);
  }

  return(
    <div>
      <div className="container">
        <button onClick={buttonClicked} className="btn">{ stillBored }</button>  
      </div>
      
      {activity.activity && 
      <div className="frame">
        <h3>{activity.activity}</h3>
        <p className="tag">#{activity.type}</p>
      </div>
      }      
      
    </div>
  );
}

export default WhenImBored;