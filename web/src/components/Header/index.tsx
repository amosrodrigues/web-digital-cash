import { Avatar } from '../Avatar'
import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <div>
        <h2>NG.CA$H</h2>
      </div>

      <div>
        <Avatar
          alt="Amós Rodrigues"
          src="https://github.com/amosrodrigues.png"
        />
        <h2>amos@amos.com</h2>
      </div>
    </HeaderContainer>
  )
}
