import React from 'react'

function MobileControl({handleMove}) {

    const stickLayout = [
        {
            pos: 'col-start-2 col-span-1',
            text: 'Up',
            move: () => {handleMove(0, -1)}
        },
        {
            pos: 'row-start-2 col-start-1 col-span-1',
            text: 'Left',
            move: () => {handleMove(-1, 0)}
        },
        {
            pos: 'row-start-2 col-start-3 col-span-1',
            text: 'Right',
            move: () => {handleMove(1, 0)}
        },
        {
            pos: 'col-start-2 row-start-3 col-span-1',
            text: 'Down',
            move: () => {handleMove(0, 1)}
        }
    ]

  return (
    <div>
        <div className='grid grid-cols-3'>

            {stickLayout.map((item, index) => {
                return (
                    <button key={index} className={`z-20 flex flex-col items-center justify-center
                        ${item.pos} opacity-70 bg-slate-500 w-full rounded-full p-1 sm:p-2 md:p-3`}
                        onClick={() => item.move()}>
                        {item.text}
                    </button>
                )
        })}
        </div>
    </div>
  )
}

export default MobileControl