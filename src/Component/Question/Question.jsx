import React from 'react';

import './Question.css'
const Question = () => {
      
     return (
            <div className='question'>
                <h3 className='title'>some Question</h3>
                <div className="qu">
                    <h2>* What is the difference between props and state?</h2>
                    <p>=) Props are short for "properties" and are passed down from a parent component to a child component. Props are read-only and cannot be modified by the child component. and
                    state is used to manage data within a component itself.
                    </p>
                </div>
                <div className="qu">
                    <h2>** How does useState work?</h2>
                    <p>>>>useState hook allows functional components to manage state by providing a way to declare and update state variables.</p>
                </div>
                <div className="qu">
                    <h2>*** What is the purpose of usingEffect other than fetching data?</h2>
                    <p>>>is a powerful hook that allows you to perform side effects in your functional components. While fetching data is one common use case, there are many other ways to use useEffect to manage state, handle events, and interact with external resources..</p>
                </div>
                <div className="qu">
                    <h2>*** How does React work?</h2>
                    <p>>>>React is a JavaScript library that allows developers to build user interfaces for web applications. It works by creating a virtual representation of the user interface, which is then rendered to the DOM in the browser. Component Creation: Developers create React components using JavaScript functions or classes that define the component's behavior and appearance. Rendering: Once the components are created, React renders them into the virtual DOM, which is a lightweight representation of the actual DOM. Reconciliation: React then compares the virtual DOM with the previous version to identify changes that have occurred.</p>
                </div>
            </div>
     );
};

export default Question;