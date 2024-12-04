// // import React from 'react'

// // const SubscriptionScheduler = () => {
// //   return (
// //     <div>SubscriptionScheduler</div>
// //   )
// // }

// // export default SubscriptionScheduler


// "use client"
// import React, { useState } from 'react';
// import { DayPilotCalendar, DayPilotNavigator } from "@daypilot/daypilot-lite-react";
// // import DayPicker from 'react-day-picker';
// // import 'react-day-picker/lib/style.css';
// // import '@daypilot/daypilot-lite-react/style.css';

// const SubscriptionScheduler = () => {
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const [events, setEvents] = useState([
//     { start: '2023-01-01T10:00:00', end: '2023-01-01T12:00:00', text: 'Event 1' },
//     { start: '2023-01-02T14:00:00', end: '2023-01-02T16:00:00', text: 'Event 2' },
//   ]);

//   const handleEventClick = (args:any) => {
//     alert(`Event Clicked: ${args.e.text()}`);
//   };

//   const handleTimeRangeSelected = (args:any) => {
//     const newEvent = {
//       start: args.start.toString(),
//       end: args.end.toString(),
//       text: 'New Event',
//     };

//     setEvents([...events, newEvent]);
//   };

//   const handleDateChange = (date:any) => {
//     setSelectedDate(date);
//   };

//   return (
//     <div className='mt-[162px]'>
//       <h2>Calendar Scheduler</h2>
//       <div className='border border-[red]' style={{ display: 'flex', justifyContent: 'space-between' }}>
//         <div style={{ flex: 1 }}>
//           <DayPilotNavigator
//             selectMode="day"
//             showMonths={1}
//             skipMonths={1}
//             onTimeRangeSelected={(args:any) => handleDateChange(args.start)}
//           />
//         </div>
//         {/* <div style={{ flex: 1 }}>
//           <DayPicker selected={selectedDate} onDayClick={handleDateChange} />
//         </div> */}
//         <div style={{ flex: 2 }}>
//           <DayPilotCalendar
//             events={events}
//             onEventClick={handleEventClick}
//             onTimeRangeSelected={handleTimeRangeSelected}
//             config={{
//               timeRangeSelectedHandling: 'Disabled',
//             }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SubscriptionScheduler;
import React from 'react'

const SubscriptionScheduler = () => {
  return (
    <div>SubscriptionScheduler</div>
  )
}

export default SubscriptionScheduler
