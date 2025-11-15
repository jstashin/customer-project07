import React, { use, useState } from 'react';
import Ticket from './Ticket';
import Banner from './Banner';
import { toast } from 'react-toastify';

const Tickets = ({ promise }) => {
  const tickets = use(promise);

  const [cards, setCards] = useState([]);
  const [resolved, setResolved] = useState([]);

  const handleTask = (ticket) => {
    const isExist = cards.find((item) => item.id === ticket.id);

    if (isExist) {
      toast.error("Ticket already on Progress");
      return;
    }

    setCards([...cards, ticket]);
  };

  const handleComplete = (ticket) => {
    toast.success("The task is complete");

    const remaining = cards.filter((item) => item.id !== ticket.id);
    setCards(remaining);

    setResolved([...resolved, ticket]);
  };

  return (
    <>
      <Banner inProgress={cards.length} resolved={resolved.length} />

      <div className="w-11/12 mx-auto py-5 grid grid-cols-1 lg:grid-cols-12 gap-6">

        <div className="lg:col-span-9">
          <h1 className="font-bold text-xl md:text-2xl mb-4">Customer Tickets</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {tickets.map(ticket => (
              <Ticket
                key={ticket.id}
                ticket={ticket}
                handleTask={handleTask}
              />
            ))}
          </div>
        </div>

       
        <div className="lg:col-span-3 space-y-6">

         
          <div>
            <h1 className="font-bold text-lg md:text-xl mb-3">Task Status</h1>

            {cards.length === 0 ? (
              <p className="text-gray-500 text-sm md:text-base  p-4 ">
                Select a ticket to add to Task Status
              </p>
            ) : (
              <div className="p-3 md:p-5 space-y-4 ">
                {cards.map(ticket => (
                  <div key={ticket.id} className="p-4 shadow rounded space-y-3">
                    <h2 className="font-semibold text-base md:text-lg">{ticket.title}</h2>

                    <button
                      className="btn bg-[#03C755] text-white border-[#00b544] w-full"
                      onClick={() => handleComplete(ticket)}
                    >
                      Complete
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          
          <div>
            <h1 className="font-bold text-lg md:text-xl mb-3">Resolved Task</h1>

            {resolved.length === 0 ? (
              <p className="text-gray-500 text-sm md:text-base  p-4 rounded">
                No resolved tasks yet
              </p>
            ) : (
              <div className="p-3 md:p-5 space-y-4 ">
                {resolved.map(ticket => (
                  <div key={ticket.id} className="p-4 shadow ">
                    <h2 className="font-medium text-base md:text-lg">{ticket.title}</h2>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>
      </div>
    </>
  );
};

export default Tickets;
