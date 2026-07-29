
const LeftContent = (props) => {

  return (
    <div className='h-full w-3/5 items-center'>
        <h1 className='text-4xl font-bold'>{props.Company}</h1>
        <h1 className='px-12'>{props.Type}</h1>
        <h1 className='py-5'>{props.Duration}</h1>
        {/* <img src="" alt="Image is not Found" /> */}
    </div>
  )
}

export default LeftContent