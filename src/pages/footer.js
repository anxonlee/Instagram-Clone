import "./stylesheets/footer.css"
import OptionBtn from "../components/optionBtn.js"


const Footer = () => {

  const onClickFunc = () => {
    console.log("Click")
  }

  return (
    <footer>
      <nav>
      <OptionBtn title='⌂' className='ftoptionBtn'/>
      <OptionBtn title='❅' className='ftoptionBtn'/>
      <OptionBtn title='📹' className='ftoptionBtn'/>
      <OptionBtn title='+' className='ftoptionBtn' onClick={console.log('aew')}/>
      <OptionBtn title='✉' className='ftoptionBtn'/>
      <OptionBtn title='⚫' className='ftoptionBtn'/>
      </nav>
                
    </footer>
  )
}

export default Footer