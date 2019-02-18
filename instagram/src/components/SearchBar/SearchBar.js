import React from 'react';
import styled from 'styled-components';

//Image imports
import Camera from '../../photos/camera-icon.svg';
import IGlogo from '../../photos/iglogo.png';
import Compass from '../../photos/compass-icon.png';
import Heart from '../../photos/white-heart-icon.svg';
import User from '../../photos/user-icon.png';


//Styled Components
const HeaderNav = styled.nav`
    width: 100%;
    height: 70px;
    border-bottom: 1px solid lightgrey;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
`;

const HeaderContent = styled.div`
    width: 60%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media(max-width: 900px) {
        width: 100%;
    }
`;

const LogoWrapper = styled.div`
    width: 33%;
    height: 40px;
    display: flex;
    padding: 0 25px;
`;

const CameraIconWrapper = styled.div`
    width: 50%;
    border-right: 1px solid black;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 5%;
`;

const LogoNameWrapper = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    padding: 3% 0 0 5%;
`;

const HeaderIcon = styled.img`
    max-width: 100%;
    height: 35px;
    &:hover {
        cursor: pointer;
    }
`;

const Logo = styled(HeaderIcon)`
    height: 25px;
`;

const SearchFieldWrapper = styled.div`
    width: 33%;
    display: flex;
    justify-content: center;
`;

const SearchInput = styled.input`
    width: 55%;
    height: 30px;
    background-color: whitesmoke;
    border: 1px solid lightgrey;
    border-radius: 3px;
    padding: 1.75%;
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: normal;
    &:focus {
        text-align: left;
        background-color: white;
    }
    &::placeholder {
        color: grey;
        font-family: "Font Awesome 5 Free", serif;
        font-weight: 900;
    }
`;

const IconsWrapper = styled.div`
    width: 33%;
    display: flex;
    justify-content: space-evenly;
    padding: 0 9.5%;
`;

const RightHeaderIcon = styled(HeaderIcon)`
    height: 25px;
`;
//end Styled Components

const SearchBar = props => {
    return (
        <HeaderNav>
            <HeaderContent>
                <LogoWrapper>
                    <CameraIconWrapper>
                        <HeaderIcon 
                            src={ Camera } 
                            alt="Camera icon" 
                        />
                    </CameraIconWrapper>
                    <LogoNameWrapper>
                        <Logo 
                            src={ IGlogo } 
                            alt="Instagram logo"
                        />
                    </LogoNameWrapper>
                </LogoWrapper>
                <SearchFieldWrapper>
                    <SearchInput 
                        type="text" 
                        className="fa" 
                        placeholder="&#xF002; Search"
                        onChange={props.searchInputHandler} 
                        value={props.searchText}
                    />
                </SearchFieldWrapper>
                <IconsWrapper>
                    <RightHeaderIcon src={ Compass } alt="Compass icon"/>
                    <RightHeaderIcon src={ Heart } alt="Heart icon"/>
                    <RightHeaderIcon src={ User } alt="User icon" onClick={props.logout}/>              
                </IconsWrapper>
            </HeaderContent>
        </HeaderNav>
    );
}

export default SearchBar;