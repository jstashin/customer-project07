import React, { Suspense } from 'react';
import Header from './assets/Header';
import Footer from './assets/Footer';
import Tickets from './assets/Tickets';


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
    </div>
  );
}

export default App;

