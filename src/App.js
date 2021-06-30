import React from 'react';
import Cards from './Cards';

import Draggable from 'react-draggable';

const App = () => {
  return (

    <div className="bg-gray-400">
    <section>
     <form>
     <input 
      type="text"
      className="ml-20 mt-6 rounded-md p-2"
     placeholder="Type here to filter..."
     />
     </form>
    </section>
    <section className="p-20 grid sm:grid-cols-2 md:grid-cols-4 gap-6">
      <Cards />
    </section>
    
    </div>
  );
}
export default App;


