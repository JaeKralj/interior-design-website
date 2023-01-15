export default function Button({
  children,
  type,
  disabled,
  handleOnclick,
  className,
}) {
  return (
    <button
      onClick={handleOnclick}
      className={`text-center text-base lg:text-lg text-white transition-transform duration-500 ease-in-out hover:translate-y-1 rounded-2xl flex justify-center items-center ${className} ${
        disabled ? 'bg-opacity-[0.55]' : ''
      }`}
      type={type || 'button'}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
