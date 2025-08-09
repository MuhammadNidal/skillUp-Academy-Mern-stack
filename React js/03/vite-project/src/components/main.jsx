import React, { useState } from 'react'

const main = () => {
  const [colorName,setcolorName]= useState("green")
  return (
    <div>
<p>this is the {colorName}</p>
<button onClick={()=>setcolorName("pink")}>Pink</button>

<button onClick={()=>setcolorName("white")}>white</button>

<button onClick={()=>setcolorName("orange")}>orange</button>

<button onClick={()=>setcolorName("yellow")}>yellow</button>
     </div>
  )
}

export default main
