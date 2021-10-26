import React from 'react'

export default function JournalEntry() {
    return (
        <div className='journal__entry'>
            <div 
                className='journal__entry-picture'
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: 'url(https://www.ngenespanol.com/wp-content/uploads/2018/08/La-primera-imagen-de-la-historia.jpg)',
                }}
            >

            </div>

            <div className='journal__entry-body'>
                <p className='journal_entry-title'>
                    Un nuevo día
                </p>
                <p className='journal_entry-content'>
                    lorem
                </p>
            </div>

            <div className='journal__entry-date-box'>
                    <span>Monday</span>
                    <h4>28</h4>
            </div>
        </div>
    )
}
