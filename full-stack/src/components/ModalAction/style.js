import { styled } from "styled-components";

export const Row = styled.div`
  width: 100%;
  border: 1px solid #d7d7d7;
`;
export const General = styled.div`
  button {
    width: 100%;
    height: 60px;
    background: none;
  }

  .delete {
    color: #ea0000;
  }
`;

export const DivHeader = styled.div`
  display: flex;
  align-items: center;
`;

export const DivBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 75%;
  text-align: center;

  span {
  }
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 25px;

  .section_input {
    display: flex;
    flex-direction: column;
    gap: 20px;

    input {
      border: 1px solid #d7d7d7;
      border-radius: 7px;
      outline: none;
      padding: 10px;
    }

    .name {
      width: 270px;
      height: 45px;
      display: flex;
    }

    .div_date {
      display: flex;
      gap: 30px;

      input {
        width: 120px;
        height: 45px;
      }
    }

    .div_select {
      display: flex;
      flex-direction: column;
      gap: 5px;

      select {
        width: 270px;
        height: 45px;
        border: 1px solid #d7d7d7;
        border-radius: 7px;
        outline: none;
      }
    }
  }

  .section_points {
    padding-top: 15px;
    width: 270px;

    ul {
      display: flex;
      flex-direction: column;
      padding-top: 20px;
      gap: 20px;

      li {
        display: flex;
        justify-content: space-around;
        align-items: flex-end;

        .div_index {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 34px;
          height: 34px;
          border-radius: 34px;
          background-color: #476ee6;
          color: white;
        }

        .div_input {
          display: flex;
          align-items: center;
          gap: 5px;

          input {
            height: 35px;
            border: 1px solid #d7d7d7;
            border-radius: 7px;
            outline: none;
            padding: 10px;
          }

          svg:hover {
            color: red;
          }
        }
      }

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
    }
  }

  .newInput {
    display: flex;
    flex-direction: column;
    width: 270px;
    padding-top: 20px;
    gap: 10px;

    input {
      height: 35px;
      border: 1px solid #d7d7d7;
      border-radius: 7px;
      outline: none;
      padding: 10px;
    }
  }
`;
