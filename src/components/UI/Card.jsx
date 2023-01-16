export default function Card({ children, className }) {
  return (
    <div className={`my-2 rounded-xl p-4 shadow-sm ${className}`}>
      {children}
    </div>
  )
}
