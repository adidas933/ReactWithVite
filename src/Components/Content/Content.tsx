import './Content.css'
interface ContentProps {
  number: number;
}

export const Content = (props: ContentProps) => {
  const { number } = props;
  return (
    <div className='content'>{number}</div>
  )
}