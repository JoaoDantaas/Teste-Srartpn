import { styled } from "styled-components";

export const ContainerMobile = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;

  .buttonmore {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    width: 60px;
    height: 60px;
    background: #476ee6;
    top: 90%;
    left: 80%;
    border-radius: 60px;
    color: white;
    font-size: 20px;
  }

  .general_search {
    display: flex;
    width: 100%;
    justify-content: space-around;
    align-items: center;

    h1 {
      color: #476ee6;
    }

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      background: none;
      width: 39px;
      height: 39px;
      border: 1px solid #e8e8e8;
      border-radius: 12px;
      svg {
        width: 60%;
        height: 80%;
      }
    }
  }

  .general_button {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;

    div {
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid #e8e8e8;
      border-radius: 100px;
      padding: 9px;
      height: 45px;
    }

    .selected {
      background-color: #476ee6 !important;
      color: white !important;
      transition: 0.5s;
    }

    button {
      width: 150px;
      height: 35px;
    }
  }
`;

export const ContainerUl = styled.ul`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 10px;

  li {
    width: 311px;
    height: 191px;
    border: 1px solid #d7d7d7;
    border-radius: 10px;

    section:nth-child(1) {
      height: 70px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0px 5px;

      input {
        cursor: pointer;
      }

      .general_div {
        width: 224.1px;
      }

      .date {
        display: flex;
        gap: 5px;
        color: #476ee6;
        align-items: center;
      }
    }
    .row {
      display: flex;
      align-items: center;
      justify-content: center;
      div {
        width: 301px;
        border: 1px solid #e4e4ef;
      }
      input {
        position: absolute;
        width: 311px;
        height: 120px;
        background-color: transparent;
        margin-top: 120px;
        outline: none;
        border: none;
      }
    }

    section:nth-child(3) {
      height: 120px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 20px;
      cursor: pointer;

      div {
        display: flex;
        justify-content: space-between;
        padding: 0 20px;

        h3 {
          color: #808080;
        }
      }
    }
  }

  li:focus-within {
    outline: 1.5px solid #476ee6;
  }

  @media (min-width: 1440px) {
    li {
      width: 400px;

      .row {
        input {
          width: 400px;
        }
      }
    }
  }
`;

export const ContainerDesktop = styled.div`
  width: 100%;
  height: 100vh;

  .div_container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .div_container_filter {
      display: flex;
      align-items: center;
      gap: 10px;

      .div_buttonfilter {
        width: 300px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid #e8e8e8;
        border-radius: 100px;
        padding: 9px;
        height: 45px;

        .selected {
          background-color: #476ee6 !important;
          color: white !important;
          transition: 0.5s;
        }

        button {
          width: 150px;
          height: 35px;
        }
      }

      .div_search {
        display: flex;
        outline: 1px solid #d7d7d7;
        border-radius: 60px;
        padding: 10px;
        gap: 10px;

        input {
          outline: none;
          width: 50px;
        }
      }
    }
  }

  .section_talks {
    width: 100%;
    padding-top: 30px;
    margin: 0;
    display: flex;
  }

  .section_pointsnotes {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  @media (min-width: 1024px) {
    .div_container {
      .div_container_filter {
        .div_search {
          input {
            width: 150px;
          }
        }
      }
    }
  }
`;

export const ContainerPoints = styled.section`
  width: 100%;
  height: 275px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;

  .container {
    width: 311px;
    height: 275px;
    padding-bottom: 50px;
    border: 1px solid #d7d7d7;
    border-radius: 10px;
    position: fixed;
  }

  h2 {
    padding: 13px;
  }

  .row {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    div {
      width: 301px;
      border: 1px solid #e4e4ef;
    }
  }
  ul {
    height: 120px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    overflow-y: scroll;
  }
  li {
    width: 100%;
    display: flex;
    gap: 20px;
    padding: 0 15px;
    align-items: flex-start;

    p {
      text-align: start;
    }
  }
  button {
    padding: 20px 15px;
  }

  @media (min-width: 1440px) {
    .container {
      width: 550px;
    }
  }
`;

export const ContainerNotes = styled.section`
  width: 100%;
  height: 270px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  margin-bottom: 20px;

  .container {
    width: 311px;
    height: 270px;
    padding-bottom: 50px;
    border: 1px solid #d7d7d7;
    border-radius: 10px;
    position: fixed;
  }

  h2 {
    padding: 13px;
  }

  .row {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    div {
      width: 301px;
      border: 1px solid #e4e4ef;
    }
  }

  .general_input {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  input {
    width: 277px;
    height: 65px;
    background-color: #faf9f9;
    border: 1px solid #efefef;
    border-radius: 8px;
    padding-left: 15px;
    color: #787486;
  }

  input:focus {
    outline: none;
  }

  ul {
    height: 120px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding-top: 20px;
    overflow-y: scroll;
  }

  li {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-left: 14px;
    gap: 10px;

    .row_li {
      display: flex;
      align-items: center;
      justify-content: center;
      padding-right: 14px;
      div {
        width: 290px;
        border: 1px solid #e4e4ef;
      }
    }

    h3 {
      padding-left: 10px;
    }

    .div_name_date {
      display: flex;
      gap: 8px;
      align-items: center;
      justify-content: space-between;
      padding-right: 20px;

      .div_date {
        display: flex;
        gap: 10px;
      }
    }

    .name {
      background: #f4f4f4;
      text-align: center;
      width: max-content;
      padding: 5px 10px 5px 10px;
      border-radius: 60px;
    }

    .date {
      display: flex;
      gap: 5px;
      background: #f4f4f4;
      text-align: center;
      width: max-content;
      padding: 5px 10px 5px 10px;
      border-radius: 60px;
    }

    .name-text {
      padding-left: 10px;
    }
  }

  @media (min-width: 1440px) {
    .container {
      width: 550px;
    }
    li {
      .row_li {
        div {
          width: 500px;
        }
      }
    }

    input {
      width: 470px;
    }
  }
`;
