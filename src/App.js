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
    name: "Soup Opera",
    actors: [1, 6, 8, 10]
  },
  {
    name: "Tolk",
    actors: [3, 6, 11]
  },
  {
    name: "Ånd i lampe",
    actors: [2, 4, 5]
  },
  {
    name: "Ekstremistisk",
    actors: [9]
  },
  {
    name: "Kjærestegranti",
    actors: [3, 6]
  },
  {
    name: "Hemmelig kult",
    actors: [2, 3, 5, 9]
  },
  {
    name: "Kresen matanmelder",
    actors: [4, 2, 7]
  },
  {
    name: "Før i tia",
    actors: [3, 4, 11]
  },
  {
    name: "Perkusjonist",
    actors: [1, 9]
  },
  {
    name: "Forballtrener",
    actors: [10]
  },
  {
    name: "Daskepott",
    actors: [4, 6, 7, 8, 10, 12]
  },
  {
    name: "Solskjær",
    actors: [10, 12]
  },
  {
    name: "Markeringer",
    actors: [8]
  },
  {
    name: "Help desk",
    actors: [2, 3, 6, 11]
  },
  {
    name: "Kretsløp",
    actors: [1, 4]
  },
  {
    name: "Gruppechat",
    actors: []
  },
  {
    name: "Undertroisk",
    actors: [6, 9, 11]
  },
  {
    name: "Sippemonolog",
    actors: []
  },
  {
    name: "Talk slow",
    actors: [8]
  },
  {
    name: "Omegahistorien",
    actors: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  },
  {
    name: "Silicon Labs",
    actors: [1, 8, 9]
  },
  {
    name: "ABBA",
    actors: [1, 3, 4, 5, 6, 7, 11, 12]
  },
  {
    name: "Studentråd",
    actors: [11]
  },
  {
    name: "Skapdragvolling",
    actors: [8]
  },
  {
    name: "OpAmp",
    actors: [7]
  },
  {
    name: "Lyktestolper",
    actors: [9, 10]
  },
  {
    name: "Bodegasafari",
    actors: [1]
  },
  {
    name: "Sugar Daddy",
    actors: [5]
  },
  {
    name: "Lag deg et barn",
    actors: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  },
  {
    name: "Åpning",
    actors: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  },
  {
    name: "Lille Finale",
    actors: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  },
  {
    name: "Avslutning",
    actors: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  },
  {
    name: "Potensiale",
    actors: []
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
        <img src={require("./img_sara.png")} className="image"/>
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
