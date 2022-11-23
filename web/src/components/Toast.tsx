import toast, { Toaster } from 'react-hot-toast'

const style = {
  border: '1px solid #00B37E',
  padding: '16px',
  color: '#FFF',
  background: '#202024',
}

const iconTheme = {
  primary: '#00875F',
  secondary: '#FFF',
}

const styleDefault = {
  border: '1px solid #d16425',
  padding: '16px',
  color: '#FFF',
  background: '#202024',
}

const styleError = {
  border: '1px solid #E53E3E',
  padding: '16px',
  color: '#FFF',
  background: '#202024',
}

const iconThemeError = {
  primary: '#C53030',
  secondary: '#FFF',
}

export function AddToast(status: string, description: string) {
  switch (status) {
    case 'error':
      return toast.error(`${description}`, {
        style: styleError,
        iconTheme: iconThemeError,
      })
    case 'success':
      return toast.success(`${description}`, { style, iconTheme })
    default:
      return toast(`${description}`, {
        icon: '😐',
        style: styleDefault,
      })
  }
}
