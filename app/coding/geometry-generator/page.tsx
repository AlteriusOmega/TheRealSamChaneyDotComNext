import React from 'react';
import CodingLayout from '../CodingLayout';
import PyScript, { PyScriptProvider } from 'pyscript-react';

const GeometryGenerator = () => {
  return (
    <div>
      <CodingLayout>
        <h1>Geometry Generator</h1>
        <p>
          I created Geometry Generator because I have always been enamored with the beauty of geometric patterns like in art such as M.C. Escher, like those found on mosques, and like those found in nature like on diatoms. In junior high, geometry class was what initially got me to fall in love with mathematics and science because the visual aspect of it allowed me to connect to the material more deeply. Geometry can act as a sort of bridge
        </p>
        {/* <PyScriptProvider>
          <PyScript>display("Hello world!")</PyScript>
        </PyScriptProvider> */}
      </CodingLayout>
    </div>
)
}

export default GeometryGenerator