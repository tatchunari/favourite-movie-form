const WarningMessage = (props) => {
  return (
    <div className="flex items-center justify-between text-red-600 max-w-80 w-full bg-red-600/10 h-10 shadow">
    <div className="h-full w-1.5 bg-red-600"></div>
    <div className="flex items-center">
        <p className="text-sm ml-2">{props.inputType} is required.</p>
    </div>
    <button type="button" aria-label="close" className="active:scale-90 transition-all mr-3">
    </button>
</div>
  )
}

export default WarningMessage