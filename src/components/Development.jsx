import React from "react"
import styled from "styled-components"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Stage } from "@react-three/drei"
import Atom from "./Atom"

const Desc = styled.div`
    position: absolute;
    top: 350px;
    right: 240px;
    width: 200px;
    height: 70px;
    padding: 20px;
    background-color: white;
    border-radius: 10px;

    @media only screen and (max-width:768px) {
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
    }
`

const Development = () => {
    return(
        <>
            <Canvas>
                <Stage environment="city" intensity={0.6}>
                    <Atom/>
                </Stage>
            <OrbitControls enableZoom={false} autoRotate/>
            </Canvas>
            <Desc>We design products with a strong focus on both world class design and ensuring your product is a market success.</Desc>
        </>
    )
}

export default Development