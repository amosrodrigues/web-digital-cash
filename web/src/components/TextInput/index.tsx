import {
  ComponentProps,
  forwardRef,
  ForwardRefRenderFunction,
  useState,
} from 'react'

import { FieldError } from 'react-hook-form'
import { EyeSlash, Eye } from 'phosphor-react'
import { Input, Prefix, TextInputContainer, ButtonShow } from './styles'

export interface TextInputProps extends ComponentProps<typeof Input> {
  prefix?: string
  icon?: React.ReactNode
  isPasswordIcon?: boolean
  error?: Partial<FieldError>
}

const TextInputBase: ForwardRefRenderFunction<
  HTMLInputElement,
  TextInputProps
> = ({ prefix, icon, isPasswordIcon, ...props }, ref) => {
  const [show, setShow] = useState(false)

  const handleClick = () => setShow(!show)

  return (
    <TextInputContainer>
      {!!prefix && <Prefix>{prefix}</Prefix>}
      {icon}

      {isPasswordIcon ? (
        <>
          <Input
            type={show ? 'text' : 'password'}
            size={icon ? 'iconRight' : 'reset'}
            ref={ref}
            {...props}
          />
          <ButtonShow type="button" onClick={handleClick}>
            {show ? <EyeSlash /> : <Eye />}
          </ButtonShow>
        </>
      ) : (
        <Input size={icon ? 'iconLeft' : 'reset'} ref={ref} {...props} />
      )}
    </TextInputContainer>
  )
}

export const TextInput = forwardRef(TextInputBase)

TextInput.displayName = 'TextInput'
