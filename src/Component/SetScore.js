import React, { useState } from 'react'

function SetScore() {
        const [score , setScore] = useState('No')
    return (
        <div>
                <button onClick={() => setScore('yes')}>Click</button>
                <h1>Ronaldo has {score} Scores</h1>
        </div>
    )
}

export default SetScore
