import styled from 'styled-components'
import { flexRowCenter, theme } from '../../const'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

export const Head = styled.div`
  width: 100%;
  height: 20%;
  ${flexRowCenter};
`

export const Github = styled.div`
  width: 60%;
  height: 10%;
  ${flexRowCenter};
  border-radius: 10px;
  transition: background-color 0.25s;

  &:hover {
    ${theme.hoverBg};
  }
`
