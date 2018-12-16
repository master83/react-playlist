import React, { Component } from 'react';

class Ninjas extends Component {
    render() {
        console.log(this.props);
        const { ninjas } = this.props;
        const ninjasList = ninjas.map(({ name, age, belt, id }) => {
            return (
                <div className="ninja" key={id}>
                    <div>Name: {name}</div>
                    <div>Age: {age}</div>
                    <div>Belt: {belt}</div>
                </div>
            )
        });
        return (
            <div className="ninja-list">
                { ninjasList }
            </div>
        )
    }
}

export default Ninjas;