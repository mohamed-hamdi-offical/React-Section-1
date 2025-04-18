import React from "react";
export default function App() {
    const Dataset = [
        {
            id: 1,
            img: "https://i.pinimg.com/736x/f3/2a/94/f32a943936d178deaebca65a7728c3ab.jpg",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias impedit ",
        },
        {
            id: 2,
            img: "https://i.pinimg.com/736x/5f/88/b8/5f88b853ea82e95367950c0d2d371dd7.jpg",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias impedit ",
        },
        {
            id: 3,
            img: "https://i.pinimg.com/736x/7b/3f/b8/7b3fb8d964db63b4fdacc56357ef1f79.jpg",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
    ];

    return (
        <div className="container">
            <div className="header-section">
                <h1>Position and Transform</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam at ab odit debitis. Ducimus </p>
            </div>
            <div className="flex-box">
                {Dataset.map((data) => (
                    <div className="box" key={data.id}>
                        <img className="img-active" src={data.img} alt="image" />
                        <div className="gradient-overlay"></div>
                        <div className="cotant-active">
                            <p>{data.text}</p>
                            <button className="button-active">view item </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
