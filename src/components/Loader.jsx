import React from 'react';
import '../index.css';

function Loader() {
    return <div>
            <div className="spinner-box">
                <div className="circle-border">
                    <div className="circle-core"></div>
                </div>  
            </div>
        </div>;
}

export default Loader;
