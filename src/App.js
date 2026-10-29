import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Person: {
        fullName: 'Sarah Johnson',
        bio: 'I love building websites and learning new things every day.',
        imgSrc: 'https://randomuser.me/api/portraits/women/44.jpg',
        profession: 'Web Developer',
      },
      shows: false,
      seconds: 0,
    };
  }

  // Runs once, right after the component appears on the page
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ seconds: this.state.seconds + 1 });
    }, 1000);
  }

  // Runs right before the component is removed: stop the timer
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleShow = () => {
    this.setState({ shows: !this.state.shows });
  };

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.Person;

    return (
      <div style={{ textAlign: 'center', padding: '40px' }}>
        <button onClick={this.toggleShow}>
          {this.state.shows ? 'Hide Profile' : 'Show Profile'}
        </button>

        {this.state.shows && (
          <div>
            <img src={imgSrc} alt={fullName} style={{ borderRadius: '50%', marginTop: '20px' }} />
            <h1>{fullName}</h1>
            <h3>{profession}</h3>
            <p>{bio}</p>
          </div>
        )}

        <p>Time since the component was mounted: {this.state.seconds} seconds</p>
      </div>
    );
  }
}

export default App;
