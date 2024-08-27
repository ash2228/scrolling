"use client"
import Office from "./office"
import { OrbitControls, ScrollControls } from "@react-three/drei"
import { AmbientLight } from "three"

export default function Experience(){
    return(<mesh>
        <ambientLight intensity={1} />
        <ScrollControls pages={3} distance={1}>
        <Office/>
        </ScrollControls>
    </mesh>)
}