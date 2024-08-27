"use client"

import { Canvas } from "react-three-fiber"
import Experience from "./components/experience"

export default function Home(){
  return(<>
  <div className="w-full h-[100vh]">
  <Canvas camera={{fov:65,position:[2.3,1.5,2.3]}}>
    <Experience/>
  </Canvas>
  </div>
  </>
  )
}