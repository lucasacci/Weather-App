import '../spinner.css'

export const Spinner = () => {
  return (
    <div className='d-flex justify-content-center'>    
      <div className="sk-chase ">
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
      </div>
    </div>
  )
}