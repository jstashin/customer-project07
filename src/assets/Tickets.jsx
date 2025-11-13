import React, { use } from 'react';
import Ticket from './Ticket';

const Tickets = ({ promise }) => {
  
  const tickets = use(promise);
  console.log(tickets);

  return (
  <>
    <div className=" w-11/12 mx-auto py-3 grid grid-cols-12 ">
      <div className="lg:col-span-9">
        <h1 className="font-bold text-2xl mb-3">Customer Tickets</h1>
        <div className='grid grid-cols-2 gap-6'>
      {
        tickets.map(ticket =><Ticket key={ticket.id} ticket={ticket}></Ticket>)
      }
      </div>
        </div>
      <div className="lg:col-span-3">
        <h1 className="font-bold text-2xl mb-3">Task Status</h1>
       
       </div>
      </div>
    
    
  </> 
  );
};

export default Tickets;