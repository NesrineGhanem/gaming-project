import  './SeactionWrapper.css'

function SeactionWrapper(props) {
  return (
    <>
    <div  className='section-wrapper'>
    {props.children}</div>
    </>
  )
}

export default SeactionWrapper;