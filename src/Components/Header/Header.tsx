import './Header.css'

interface HeaderProps {
  text: string;
}

export const Header = (props: HeaderProps) => {
  const { text } = props;
  return (
    <div className='header'>{text}</div>
  )
}
