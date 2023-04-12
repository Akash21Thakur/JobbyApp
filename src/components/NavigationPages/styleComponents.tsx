import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;

  .navlink {
    text-decoration: inherit;
    color: white;
    padding: 10px;
    font-weight: 500;
    font-size: 20px;
  }

  span {
    @media (max-width: 576px) {
      display: none;
    }
  }
`;

export const TextSpan = styled.span``;
