import React, { use } from 'react';
import Ticket from './Ticket';
import  { useState } from 'react';
import Banner from './Banner';

const Tickets = ({ promise }) => {
  
  const tickets = use(promise);
  console.log(tickets);
  const [cards,setCards]=useState([]);
  const handleTask=(ticket)=>{
  console.log(ticket);
  const newCards=[...cards,ticket];
  setCards(newCards);

  };
  console.log(cards)

return (
  <>
  <Banner inProgress={cards.length}></Banner>
    <div className=" w-11/12 mx-auto py-3 grid grid-cols-12 ">
      <div className="lg:col-span-9">
        <h1 className="font-bold text-2xl mb-3">Customer Tickets</h1>
        <div className='grid grid-cols-2 gap-6'>
      {
        tickets.map(ticket =><Ticket handleTask={handleTask} key={ticket.id} ticket={ticket}></Ticket>)
      }
      </div>
        </div>
      <div className="lg:col-span-3 space-y-5">
        <h1 className="font-bold text-xl mb-3">Task Status</h1>
       <div className='shadow p-10 space-y-5'></div>
       <h1 className="font-bold text-xl mb-3">Resolved Task</h1>
       <div className='shadow p-10'></div>
       </div>
      </div>
    
    
  </> 
  );
};

export default Tickets;