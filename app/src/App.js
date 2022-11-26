import styled from 'styled-components';

function App() {
  return (
    <Container>
      <div>메인 페이지</div>
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  border: 1px black solid;
`;
