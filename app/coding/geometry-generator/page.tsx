"use client";
import { useEffect } from 'react';
import CodingLayout from '../CodingLayout';
import { PyScriptProvider, PyScript, PyConfig } from "pyscript-react";

function getPolygonSize(): number[] {
  let [xMin, yMin, xMax, yMax] = [Infinity, Infinity, -Infinity, -Infinity];
  const polygons = document.querySelectorAll<SVGGraphicsElement>("svg polygon");
  polygons.forEach(polygon => {
    const boundingBox = polygon.getBBox();
    const [xCurrentMin, yCurrentMin] = [Math.round(boundingBox.x), Math.round(boundingBox.y)];
    const xCurrentMax = Math.round(boundingBox.x + boundingBox.width);
    const yCurrentMax = Math.round(boundingBox.y + boundingBox.height);
    if (xCurrentMin < xMin) { xMin = yCurrentMin; }
    if (yCurrentMin < yMin) { yMin = yCurrentMin; }
    if (xCurrentMax > xMax) { xMax = xCurrentMax; }
    if (yCurrentMax > yMax) { yMax = yCurrentMax; }
  });
  return [xMin, yMin, xMax, yMax];
};

function setSVGBoxSize (coords: number[]) {
  const [xMin, yMin, xMax, yMax] = coords;
  const newWidth = xMax - xMin;
  const newHeight = yMax - yMin;

  const svgElement = document.querySelector("#svg-output svg") as HTMLElement | null;
  const svgOutputElement = document.querySelector("#svg-output svg") as HTMLElement | null;

  if (svgElement && svgOutputElement) {
    svgElement.style.width = `${newWidth}px`;
    svgElement.style.height = `${newHeight}px`;
    svgOutputElement.style.width = `${newWidth}px`;
    svgOutputElement.style.height = `${newHeight}px`;
  }
  else {
    console.log("SVG or SVG output element not found!");
    return;
  }
}

function shiftPolygons(coords: number[]) {
  console.log(`In shiftPolygons at start`);
  const [xMin, yMin] = coords;
  if (xMin !== 0 || yMin !== 0) {
    console.log(`In shiftPolygons and inside if`);
    const polygons = Array.from(document.querySelectorAll<SVGElement>("svg polygon"));
    const polygonGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
    const svgElement = document.querySelector<SVGElement>("svg");
    
    if (!svgElement) {
      console.log("No SVG element found!");
      return;
    }

    svgElement.appendChild(polygonGroup);

    for (let polygon of polygons) {
      polygonGroup.appendChild(polygon);
    }

    polygonGroup.setAttribute("transform", `translate(${-xMin} ${-yMin})`);
  }
}

function resizeSVG(){
  const coords = getPolygonSize();
  setSVGBoxSize(coords);
  shiftPolygons(coords);
}

const GeometryGenerator = () => {

  return (

    <div>
      <script type="module" src="https://pyscript.net/releases/2024.1.1/core.js"></script>
      <py-config src="/pyscript_config.toml"></py-config>
      <py-script src="/geometry_interface.py"></py-script>

{/* 
      <PyScriptProvider >
        <PyConfig
          source="/pyscript_config.toml"
        />
        <PyScript
          source="/geometry_interface.py"
        />
      </PyScriptProvider> */}

      <CodingLayout>
        <h1>Geometry Generator</h1>
        <p>
          I created Geometry Generator because I have always been enamored with the beauty of geometric patterns like in art such as M.C. Escher, like those found on mosques, and like those found in nature like on diatoms. In junior high, geometry class was what initially got me to fall in love with mathematics and science because the visual aspect of it allowed me to connect to the material more deeply. Geometry can act as a sort of bridge
        </p>

      <div id="interface"></div>
        <h1>Try Out Geometry Generator</h1>
        <div className="svg-container">
            <div id="svg-output">SVG Output delete this text!!</div>
            <div id="button-container">
                <button id="clear-drawing" py-click="clear_drawing()" className="btn">Clear Drawing</button>
                <button id="render-drawing" py-click="render_drawing_html()" className="btn btn-primary">Render Drawing</button>
                <button onClick={resizeSVG}>Auto Resize</button>
            </div>
            <div id="repl-output"></div>
            <h3>Make a fractal</h3>
                <py-repl id="py-repl" src="/geometry_interface.py" output-mode="reset" output="repl-output">
                    clear_drawing()

                    # Add a polygon
                    sides = 5  # Try changing the number of sides
                    pentagon = Polygon(num_points=sides, radius=150, drawing=drawing_global)

                    # Call the draw_fractal method of the polygon to add a fractal of it the drawing
                    pentagon.draw_fractal(shrinkage=.4, depth=4, rotate=0) # try changing rotate angle, (hint try 360/(2*sides))

                    render_drawing_html()
                    resizeSVG()
                </py-repl>
        </div>
      </CodingLayout>
    </div>
)
}

export default GeometryGenerator