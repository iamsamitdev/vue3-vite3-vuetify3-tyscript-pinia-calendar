import styled from 'vue3-styled-components'

export const StyledHeader = styled.h1`
    font-size: 36px;
    text-align: center;
    color: blue;
    background-color: grey;
    height: 200px;
    padding-top: 80px;
`

export const WrapperThemed = styled.section`
  padding: 4em;
  background: ${(props) => props.theme.primary};
`