import React from "react";

function Navbar({ course }) {
    return (
        <div className="card">
            <h2>{course}</h2>
            <p>Course card.</p>
            <button>View More</button>
        </div>
    );
}

export default Navbar;