function Cardholder(props) {
  return (
    <>
      <div className="pokContainer">
        <div className="imgConatiner">
          <img src={props.img} alt="i am here" className="pokImage" />
        </div>

        <div className="infoBox">
          <div className="abicontainer">
            <span className="pokType pokSameCls"> {props.type}</span>
            <span className="pokStat pokSameCls"> {props.moves}</span>
            <span className="pokName">{props.name}</span>
            {/* <p className="pokHeight pokSameCls">{props.height}</p> */}
          </div>
          <div className="abicontainerTwo">
            <div>
              <span className="pokWeight measureVal">{props.weight} lbs</span>
              <p> Weight</p>
            </div>
            <div>
              <span className="pokAbility"> {props.ability}</span>
              <p> Ability</p>
            </div>
            <div>
              <span className="pokHeight measureVal"> {props.height} m</span>
              <p> Height</p>
            </div>
          </div>
          <div className="containerThree">
            <div className="firstBox">
              <div>
                <p className="powerName"> HP</p>
                <p className="hpPower mainPowers">{props.hpPower}</p>
              </div>
              <div>
                <p className="powerName">Attack</p>
                <p className="attackPower mainPowers">{props.attackPower}</p>
              </div>
              <div>
                <p className="powerName">Defence</p>
                <p className="defencePower mainPowers">{props.defencePower}</p>
              </div>
            </div>
            <div className="secondBox">
              <div>
                <p className="powerName">Sp.Att..</p>
                <p className="spAttackPower mainPowers">{props.sattackPower}</p>
              </div>
              <div>
                <p className="powerName">Sp.Def..</p>
                <p className="spDefencePower mainPowers">{props.sdefencePower}</p>
              </div>
              <div>
                <p className="powerName">Speed</p>
                <p className="speed mainPowers">{props.speed}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cardholder;
