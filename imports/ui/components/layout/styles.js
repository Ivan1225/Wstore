import styled from 'styled-components';

const App = styled.div`
  visibility: ${props => props.visible ? 'visible' : 'hidden'};

  > .container {
    margin-bottom: 80px;
    padding-bottom: 20px;
  }

  .Switch{
    color: white;
  }

  .verify-email {
    margin-bottom: 0;
    padding: 0;
    border-top: none;
    border-bottom: 1px solid #e7e7e7;
    background: #fff;
    color: var(--gray-dark);
    border-radius: 0;

    p {
      padding: 40px;
    }

    .btn {
      padding: 0;
    }
  }
`;

export default {
  App,
};
