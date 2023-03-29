import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .nexusLogo {
    height: 4rem;
    filter: drop-shadow(1px 1px 4px ${(props) => props.theme['orange-500']});
  }

  nav {
    display: flex;
    gap: 0.5rem;
  }

  a {
    width: 3rem;
    height: 3rem;

    display: flex;
    justify-content: center;
    align-items: center;

    color: ${(props) => props.theme['gray-100']};

    border-top: 3px solid transparent;
    border-bottom: 3px solid transparent;

    &:hover {
      border-bottom: 3px solid ${(props) => props.theme['orange-500']};
    }

    &.active {
      color: ${(props) => props.theme['orange-500']};
    }
  }
`
