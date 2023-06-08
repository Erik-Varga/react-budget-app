import React from 'react';
import { AiFillGithub } from "react-icons/ai";
import { BsCodeSlash } from "react-icons/bs";

export default function Footer() {
  return (
    <div class="container mt-4">
      <div>
        <ul className='footer d-flex flex-column justify-content-center align-items-center text-decoration-none list-inline'>
        <li>
            <a href="https:github.com/Erik-Varga" target="_blank" rel="noreferrer">
                 &copy; {(new Date().getFullYear())} Erik Varga | Web Developer
                 &nbsp;<AiFillGithub className='ml-1' />
             </a>
         </li>
         <li>
             <a href="https:github.com/Erik-Varga/react-budget-app" target="_blank" rel="noreferrer">
        
             Source Code &nbsp;<BsCodeSlash />
             </a>
         </li>
     </ul>
      </div>
    </div>
  )
}
