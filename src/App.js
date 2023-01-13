import './App.css';
import { auth, database } from './firebase'
import { useEffect, useState, useRef } from 'react'
import { onDisconnect, ref, set, onValue, onChildAdded } from 'firebase/database';
import { KeyPressListener } from './KeyPressListener';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';

function App() {

  const [gameReady, setReady] = useState(false)
  const [players, setPlayers] = useState({});
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  let playerRef = useRef("");
  let playerId = useRef("");


  useEffect(()=> {
    auth.onAuthStateChanged((user) => {

      playerId.current = user.uid;
      playerRef.current = ref(database, 'players/' + playerId.current)

      const name = ""
      set(playerRef.current, {
        uid: playerId.current,
        username: name,
        direction: "right",
        colour: randomColour(),
        x: (Math.floor(Math.random() * 20)),
        y: (Math.floor(Math.random() * 20)),
        text: ""
      })

      onDisconnect(playerRef.current).remove();
      initGame();
    })
  }, [])

  useEffect(()=> {
      const allPlayersRef = ref(database, 'players');
      onChildAdded(allPlayersRef, (snapshot) => {
          players[snapshot.key] = snapshot.val()
          setPlayers({...players})
      })
  }, [])

  useEffect(() => {
      const allPlayersRef = ref(database, 'players');
      onValue(allPlayersRef, (snapshot) => {
          console.log("Change")
          setPlayers({...snapshot.val()});
      })
  }, [])

  useEffect(() => {
    const KUp = new KeyPressListener("ArrowUp", () => handleMove(0, -1)) 
    const KDown = new KeyPressListener("ArrowDown", () => handleMove(0, 1)) 
    const KLeft = new KeyPressListener("ArrowLeft", () => handleMove(-1, 0))
    const KRight = new KeyPressListener("ArrowRight", () => handleMove(1, 0)) 

    return () => {
      KUp.unbind()
      KDown.unbind()
      KLeft.unbind()
      KRight.unbind()
    }
  },[players]);

  useEffect(() => {
    let timeout 
    if(players[playerId.current]?.message !== "") {
        timeout = setInterval(()=> {
          clearMessage()
      }, 3000)
    }

    return () => clearInterval(timeout)
  }, [players])

  function handleMove(x, y) {
    if (players === undefined)
      return;
    let newX = players[playerId.current].x + x;
    let newY = players[playerId.current].y + y;

    if (x < 0) {
      players[playerId.current].direction="left"
    } else if (x > 0) {
      players[playerId.current].direction="right"
    }

    players[playerId.current].x = newX;
    players[playerId.current].y = newY;
    
    set(playerRef.current, players[playerId.current])
  }

  function initGame() {
    setReady(true);
  };

  function changeName() {
    if (players === undefined)
      return;
    players[playerId.current].username = name;
    set(playerRef.current, players[playerId.current])
  }

  function sendMessage() {
    if (players === undefined)
      return;
    console.log("Sending message")

    players[playerId.current].text = message;
    set(playerRef.current, players[playerId.current])
    setMessage("")
  }

  function clearMessage() {
    if (players === undefined)
      return;
    console.log("Message timeout")

    players[playerId.current].text = "";
    set(playerRef.current, players[playerId.current])
  }

  function randomColour() {
    let colours = ["/red_dino.png", "/blue_dino.png", "/green_dino.png", "/yellow_dino.png"]
    let index = Math.floor(Math.random() * 4)

    return colours[index]
  }

    const renderPlayers = () => {
        let renders = []
        for (const [key, value] of Object.entries(players)) {
            renders.push([key, value])
        }
        return (
            renders.map((player, index) => {
                let info = player[1];
                return(
                    <div className={`z-[1] flex flex-col w-[30px] h-[30px] absolute
                      transition-all duration-200 ease-in-out `}
                        style={{transform: `translate(${info.x*12}px, ${info.y*12}px) `}}
                         key={index}>

                        {info.text == "" &&
                        <p className='absolute z-[3] bottom-[100%] text-xs text-white leading-[12px]'>
                          {info.username}
                        </p>}

                        {info.text != "" &&
                        <p className='absolute z-[3] bottom-[100%] text-xs text-black lead-[12px] w-[100px] -left-[25px]
                          filter text-center rounded-xl backdrop-blur-3xl text-bubble' >
                          {info.text}
                        </p>}
                        <img src={`${info.colour}`} alt='character' 
                            className={` 
                            ${info.direction === "left" ? `scale-x-[-1]` : ""}`}></img>
                    </div>
            )})
        )
    }

  return (
    <div className='w-full flex flex-col items-center'>
      <div className="App overflow-clip w-[820px] p-[10px] bg-gray-200">
        <div className='flex flex-col justify-center items-center'>
          <h1 className='text-3xl mt-3 font-bold font-mono'>The Dino Socialite</h1>

          {Object.keys(players).length > 1 && 
            <p className='text-lg mb-3 font-semibold font-sans text-red-900'>
              Have a chat and progress the species
            </p>}
          {Object.keys(players).length <= 1 && 
            <p className='text-lg mb-3 font-semibold font-sans text-red-900'>
              You look a bit lonely, invite a friend and get talking
            </p>}
        </div>
        <p>Might take a few refreshes</p>
        <div className='relative w-[800px] h-[533px]'>
          {gameReady && renderPlayers()}
          <img className='absolute z-0 w-full' src={'/map_ground.png'} alt='ground'></img>
          <img className='absolute z-[2] w-full' src={'/map_trees.png'} alt='ground'></img>
        </div>

        <div className='w-full h-[120px] bg-slate-700 flex flex-row justify-around p-3'>
          <div className= 'bg-slate-300 w-[35%]'>
            <h1>Username</h1>
            <div className=''>
              <form className='flex flex-col' onSubmit={(event) => event.preventDefault()}>
                <input type='text' 
                  value={name}
                  onChange={(e) => setName(e.target.value)}></input>
              </form>
              <button className='border-2 w-full border-black rounded-xl hover:bg-gray-600'
                onClick={() => changeName()}>
                  Ok!
                </button>
            </div>
          </div>

          <div className='bg-slate-300 w-[60%]'>
            Message
            <div className='flex flex-row w-full'>
              <form classname='grow' onSubmit={(event) => event.preventDefault()}>
                <textarea className='w-full' rows='3' cols='40'
                  type='text' value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
              </form>
              <button className='border-2 w-[10%] border-black rounded-xl hover:bg-gray-600'
                onClick={() => sendMessage()}>
                  Send!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
