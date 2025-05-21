import React from 'react'

const Loading: React.FC = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="flex space-x-2">
        <div className="h-4 w-4 animate-bounce rounded-full bg-primary"></div>
        <div className="h-4 w-4 animate-bounce rounded-full bg-primary [animation-delay:-.3s]"></div>
        <div className="h-4 w-4 animate-bounce rounded-full bg-primary [animation-delay:-.5s]"></div>
      </div>
    </div>
  )
}

export default Loading
