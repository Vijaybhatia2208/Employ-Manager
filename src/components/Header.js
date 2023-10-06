import React from 'react'

function Header({ setIsAdding }) {
    return (
        <header>
            <div className='header-employ'>Employee Manager</div>
            <div style={{ marginTop: '30px', marginBottom: '18px' }}>
                <button onClick={() => setIsAdding(true)} className='round-button'>Create employ</button>
            </div>
        </header>
    )
}

export default Header

