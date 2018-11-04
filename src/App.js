import React, { Component } from 'react';
import './App.scss';
import classnames from "classnames";
import * as _ from "lodash";

const ACTORS = [
  { name: "Andreas", id: 1 },
  { name: "Kristine", id: 2 },
  { name: "Anastasia", id: 3 },
  { name: "Fahd", id: 4 },
  { name: "Anette", id: 5 },
  { name: "Armon", id: 6 },
  { name: "Erling", id: 7 },
  { name: "Marie", id: 8 },
  { name: "Helene", id: 9 },
  { name: "Eskil", id: 10 },
  { name: "Amanda", id: 11 },
  { name: "Sara", id: 12 }
];

const SKETCHES = [
  {
    name: "Jåttånes",
    actors: [5, 10]
  },
  {
    name: "Designerbaby støvsuger",
    actors: [4, 7, 9]
  },
  {
    name: "Design din baby",
    actors: [1, 2, 7]
  },
  {
    name: "PTXD (denne er ikke bra nok)",
    actors: [1, 3, 6, 8, 11]
  },
  {
    name: "Soup Opera",
    actors: [1, 6, 8, 10]
  },
  {
    name: "Tolk",
    actors: [6, 11]
  },
  {
    name: "Ånd i lampe",
    actors: [2, 4, 5]
  },
  {
    name: "Konspirasjonsteorier v2",
    actors: [7, 8, 10, 11]
  },
  {
    name: "Ekstremistisk løsningsorientert optimisme",
    actors: [9]
  },
  {
    name: "Bodegasafari",
    actors: [1, 3, 8]
  },
  {
    name: "Bit for Bit",
    actors: [3, 4, 6]
  },
  {
    name: "Et veldig abba semester v3 (svein)",
    actors: [4, 5, 12]
  },
  {
    name: "Bursdagssang",
    actors: [1, 3, 6, 8]
  },
  {
    name: "Studentråd",
    actors: [5]
  },
  {
    name: "Lil Hege",
    actors: [2]
  },
];

class App extends Component {
  state = {
    present: ACTORS.map(a => a.id)
  };

  toggleActor = actor => {
    const present = _.clone(this.state.present);
    if (_.indexOf(present, actor.id) !== -1) {
      _.pull(present, actor.id);
    } else {
      present.push(actor.id)
    }
    this.setState({ present });
  };

  render() {
    return (
      <div className="App">
        <h2>Skuespillere</h2>
        <div className="actors">
          {ACTORS.map((a, i) => (
            <button
              className={classnames("actor", _.indexOf(this.state.present, a.id) !== -1 && "green")}
              key={i}
              onClick={() => this.toggleActor(a)}>
              {a.name} ({SKETCHES.filter(s => _.indexOf(s.actors, a.id) !== -1).length})
            </button>
          ))}
        </div>

        <h2>Sketcher</h2>
        <div className="sketches">
          {SKETCHES.map((s, i) => {
            const totalActors = s.actors.length;
            const presentActors = this.state.present.filter(a => _.indexOf(s.actors, a) !== -1);
            return(
            <div
              className={classnames("sketch", presentActors.length === 0 ? "red" : (totalActors === presentActors.length) && "green")}
              key={i}>
              {s.name} ({presentActors.length}/{totalActors})
            </div>
          )})}
        </div>
      </div>
    );
  }
}

export default App;
