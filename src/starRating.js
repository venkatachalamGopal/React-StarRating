import { useState } from "react";

function StarRating() {
  const [rating, setRating] = useState(0);

  return (
   <div>
     <div>
      {[...Array(5)].map((elem, index) => {
        let nos = index + 1;
        return (
          <button id="btn"
            // className={index >= rating ? "on" : "off"}
            className={rating >index ? "on" : "off"}
            onClick={() => {
              // alert(index);
              // alert(nos);
              setRating(nos);
            }}
          >
            <span>&#9734;</span>
          </button>
        );
        
      })} 
      
    </div>
    <div className="starValue">({rating}) / 5</div>
    {/* {color:(rating>3)'green?''yellow':} */}
   </div>
  );
}

export default StarRating;