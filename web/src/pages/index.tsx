import { ArrowArcLeft } from 'phosphor-react'
import { Box } from '../components/Box'
import { Button } from '../components/Button'

export default function App() {
  return (
    <Box>
      <Button onClick={() => alert('oi')}>
        Enviar
        <ArrowArcLeft />
      </Button>
    </Box>
  )
}
