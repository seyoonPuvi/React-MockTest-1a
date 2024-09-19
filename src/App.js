import {Component} from 'react'
import styled from 'styled-components'
import {AiOutlineDelete} from 'react-icons/ai'
import {FaSearch} from 'react-icons/fa'
import './App.css'

// Replace your code here

const Container = styled.div`
  display:flex;
  flex-direction:column;
  row-gap:0;
  
`

const ProfileContainer = styled.div`
  background-image : url("https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-Edsheeran-bg.png");
  height:30rem;
  width:100%;
  background-size:cover;
  background-position:top;

  display:flex;
  align-items:flex-end;

  padding-left :3rem;
  padding-bottom:3rem;

`

const Profile = styled.div`
  display:flex;
  flex-direction:column;
 
  row-gap:1rem;
`

const Heading = styled.h1`
  font-weight:bold;
  font-size:4rem;
   color:white;
`

const SubHeading = styled.p`
  font-size:2rem;
  color:white;  
`

const MainContainer = styled.div`
  background-color: #152850;
  display:flex;
  flex-direction:column;
  row-gap:2rem;
  padding:3rem 3rem;
  height:100vh;
  
`

const SearchContainer = styled.div`
  display:flex;
  justify-content:space-between;
  width:100%;
 

`

const InputContainer = styled.div`
  display:flex;
  align-items:center;
  background-color:white;
  justify-content:space-between;
  background-color:transparent;
  border:1px solid white;
  border-radius:0.5rem;
  padding:0.5rem 1rem;
`
const Input = styled.input`
  font-size:1.8rem;
  color:white;
  flex-grow:1;
  border:none;
  outline:none;
  background-color:transparent;
`

const SearchIcon = styled(FaSearch)`
  font-size:1.8rem;
  color:white;
  padding-top:1px;
`

const MusicListContainer = styled.ul`
  display:flex;
  flex-direction:column;
  row-gap:1rem;
  overflow:auto;
`

const MusicListItem = styled.li`
  display:flex;
  justify-content:space-between;
  align-items:center;
`

const MusicInfoContainer = styled.div`
  display:flex;
  column-gap:1.5rem;
`

const NameContainer = styled.div`
  display:flex;
  flex-direction:column;
  row-gap:1.5rem;
  padding-top:2rem;
`

const DurationInfo = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  width:80px;
  margin-right:3rem;
`

const Duration = styled.p`
  font-size:1.4rem;
  color:white;
`

const DeleteIcon = styled(AiOutlineDelete)`
  font-size:1.8rem;
  color:white;
`

const Image = styled.img`
  height:15rem;
  width:30rem;
  object-fit:contain;
  object-position:center;
`

const Title = styled.p`
  font-size:3rem;
  color:white;
`

const SubTitle = styled(Title)`
  font-size:2rem;
  color:white;
`

const FailureContainer = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  height:50vh;

`
const Text = styled.p`
   font-weight:bold;
  font-size:4rem;
   color:white;
`

const initialTracksList = [
  {
    id: '3b22e3fd-3d12-4ad1-9e38-90314219c4f4',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-perfect-img.png',
    name: 'Perfect',
    genre: 'Pop',
    duration: '4:04',
  },
  {
    id: '40f97965-ff45-469e-a635-b2ef9f1642ed',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-shape-of-you-img.png',
    name: 'Shape of You',
    genre: 'Divide',
    duration: '4:24',
  },
  {
    id: '782f916b-4056-44ec-a95f-5115c3f84904',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-visiting-hours.png',
    name: 'Visiting Hours',
    genre: 'Folk-Pop',
    duration: '3:49',
  },
  {
    id: 'fcf0dc77-3427-457c-9ee0-91b1dc39fece',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-shivers-img.png',
    name: 'Shivers',
    genre: 'Dance-Pop',
    duration: '3:58',
  },
  {
    id: '9c1bb890-d4d5-4edf-9d95-6959d716b442',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-bad-habits-img.png',
    name: 'Bad Habits',
    genre: 'Dance-Pop',
    duration: '4:01',
  },
  {
    id: '2216db9c-647f-4814-b880-179740e4d748',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-castle-on-the-hill-img.png',
    name: 'Castle on the Hill',
    genre: 'Pop&Rock',
    duration: '4:48',
  },
  {
    id: 'a5e30966-b760-4660-bf08-073135f7d010',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-happier-img.png',
    name: 'Happier',
    genre: 'Pop',
    duration: '3:36',
  },
  {
    id: '2d5c9bc0-b8b0-41c6-aa55-cb3b659d8604',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-photograph-img.png',
    name: 'Photograph',
    genre: 'Folk music',
    duration: '4:26',
  },
  {
    id: 'efd3d621-2c05-4941-acdc-0a1a0786bc53',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-galway-girl-img.png',
    name: 'Galway Girl',
    genre: 'Pop',
    duration: '3:20',
  },
  {
    id: 'e4b8e3b8-7776-4c09-8abc-ba328a8babe9',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-i-dont-care-img.png',
    name: "I Don't Care",
    genre: 'Pop',
    duration: '3:38',
  },
]

class App extends Component {
  state = {
    searchValue: '',
    musicList: initialTracksList,
  }

  onClickDelete = id => {
    const {musicList} = this.state

    if (musicList.length > 0) {
      const updatedList = musicList.filter(each => each.id !== id)
      this.setState({musicList: updatedList})
    }
  }

  onChangeSearchInput = event => {
    this.setState({searchValue: event.target.value})
  }

  onClickSearch = event => {
    this.setState({searchValue: event.target.value})
  }

  onRenderPlaylist = () => {
    const {musicList, searchValue} = this.state

    if (musicList.length === 0) {
      return (
        <FailureContainer>
          <Text>No Songs Found</Text>
        </FailureContainer>
      )
    }
    const updatedMusicList = musicList.filter(each =>
      each.name.toLowerCase().includes(searchValue.toLowerCase()),
    )

    if (updatedMusicList.length === 0) {
      return (
        <FailureContainer>
          <Text>No Songs Found</Text>
        </FailureContainer>
      )
    }

    return (
      <MusicListContainer>
        {updatedMusicList.map(each => (
          <MusicListItem key={each.id}>
            <MusicInfoContainer>
              <Image src={each.imageUrl} alt="track" />
              <NameContainer>
                <Title>{each.name}</Title>
                <SubTitle>{each.genre}</SubTitle>
              </NameContainer>
            </MusicInfoContainer>
            <DurationInfo>
              <Duration>{each.duration}</Duration>
              <button
                type="button"
                onClick={() => this.onClickDelete(each.id)}
                data-testid="delete"
              >
                <DeleteIcon />
              </button>
            </DurationInfo>
          </MusicListItem>
        ))}
      </MusicListContainer>
    )
  }

  render() {
    const {searchValue} = this.state

    return (
      <Container>
        <ProfileContainer>
          <Profile>
            <Heading>Ed Sheeran</Heading>
            <Text>Singer</Text>
          </Profile>
        </ProfileContainer>

        <MainContainer>
          <SearchContainer>
            <Heading>Songs Playlist</Heading>
            <InputContainer>
              <Input
                type="search"
                onChange={this.onChangeSearchInput}
                value={searchValue}
                placeholder="Search"
              />
              <button type="button" onClick={this.onSearch}>
                <SearchIcon />
              </button>
            </InputContainer>
          </SearchContainer>
          {this.onRenderPlaylist()}
        </MainContainer>
      </Container>
    )
  }
}

export default App
