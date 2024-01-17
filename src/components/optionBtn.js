const OptionBtn = (props) => {
  const add = (e) =>{
    e.preventDefault();
    console.log("Click")
  }

  return (
    <div>
      <input defaultValue={props.title} type='button'  className={props.className} onClick={props.onClick}></input>
      {props.abc}
    </div>
  )
}

export default OptionBtn