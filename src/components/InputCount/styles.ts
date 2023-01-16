import styled from 'styled-components'

export const InputCountContainer = styled.div`
  display: flex;
  background: #e6e5e5;
  border-radius: 6px;
  padding: 8px;

  input {
    width: 25px;
    border: 0;
    background: transparent;
    text-align: center;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  button {
    background: transparent;
    border: 0;
    cursor: pointer;
  }
`
