import styled from 'styled-components';

export const Profile = styled.div`
    padding: 5px;
    text-align: center;
	@media all and (max-width:767px) {
        font-size: 10px;
    }
    @media all and (min-width:768px) and (max-width:1080px) {
        font-size: 13px;
    }
    @media all and (min-width:1081px) {
        font-size: 15px;
    }
`;