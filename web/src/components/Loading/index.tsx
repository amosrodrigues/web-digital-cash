import { LoadinContainer } from './styles'

export function Loading() {
  return (
    <LoadinContainer>
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </LoadinContainer>
  )
}
