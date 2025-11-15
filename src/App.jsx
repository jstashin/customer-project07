import React, { Suspense } from 'react';
import Header from './assets/Header';
import Footer from './assets/Footer';
import Tickets from './assets/Tickets';
import { ToastContainer } from 'react-toastify';


const loadTickets = () => fetch("/data.json")
.then((res) => res.json());

function App() {
  const ticketPromise = loadTickets();

  return (
    <div>
      <Header></Header>
  <Suspense fallback={"Loading..."}>
        <Tickets promise={ticketPromise} />
      </Suspense>
      <Footer/>
      <ToastContainer position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}

export default App;

