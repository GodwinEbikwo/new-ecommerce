import styled, { keyframes } from 'styled-components';

const loading = keyframes`
  from {
    background-position: 0 0;
  }

  to {
    background-position: 100% 100%;
  }
`;

const Form = styled.form`
  padding: 25px;
  font-size: 1.5rem;
  line-height: 1.5;
  font-weight: 600;
  border-radius: 5px;
  margin: 0 auto;
  max-width: 550px;

  @media (max-width: 767px) {
    padding: 20px 10px;
  }

  .sflex {
    @media (min-width: 768px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 0.7em;
    }
  }

  h1 {
    margin-bottom: 1.5rem;
    line-height: 1.1;
    text-align: center;
    font-weight: 600;
    letter-spacing: normal;
  }

  p {
    text-align: center;
  }

  label {
    display: block;
    font-weight: 500;
    letter-spacing: var(--ls-medium);
    margin-bottom: 2rem;
    margin-top: var(--spacer);
  }

  input,
  textarea,
  select {
    color: var(--text-white);
    margin-top: 0.5rem;
    width: 100%;
    padding: 1.45rem 0;
    border-radius: 3px;
    background: var(--lightDark);
    font-family: inherit;
    border-bottom: 1px solid var(--border-color);
    border-top: 0;
    border-left: 0;
    border-right: 0;
    transition: all 300ms linear;
    &:focus {
      outline: 0;
      border-color: var(--red);
    }
  }

  button[type='submit'] {
    width: auto;
    background: var(--green);
    color: var(--text-black);
    border: 0;
    font-weight: 500;
    font-size: 1.2rem;
    padding: 1.85rem 3rem;
  }

  input {
    background-color: transparent;
    border-radius: 0;
  }

  fieldset {
    border: 0;
    padding: 0;
    margin-top: 2rem;

    &[disabled] {
      opacity: 0.5;
    }

    &::before {
      content: '';
      margin-bottom: 5rem;
      height: 10px;
      border-radius: 10px;
      display: block;
      background-image: linear-gradient(
        to right,
        var(--fg) 0%,
        var(--green) 50%,
        var(--fg) 100%
      );
    }
    &[aria-busy='true']::before {
      background-size: 50% auto;
      animation: ${loading} 0.5s linear infinite;
      cursor: wait;
    }
  }

  p {
    margin-bottom: var(--spacer);
  }

  span {
    display: inline-block;
    margin-bottom: var(--spacer);
    line-height: 1.5;
  }

  .flx-end {
    span {
      display: flex;
      justify-content: flex-end;
      width: 100%;
    }
  }

  .btn-row {
    display: flex;
    flex-direction: column;
    width: 100%;

    /* button {
      cursor: pointer;
      margin-left: 0;
      margin-top: 1rem;
      border-radius: 3px;
      width: 100%;
      letter-spacing: var(--ls-medium);
    } */

    #btn-2 {
      border: 1px solid var(--border-color);
      color: var(--text-white);
      transform: all 0.3s ease;
      opacity: 1;
      background: var(--green);
    }

    #btn-2:hover {
      background: var(--green);
      color: var(--text-white);
    }
  }
`;

export default Form;
