import Multiplecard from "../Components/Multiplecard.js"
import React from 'react';

export default function Card(){
    const Hotel="Hotel 2"
    const Hotel2="Hotel 3"
    const Rating=4.6
    const Rating2=4.2

    const Star="https://img.icons8.com/fluency/452/star.png"
    const Img="https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvdGVsc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"

    const Img2="https://images.unsplash.com/photo-1616064959886-a500e5c38e1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGhvdGVsc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60";

    return (
        <div id="worldclass">
                <h3>World Class Hotels</h3>
                <div id="littledash"></div>
        
        <Multiplecard Star ={Star} Rating={Rating}  Rating2={Rating2}/>
        </div>
    )
}