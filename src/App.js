import React, { Component } from 'react';
import './App.css';

const cssColorKeywords = [
  "aliceblue",
  "antiquewhite",
  "aqua",
  "aquamarine",
  "azure",
  "beige",
  "bisque",
  "black",
  "blanchedalmond",
  "blue",
  "blueviolet",
  "brown",
  "burlywood",
  "cadetblue",
  "chartreuse",
  "chocolate",
  "coral",
  "cornflowerblue",
  "cornsilk",
  "crimson",
  "cyan",
  "darkblue",
  "darkcyan",    
  "darkgoldenrod",   
  "darkgray",    
  "darkgreen",   
  "darkgrey",    
  "darkkhaki",   
  "darkmagenta",   
  "darkolivegreen",    
  "darkorange",    
  "darkorchid",    
  "darkred",   
  "darksalmon",    
  "darkseagreen",    
  "darkslateblue",   
  "darkslategray",   
  "darkslategrey",   
  "darkturquoise",   
  "darkviolet",    
  "deeppink",    
  "deepskyblue",   
  "dimgray",   
  "dimgrey",   
  "dodgerblue",    
  "firebrick",   
  "floralwhite",   
  "forestgreen",   
  "fuchsia",
  "gainsboro",   
  "ghostwhite",    
  "gold",    
  "goldenrod",   
  "gray",    
  "green",
  "greenyellow",   
  "grey",    
  "honeydew",    
  "hotpink",   
  "indianred",   
  "indigo",    
  "ivory",   
  "khaki",   
  "lavender",    
  "lavenderblush",   
  "lawngreen",   
  "lemonchiffon",    
  "lightblue",   
  "lightcoral",    
  "lightcyan",   
  "lightgoldenrodyellow",    
  "lightgray",   
  "lightgreen",    
  "lightgrey",   
  "lightpink",   
  "lightsalmon",   
  "lightseagreen",   
  "lightskyblue",    
  "lightslategray",    
  "lightslategrey",    
  "lightsteelblue",    
  "lightyellow",   
  "lime",
  "limegreen",   
  "linen",   
  "magenta",  
  "maroon",
  "mediumaquamarine",    
  "mediumblue",    
  "mediumorchid",    
  "mediumpurple",    
  "mediumseagreen",    
  "mediumslateblue",   
  "mediumspringgreen",   
  "mediumturquoise",   
  "mediumvioletred",   
  "midnightblue",    
  "mintcream",   
  "mistyrose",   
  "moccasin",    
  "navajowhite",   
  "navy",
  "oldlace",   
  "olive",
  "olivedrab",   
  "orange",
  "orangered",   
  "orchid",    
  "palegoldenrod",   
  "palegreen",   
  "paleturquoise",   
  "palevioletred",   
  "papayawhip",    
  "peachpuff",   
  "peru",    
  "pink",    
  "plum",    
  "powderblue",    
  "purple",
  "rebeccapurple",
  "red",
  "rosybrown",   
  "royalblue",   
  "saddlebrown",   
  "salmon",    
  "sandybrown",    
  "seagreen",    
  "seashell",    
  "sienna",    
  "silver",
  "skyblue",   
  "slateblue",   
  "slategray",   
  "slategrey",   
  "snow",    
  "springgreen",   
  "steelblue",   
  "tan",   
  "teal",
  "thistle",   
  "tomato",    
  "turquoise",   
  "violet",    
  "wheat",   
  "white",
  "whitesmoke",    
  "yellow",
  "yellowgreen",   
];

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
  };

  componentDidMount = () => {
    setInterval(
      () => {
        const { count } = this.state;
        const nextCount = count === cssColorKeywords.length ? 0 : this.state.count + 1;
        this.setState({count: nextCount});
      },
      500
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
