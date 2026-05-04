import { createContext, useContext, useState } from 'react';

const TimelineContext = createContext();

export const TimelineProvider = ({ children }) => {
  const [timeline, setTimeline] = useState([]);

  const addEvent = (friendName, type) => {
    setTimeline((prev) => [
      {
        id: Date.now(),
        friendName,
        type,
        date: new Date().toLocaleString(),
      },
      ...prev,
    ]);
  };

  return (
    <TimelineContext.Provider value={{ timeline, addEvent }}>
      {children}
    </TimelineContext.Provider>
  );
};

export const useTimeline = () => useContext(TimelineContext);