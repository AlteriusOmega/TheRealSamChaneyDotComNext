"use client";
import React, { useEffect, useState } from 'react';
import CodingLayout from '../CodingLayout';
// import PyScriptProvider, { PyScriptProviderProperties, PyScriptProviderPropertiesBase } from 'pyscript-react/umd/components/py-script-provider'
// import PyScript from 'pyscript-react/umd/components/py-script/py-script'
// import PyConfig from 'pyscript-react/umd/components/py-config/py-config';
import { PyScriptProvider, PyScript, PyConfig } from "pyscript-react";


const GeometryGenerator = () => {

  // const [geogenScript, setGeogenScript] = useState("");
  // useEffect(() => {
  //   fetch('/geometry_generator.py')
  //     .then(response => response.text())
  //     .then(script => setGeogenScript(script))
  //     .catch(error => console.error('Error fetching script:', error));
  // }, []);

  // interface customPyScriptProviderProps extends PyScriptProviderPropertiesBase {
  //   pyConfigProps: {
  //     type: string;
  //     packages: Set<string>;
  //   };
  // }
  
  const pyConfigProps = {
    type: "json",
    "packages": new Set(["svgwrite"])
  }

  return (
    <div>
      <CodingLayout>
        <h1>Geometry Generator</h1>
        <p>
          I created Geometry Generator because I have always been enamored with the beauty of geometric patterns like in art such as M.C. Escher, like those found on mosques, and like those found in nature like on diatoms. In junior high, geometry class was what initially got me to fall in love with mathematics and science because the visual aspect of it allowed me to connect to the material more deeply. Geometry can act as a sort of bridge
        </p>

        {/* <script defer src="https://pyscript.net/releases/2023.03.1/pyscript.js"></script> */}
        <script type="module" src="https://pyscript.net/releases/2024.1.1/core.js"></script>
        {/* <link rel="stylesheet" href="https://pyscript.net/latest/pyscript.css" /> */}
        {/* <py-script src="../geometry_interface.py"></py-script> */}
        {/* <py-config src="../pyscript_config.toml"></py-config> */}
        <py-config src="/pyscript_config.toml"></py-config>
        <py-script src="/geometry_interface.py"></py-script>

        {/* <PyScriptProvider >
          <PyConfig
            source="/pyscript_config.toml"
          />
          <PyScript
            source="/geometry_interface.py"
          />
        </PyScriptProvider> */}
        <div id="button-cintainer">
          <div id="svg-output"></div>
          <button id="clear-drawing" py-click="clear_drawing()">Clear Drawing</button>
        </div>
        
      </CodingLayout>
    </div>
)
}

export default GeometryGenerator