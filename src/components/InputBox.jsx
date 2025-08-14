const InputBox = (props) => {
  const {inputType, placeHolder} = props;
  return (
    <div className="flex items-center text-sm bg-white h-12 border pl-2 rounded border-gray-500/30 w-full max-w-md">
    <input className="px-2 w-full h-full outline-none text-gray-500 bg-transparent" type={`${inputType}`} placeholder={`${placeHolder}`}/>
</div>
  )
}

export default InputBox