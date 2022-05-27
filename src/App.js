import "./App.css";
import { useState, useEffect } from "react";
import Cardholder from "./Card";

function App() {
  const [pokimon, setPokimon] = useState([]);
  const [pokLimit, setPokLimit] = useState(
    "https://pokeapi.co/api/v2/pokemon/?limit=10&offset=10"
  );
  const [prev, setPrev] = useState();
  const [next, setNext] = useState();
  const [pokInput, setPokInput] = useState("");
  const [apiCheck, setApiCheck] = useState(false);

  const pokNameCall = async () => {
    const url = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokInput}`);
    const newUrl = await url.json();
    console.log("newUrl", newUrl);
    setApiCheck(true);
  };
  const limitPoki = async () => {
    const url = await fetch(pokLimit);
    // const url = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=10");
    const newUrl = await url.json();
    setPrev(newUrl.previous);
    setNext(newUrl.next);
    console.log("newUrlOne", newUrl);
    const pokApi = async (poki) => {
      try {
        poki.map(async (poke) => {
          const url = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${poke.name}`
          );
          const newUrl = await url.json();
          // console.log("ayushi", url);
          console.log("newUrl", newUrl);
          // setPokimon(newUrl);
          setPokimon((oldVal) => [...oldVal, newUrl]);
          // let newVal = abc.push(newUrl)
          // console.log("MS-->", abc);
        });
      } catch (e) {
        console.log("ERROR", e);
      }
    };
    pokApi(newUrl.results);
    console.log("MS-->", pokimon);
  };
  useEffect(() => {
    // limitApi();
    limitPoki();
    console.log("effect Run count");
  }, [pokLimit]);
  // const x = document.getElementsByClassName("pokName");
  // for (let i = 0; i <= x.length - 1; i++) {
  //   let y = x[i].innerText;
  //   let z = y.charAt(0).toUpperCase() + y.slice(1);
  //   // console.log("z-->", z);
  // }
  return (
    <>
      <div className="container">
        <input
          type="text"
          id="typeHere"
          placeholder="Search..."
          onChange={(e) => {
            setPokInput(e.target.value);
            // pokNameCall();
          }}
        ></input>
        <button
          id="searchBtn"
          onClick={(e) => {
            {
              pokNameCall();
            }
          }}
        >
          Search
        </button>
        {/* <p id="showData">{pokimon.myData}</p> */}
      </div>

      <div id="displayItem">
        {pokimon
          .filter((e) => {
            if (e.name.toUpperCase().includes(pokInput.toUpperCase())) {
              return e;
            }
          })
          .map((item, key) => {
            return (
              <Cardholder
                key={key}
                name={item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                img={item.sprites.other.home.front_default}
                move={item.height}
                type={item.types[0].type.name}
                moves={item.moves[0].move.name}
                weight={item.weight}
                height={item.height / 10}
                ability={item.abilities[0].ability.name}
                hpPower={item.stats[0].base_stat}
                attackPower={item.stats[1].base_stat}
                defencePower={item.stats[2].base_stat}
                sattackPower={item.stats[3].base_stat}
                sdefencePower={item.stats[4].base_stat}
                speed={item.stats[5].base_stat}
              />
            );
          })}
        {/* {pokimon.filter((e)=>{})} */}
      </div>
      <div className="buttons">
        <button
          className="prevBtn"
          onClick={() => {
            setPokLimit(prev);
          }}
        >
          Previous
        </button>
        <button
          className="nextBtn"
          onClick={() => {
            setPokLimit(next);
          }}
        >
          Next
        </button>
      </div>
    </>
  );
}

export default App;


