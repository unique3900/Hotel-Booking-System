import React from 'react'

const App = () => {
  return (
    <div>
     <div className="text-6xl text-red-600">
                <button className="px-6 py-2 rounded bg-green-800 hover:bg-green-600 text-white" type="button" onClick={() => setCount((count) => count + 1)}>
                    count+
                </button>
            </div>
    </div>
  )
}

export default App
