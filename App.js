let heading = React.createElement('h1',{id:"heading"},"Hello World! from the react");

let complexDiv = React.createElement('div',{id:"parent"}, 
[React.createElement('div',{id:"child1"}, 
[React.createElement('h1',{},"Im an h1 tag"), React.createElement('h2',{}, "I'm an h2 tag")], 
React.createElement('div',{id:"child2"}, [React.createElement('h1',{},"Im an h1 tag"), React.createElement('h2',{}, "I'm an h2 tag")]
))]
)
   
console.log(heading);
console.log(complexDiv)

let root = ReactDOM.createRoot(document.getElementById('root'));

root.render(complexDiv);

