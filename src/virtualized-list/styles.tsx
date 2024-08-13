import styled from "styled-components";

export const ListWrapper = styled.div`
  display: block;
  box-sizing: content-box;
  padding: 200px;
  & ul {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  & ul li {
    margin-top: 16px;
  }
`;

export const Card = styled.div`
  display: block;
  margin-top: 16px;
  padding: 16px;
  box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.02),
    0px 2px 6px 0px rgba(0, 0, 0, 0.1); /* Elevation 4 */
`;
