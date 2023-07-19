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
    justify-content: flex-start;
    align-items: flex-start;
    margin-top: 50px;
    margin-left: 15px;

    img {
      width: 190px;
      height: 47.74px;
    }

    footer {
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 20px;
      margin-left: 15px;
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
  }

  @media (min-width: 1024px) {
    section:nth-child(2) {
      footer {
        justify-content: center;
      }
    }
  }

  @media (min-width: 1400px) {
    justify-content: space-evenly;
  }
`;

export const Form = styled.form`
  margin-top: 30px;
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  h1 {
    color: #476ee6;
  }

  .general_input {
    width: 290px;
    height: 280px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

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

  .general_terms {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 320px;

    label {
      width: 26px;
      height: 27px;
      color: #476ee6;
      border: #476ee6 solid 2px;
      border-radius: 10px;
      input {
        width: 20px;
        height: 20px;
        opacity: 0;
      }
    }

    .bgcolor {
      background-color: #476ee6;
    }

    div {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: flex-start;
      height: 120px;
      width: 85%;

      span {
        color: #476ee6;
      }
    }
  }

  h3 {
    color: red;
  }

  button {
    width: 300px;
    height: 45.31px;
  }

  @media (min-width: 1024px) {
    width: 600px;

    .general_input {
      width: 550px;
      height: 200px;
      flex-wrap: wrap;
      flex-direction: row;

      .InputContaine {
        margin-top: 10px;
      }

      input {
        width: 250px;
      }

      .password {
        width: 250px;
      }
    }

    .general_terms {
      width: 600px;
      gap: 20px;
      justify-content: flex-start;

      div {
        height: 100px;
      }
    }

    .div-button {
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }
`;
