import { styled } from "styled-components";


export const Container = styled.div`
  

  width: 100%;
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  color: ${({ theme }) => theme.COLORS.GREY_300};
  margin-bottom: 8px;
  border-radius: 1rem;

  > input{
    height: 5.6rem;
    width: 100%;
    padding: 1.2rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;
    border: none;

    &placeholder{
      color: ${({ theme }) => theme.COLORS.GREY_300};
    }

    
  }

  >svg{
     margin-left: 1.6rem;
  }


`
