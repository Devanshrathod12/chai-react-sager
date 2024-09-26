import React,{useState} from 'react'

const SP3 = () => {
        const [isOn, setIsOn] = useState(false);
      
        const handleToggle = () => {
          setIsOn((prevIsOn) => !prevIsOn);
        };
      
        return (
          <div>
            <button onClick={handleToggle}>
              {isOn ? 'Turn Off' : 'Turn On'}
            </button>
            <p>State: {isOn ? 'On' : 'Off'}</p>
          </div>
        );
      };
export default SP3
