"use client"
import { useGLTF} from '@react-three/drei'
import { useScroll } from '@react-three/drei'
import gsap from 'gsap'
import { useEffect, useLayoutEffect, useRef } from 'react'
import { useFrame } from 'react-three-fiber'

export default function Office(props) {
  const scroll = useScroll();
  const libraryRef = useRef();
  const atticRef = useRef();
  const FLOOR_HEIGHT = 2.3;
  const NB_FLOORS = 3;
  const ref = useRef();
  const tl = useRef();
  useFrame(()=>{
    tl.current.seek(scroll.offset * tl.current.duration());
  });
  useLayoutEffect(()=>{
    tl.current = gsap.timeline();
    tl.current.to(
      ref.current.position,{duration:2,
        y: -FLOOR_HEIGHT * (NB_FLOORS-1)
      },0
    )
    tl.current.from(
      libraryRef.current.position,{duration:1,x:-2},0.5
    )
    tl.current.from(
      libraryRef.current.rotation,{duration:1,y:Math.PI},0.5
    )
    tl.current.from(
      atticRef.current.position,{duration:2,z:-2},0.7
    );
    tl.current.from(
      atticRef.current.rotation,{duration:2,y:-Math.PI/2},0.7
    );
  },[])
  const { nodes, materials } = useGLTF('./models/office.glb')
  return (
    <group {...props} dispose={null} ref={ref}>
      <mesh geometry={nodes['01_office'].geometry} material={materials['01']} />
      <group ref={libraryRef}>
      <mesh geometry={nodes['02_library'].geometry} material={materials['02']} position={[0, 2.114, -2.23]} />
      </group>
      <group ref={atticRef}>
      <mesh geometry={nodes['03_attic'].geometry} material={materials['03']} position={[-1.97, 4.227, -2.199]} />
      </group>
    </group>
  )
}

useGLTF.preload('./models/office.glb')
