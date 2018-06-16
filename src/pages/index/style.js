import styled from 'styled-components'
import { flexRowCenter } from '../../const'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`
export const Top = styled.div`
  height: 50%;
  ${flexRowCenter};
`
export const Bottom = styled.div`
  height: 50%;
  ${flexRowCenter};
`
