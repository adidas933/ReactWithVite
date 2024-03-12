import './Footer.css'

interface FooterProps {
  text: string;
}

export const Footer = (props: FooterProps) => {
  const { text } = props;
  return (
    <div className='footer'>{ text }</div>
  )
}