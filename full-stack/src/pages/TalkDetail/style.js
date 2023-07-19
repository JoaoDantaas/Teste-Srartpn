import { styled } from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: 68px;
  border-bottom: solid 1px #e8e8e8;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  padding: 0px 15px;

  h1 {
    width: 100%;
    text-align: center;
  }

  svg {
    width: 25px;
    height: 25px;
  }
`;

export const ContainerGeral = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ContainerLi = styled.section`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  gap: 10px;

  li {
    width: 311px;
    height: 191px;
    border: 1px solid #d7d7d7;
    border-radius: 10px;
    list-style: none;

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
    }

    section:nth-child(3) {
      height: 120px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 20px;

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
`;

export const ContainerPoints = styled.section`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;

  .container {
    width: 311px;
    padding-bottom: 50px;
    border: 1px solid #d7d7d7;
    border-radius: 10px;
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
    display: flex;
    flex-direction: column;
    gap: 20px;
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
`;

export const ContainerNotes = styled.section`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  margin-bottom: 20px;

  .container {
    width: 311px;
    padding-bottom: 50px;
    border: 1px solid #d7d7d7;
    border-radius: 10px;
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
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding-top: 20px;
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
      flex-direction: column;
      gap: 8px;
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
`;
