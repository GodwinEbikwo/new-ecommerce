import styled from 'styled-components';
const ErrorStyles = styled.div`
  padding: 2rem;
  margin: 2rem 0;
  border-left: 5px solid var(--border-color);
  border-radius: 3px;

  strong {
    margin-right: 1rem;
  }
`;

const DisplayError = ({ error }) => {
  if (!error || !error.message) return null;
  if (
    error.networkError &&
    error.networkError.result &&
    error.networkError.result.errors.length
  ) {
    return error.networkError.result.errors.map((error, i) => (
      <ErrorStyles key={i} data-scroll-section>
        <p data-test="graphql-error">
          <strong>WAHALA!</strong>
          {error.message.replace('GraphQL error: ', '')}
        </p>
      </ErrorStyles>
    ));
  }
  return (
    <ErrorStyles data-scroll-section>
      <p data-test="graphql-error">
        <strong>WAHALA!</strong>
        {error.message.replace('GraphQL error: ', '')}
      </p>
    </ErrorStyles>
  );
};


export default DisplayError;
