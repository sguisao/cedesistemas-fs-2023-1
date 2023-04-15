import styled from "styled-components";

const PageLoading = styled.section`
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CustomLoader = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  padding: 6px;
  background:
    conic-gradient(from 135deg at top,#766DF4 90deg, #0000 0) 0 calc(50% - 4px)/17px 8.5px,
    radial-gradient(farthest-side at bottom left,#0000 calc(100% - 6px),#766DF4 calc(100% - 5px) 99%,#0000) top right/50%  50% content-box content-box,
    radial-gradient(farthest-side at top        ,#0000 calc(100% - 6px),#766DF4 calc(100% - 5px) 99%,#0000) bottom   /100% 50% content-box content-box;
  background-repeat: no-repeat;
  animation:s1 1s infinite linear;

@keyframes s1{
  100%{transform: rotate(1turn)}
}
`;

/*const CustomLoader = styled.div`
  width:50px;
  height:50px;
  border-radius:50%;
  border:8px solid;
  border-color:#766DF4 #0000;
  animation:s1 1s infinite;
  @keyframes s1 {to{transform: rotate(.5turn)}}
`;*/


export const LazyLoading = () => {

  return (
    <PageLoading>
      <CustomLoader />
    </PageLoading>
  )
}
