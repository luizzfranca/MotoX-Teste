import React from 'react'
import { useTheme } from 'styled-components'
import { Container, Title } from './styles'
import { ActivityIndicator } from 'react-native'

interface Props {
  title: string;
  color?: string;
  onPress?: () => void;
  enabled?: boolean;
  loading?: boolean;
  light?: boolean;
}

export const Button = ({
  title,
  color,
  onPress,
  enabled = true,
  loading = false,
  light = false
}: Props) => {
  const theme = useTheme()

  return (
    <Container
      color={color ? color : theme.colors.main}
      onPress={onPress}
      enabled={enabled}
      style={{ opacity: enabled === false || loading === true ? 0.5 : 1 }}
    >
      {loading ? (
        <ActivityIndicator color={theme.colors.shape} />
      ) : (
        <Title light={light}>{title}</Title>
      )}
    </Container>
  )
}
