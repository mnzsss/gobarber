import styled from 'styled-components';

export const Container = styled.div``;

export const Header = styled.header`
  padding: 32px 0;
  background: var(--dark);
`;

export const HeaderContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items: center;

  > img {
    height: 80px;
  }

  button {
    background: transparent;
    margin-left: auto;
    border: 0;
    transition: all 0.4s;

    svg {
      color: var(--gray);
      width: 20px;
      height: 20px;
      transition: all 0.4s;
    }

    &:hover {
      svg {
        color: var(--primary);
      }
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 80px;

  img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }

  div {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    line-height: 24px;

    span {
      color: var(--white);
    }

    a {
      color: var(--primary);
      text-decoration: none;
      transition: opacity 0.2s;

      &:hover {
        opacity: 0.8;
      }
    }
  }
`;

export const Content = styled.main`
  max-width: 1120px;
  margin: 64px auto;
  display: flex;
`;

export const Schedule = styled.div`
  flex: 1;
  margin-right: 120px;

  h1 {
    font-size: 36px;
  }

  p {
    margin-top: 8px;
    color: var(--primary);
    display: flex;
    align-items: center;
    font-size: 16px;
    font-weight: 500;

    span {
      display: flex;
      align-items: center;
      text-transform: capitalize;
    }

    span + span::before {
      content: '';
      width: 1px;
      height: 12px;
      background: var(--primary);
      margin: 0 8px;
    }
  }
`;

export const NextAppointment = styled.div`
  margin-top: 64px;

  > strong {
    color: var(--gray);
    font-size: 20px;
    font-weight: 400;
  }

  div {
    background: var(--card-background);
    border-radius: 10px;
    display: flex;
    align-items: center;
    padding: 16px 24px;
    margin-top: 24px;
    position: relative;

    &::before {
      content: '';
      position: absolute;
      height: 80%;
      width: 2px;
      left: 0;
      top: 10%;
      background: var(--primary);
      border-radius: 10px 0px 0px 10px;
      transform: matrix(-1, 0, 0, 1, 0, 0);
    }

    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
    }

    strong {
      margin-left: 24px;
      font-size: 24px;
      line-height: 32px;
      color: var(--white);
    }

    span {
      margin-left: auto;
      display: flex;
      align-items: center;
      color: var(--gray);
      font-size: 20px;
      line-height: 26px;

      svg {
        color: var(--primary);
        margin-right: 10px;
        width: 24px;
        height: 24px;
      }
    }
  }
`;

export const Section = styled.section`
  margin-top: 48px;

  > strong {
    color: var(--gray);
    font-size: 20px;
    line-height: 26px;
    border-bottom: 1px solid var(--card-background);
    display: block;
    padding-bottom: 16px;
    margin-bottom: 16px;
  }

  > p {
    color: var(--gray);
  }
`;

export const Appointment = styled.div`
  display: flex;
  align-items: center;

  & + div {
    margin-top: 16px;
  }

  span {
    display: flex;
    align-items: center;
    color: var(--gray);
    font-size: 20px;
    line-height: 26px;
    width: 80px;

    svg {
      color: var(--primary);
      margin-right: 10px;
      width: 24px;
      height: 24px;
    }
  }

  div {
    flex: 1;
    background: var(--card-background);
    border-radius: 10px;
    display: flex;
    align-items: center;
    padding: 16px 24px;
    margin-left: 24px;

    strong {
      margin-left: 24px;
      font-size: 20px;
      line-height: 26px;
      color: var(--white);
    }
  }

  img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }
`;

export const Calendar = styled.aside`
  width: 380px;

  .DayPicker {
    background: var(--dark);
    border-radius: 10px;
  }

  .DayPicker-wrapper {
    padding-bottom: 0;
  }

  .DayPicker,
  .DayPicker-Month {
    width: 100%;
  }

  .DayPicker-Month {
    border-collapse: separate;
    border-spacing: 8px;
    margin: 16px;
  }

  .DayPicker-Day {
    width: 40px;
    height: 40px;
  }

  .DayPicker-Day--available:not(.DayPicker-Day--outside) {
    background: var(--card-background);
    border-radius: 10px;
    color: var(--white);
  }

  .DayPicker:not(.DayPicker--interactionDisabled)
    .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover {
    background: var(--input-backgorund);
  }

  .DayPicker-Day--today {
    font-weight: normal;
  }

  .DayPicker-Day--disabled {
    color: var(--helper) !important;
    background: transparent !important;
  }

  .DayPicker-Day--selected {
    background: var(--primary) !important;
    border-radius: 10px;
    color: var(--input-backgorund) !important;
  }
`;
