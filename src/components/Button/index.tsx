import { ButtonContainer } from './styles'

export interface Props {
  children: string | string[]
  onClick?: () => void
  backgroundColor: 'beige' | 'red'
  width: '100%' | 'auto'
  customPadding: '4px 0' | '4px 6.95px' | '4px 6px'
  marginBottom?: string
  type?: 'submit' | 'button'
  disabled?: boolean
}

const Button = ({
  children,
  onClick,
  width,
  backgroundColor,
  customPadding,
  marginBottom,
  type,
  disabled
}: Props) => {
  return (
    <ButtonContainer
      width={width}
      backgroundColor={backgroundColor}
      onClick={onClick}
      customPadding={customPadding}
      marginBottom={marginBottom}
      type={type}
      disabled={disabled}
    >
      {children}
    </ButtonContainer>
  )
}

export default Button
