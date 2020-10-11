import React from 'react';
import SlotM from './SlotMac';





const App = () => {
    return(
        <>
        <h1 className="heading_style">
            Welcome to { " " }
            <span style = {{ fontWeight: "bold" }}>Slot machine game</span> 
            </h1>
                <div className="slotmachine">
                <SlotM x=":smile" y=":smile" z=":smile" />
                <hr />
                <SlotM x=":smile" y=":smile" z=":smile" />
                <hr />
                <SlotM x=":smile" y=":smile" z=":smile" />
                <hr />
                </div>
        </>
    );
};
export default App;
