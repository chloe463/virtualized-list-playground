import styled from "styled-components";

export const ListWrapper = styled.div`
  position: relative;
  display: block;
  box-sizing: content-box;
  & ul {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 80%;
    max-width: 1280px;
    min-width: 720px;
    margin: 48px auto;
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
