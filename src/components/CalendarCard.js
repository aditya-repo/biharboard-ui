import React from 'react';

const CalendarCard = (props) => {
  const { title, description } = props.data
  return (
    <div className="p-4 font-bold bg-white shadow rounded-md border bg-gray-100 ">
      <div className='header text-xl text-center '>{title} Notice</div>
      <hr class="h-px mt-3 mb-2 bg-gray-200 border-0 dark:bg-gray-200"></hr>
      <div className="p-4 bg-white shadow rounded-md border">
        <ul>
          {description.map((data, index) => (
            <li key={index} className='border-b-2 p-2 border-solid  font-normal text-sm'>
              <span className='mr-2'>{data.date}</span> | <span className='ml-2'>{data.event}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CalendarCard;
