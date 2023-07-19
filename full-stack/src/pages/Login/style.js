import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 90vh;

  section:nth-child(1) {
    display: none;
  }

  section:nth-child(2) {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
      width: 190px;
      height: 47.74px;
    }
  }

  @media (min-width: 768px) {
    display: flex;
    gap: 20px;

    section:nth-child(1) {
      display: block;

      img {
        height: 99vh;
        width: 100%;
      }
    }
    section:nth-child(2) {
      align-items: flex-start;
    }
  }

  @media (min-width: 1400px) {
    justify-content: center;
    gap: 150px;
  }
`;

export const Form = styled.form`
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  h1 {
    color: #476ee6;
  }

  .general_input {
    display: flex;
    flex-direction: column;
    gap: 20px;

    input {
      width: 290px;
      height: 40px;
      border: solid 1px #d7d7d7;
      color: #424242;
      padding-left: 8px;
      border-radius: 10px;
    }

    input:focus {
      outline: 1px solid #476ee6;
    }

    .password {
      width: 290px;
      display: flex;
      align-items: center;
      border: solid 1px #d7d7d7;
      border-radius: 10px;
      padding-right: 10px;

      input {
        border: none;
      }
      input:focus {
        outline: none;
      }
    }
    .password:focus-within {
      outline: 1px solid #476ee6;
    }
  }

  .general_button {
    display: flex;
    flex-direction: column-reverse;
    gap: 40px;

    .forget {
      width: 290px;
      height: 48px;
    }
    div {
      display: flex;
      justify-content: flex-end;
      width: 100%;
    }
  }

  @media (min-width: 768px) {
    width: 350px;
    align-items: flex-start;

    .general_button {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 20%;

      div {
        display: block;
      }
    }
  }

  @media (min-width: 1024px) {
    .general_input {
      input {
        width: 350px;
      }

      .password {
        width: 350px;
      }
    }
  }

  @media (min-width: 1400px) {
    .general_input {
      input {
        width: 450px;
      }

      .password {
        width: 450px;
      }
    }
  }
`;
