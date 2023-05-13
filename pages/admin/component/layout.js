import Header from "./header"
import Link from "next/link"
import Image from 'next/image'

export default function MyLayout(props)   
{
    return(
        <>
        <Header title={props.title} />
        
        <main>

        </main>
        <div style={{ position: "absolute", bottom: 0, width:"100%" }}>
            personalized fitness and meal planner</div>
        </>
    )
}