import styled from "vue3-styled-components"

const btnProps: any = { primary: Boolean }

export const StyledButton = styled("button", btnProps)`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  background: ${(props) => (props.primary ? "palevioletred" : "white")};
  color: ${ (props) => (props.primary ? "white" : "palevioletred") };
  &:hover {
    background-color:${(props) => (props.primary ? "white" : "palevioletred")};
    color: ${ (props) => (props.primary ? "palevioletred" : "white") };
  }
`