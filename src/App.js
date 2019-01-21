import React, { Component } from 'react';
import './App.css';
import Tone from 'tone';
import { cssColorKeywords, cssColorHexes } from './Colors.js';
import { notesInOrder } from './Sounds.js';

const styles = cssColorKeywords.map((color, index) => {
  const left = .675 * index;
  return {
    backgroundColor: `${color}`,
    left: `${left}%`,
    zIndex: index,
  }
});

class App extends Component {

  state = {
    count: 0,
    oscillators: [],
  };

  componentDidMount = () => {
    // new Tone.Oscillator(220, "sine").toMaster().start();
    // new Tone.Oscillator(3520, "sine").toMaster().start();

    setInterval(
      () => {
        const { count } = this.state;
        const nextCount = count === cssColorKeywords.length ? 0 : this.state.count + 1;
        this.setState({count: nextCount});
        var hex = cssColorHexes[count];
        var decimal = parseInt(hex, 16);
        var numOctaves = 3;
        var numNotes = notesInOrder.length + 1;
        var numPitches = numNotes * numOctaves + 1;
        var pitchIndex = Math.ceil((decimal / 16777215) * (numPitches - 1));
        var octave = Math.floor(pitchIndex / numNotes);
        var note = pitchIndex % numNotes;
        var pitch = notesInOrder[note] * Math.pow(2, octave - 1);
        console.log({
          hex: hex,
          decimal: decimal,
          pitchIndex: pitchIndex,
          octave: octave,
          note: note,
          pitch: pitch,
        });
        var maxOscillators = 2;
        var curOscs = this.state.oscillators;
        if (curOscs.length >= maxOscillators) {
          var removedOsc = curOscs.pop();
          removedOsc.toMaster().stop();
        }
        var newOsc = new Tone.Oscillator(pitch, "sine");
        curOscs.unshift(newOsc);
        // newOsc.toMaster().start();
        this.setState({
          oscillators: curOscs
        });
      },
      1000
    );
  };

  render() {
    const { count } = this.state;

    const currentColors = cssColorKeywords.slice(0, count);

    return (
      <div className="App">
        {currentColors.map((color, index) =>
          <div className="color" style={styles[index]} key={color}></div>
        )}
      </div>
    );
  }
}

export default App;
