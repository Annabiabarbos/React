import React from 'react';

const MainContent = ({children}) => {
    return (
        <div>     
            <main className = "main-content">
                {children}
            </main>
        </div>
    );
};

export default MainContent;