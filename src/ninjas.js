import React from 'react';

const Ninjas = (props) => {
    const { ninjas, deleteNinja } = props;
    const ninjasList = ninjas.map(({ name, age, belt, id }) => {
        if ( age > 20 ) {
            return (
                <div className="ninja" key={id}>
                    <div>Name: {name}</div>
                    <div>Age: {age}</div>
                    <div>Belt: {belt}</div>
                    <button onClick={() => { deleteNinja(id) }}>Delete Ninja</button>
                </div>
            )    
        } else {
            return null;
        }        
    });
    return (
        <div className="ninja-list">
            { ninjasList }
        </div>
    )
}

export default Ninjas;