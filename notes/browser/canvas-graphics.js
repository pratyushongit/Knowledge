// Canvas

const ctx = document.querySelector("#myCanvas").getContext("2d");

ctx.moveTo(0, 0);
ctx.lineTo(100, 100);
ctx.stroke();

// SVG

<svg width="100" height="100">
  <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
</svg>

<svg width="400" height="120">
  <rect x="10" y="10" width="200" height="100" stroke="red" stroke-width="6" fill="blue" />
</svg>

//Polygon->
//The <polygon> element is used to create a graphic that contains at least three sides.

//Triangle
<svg height="220" width="500" xmlns="http://www.w3.org/2000/svg">
  <polygon points="100,10 150,190 50,190" style="fill:lime;stroke:purple;stroke-width:3" />
</svg>

//More than 3 sides

<svg height="260" width="500" xmlns="http://www.w3.org/2000/svg">
  <polygon points="220,10 300,210 170,250 123,234" style="fill:lime;stroke:purple;stroke-width:3" />
</svg>


SVG	
Resolution independent
Support for event handlers
Good text rendering capabilities
Not suited for game applications

Canvas
Resolution dependent
No support for event handlers
Poor text rendering capabilities
Well suited for graphic-intensive games