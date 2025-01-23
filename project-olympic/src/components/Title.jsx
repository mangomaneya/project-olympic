
const Title = ({text,isIng}) => {
    //props boolean true 면 진행중입니다.false 면 안보인다. 

  return (
    <h1>{text} {isIng ? "진행중입니다.": "" }</h1>
  )
}

export default Title