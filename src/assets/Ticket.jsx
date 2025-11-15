
import { Calendar } from "lucide-react";
const Ticket = ({ticket,handleTask}) => {
    const { id, title, description, customer, priority, status, createdAt } = ticket;
const priorityColors = {
    "High": "text-red-600 font-bold",
    "Medium": "text-yellow-600 font-semibold",
    "Low": "text-green-600 font-semibold",
  };
const statusStyles = {
    "Open": "bg-green-100 text-green-700",
    "In-Progress": "bg-yellow-100 text-yellow-700",
    "Closed": "bg-gray-200 text-gray-700",
  };

 
  return (
    < div onClick={()=>handleTask(ticket)}className="bg-base-100  rounded-lg p-4 shadow-sm w-[380px]">
 
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-semibold text-gray-800">{title}</h3>
        <span
          className={`px-3 py-1 text-sm rounded-full flex items-center gap-1 ${statusStyles[status]}`}
        >
          <span className="w-2 h-2 bg-current rounded-full"></span>
          {status}
        </span>
      </div>

  
      <p className="text-gray-600 text-sm mb-3">{description}</p>

      
      <div className="flex justify-between items-center text-xs text-gray-500">
        <div>
          <span className="mr-2">#{id}</span>
          <span className={priorityColors[priority]}>{priority.toUpperCase()} PRIORITY</span>
        </div>
        <div className="flex items-center gap-2">
          <span>{customer}</span>
          <span className="flex items-center gap-1">
            <Calendar size={14} /> {createdAt}
          </span>
        </div>
      </div>
 
        </div>
    );
};

export default Ticket;