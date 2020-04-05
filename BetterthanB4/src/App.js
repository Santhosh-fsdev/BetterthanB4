import React from 'react';
import logo from './logo.svg';
import './App.css';
import pic from './banner1.jpeg'
import { Player, BigPlayButton, ControlBar, PosterImage, PlaybackRateMenuButton } from 'video-react';
import 'video-react/dist/video-react.css';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
class App extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      // playerSource: "https://www.dropbox.com/s/qlnxvr92oycy3ok/779d7918-2e99-4156-b660-af66ef7f9ad5.webm?raw=1"
    };

    this.handleValueChange = this.handleValueChange.bind(this);
    this.updatePlayerInfo = this.updatePlayerInfo.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.playerSource !== prevState.playerSource) {
      this.player.load();
    }
  }

  handleValueChange(e) {
    const { value } = e.target;
    this.setState({
      inputVideoUrl: value
    });
  }

  updatePlayerInfo() {
    const { inputVideoUrl } = this.state;
    this.setState({
      playerSource: inputVideoUrl
    });
  }
  render() {
    return (
      <div style={{ margin: '10px' }}>
        <h1>Better than B4</h1>
        <span> Python Problem solving Series</span>
        <hr />
        <br />
        {/* <button> <a href="https://meeting.zoho.in/public/videoprv?recordingId=78cfa444b6c501f183dc623e6aeaf53c41ff51471d8c740547c8e358bde836e7" target="_blank">WebDev -1</a></button> */}
        <Grid container spacing={3}>
        <Grid item xs={12} sm={3}>
          <Paper style={{padding:5}} elevation={6} >
          <Player  height={400} width='auto' fluid={false}
            poster={pic}
            ref={player => {
              this.player = player;
            }}
            videoId="video-1"
          >
            <source src="https://www.dropbox.com/s/qjk8l9pqexkrmb0/Reverse_a_sentence.webm?raw=1" />
            <ControlBar autoHide={false}>
              <PlaybackRateMenuButton rates={[0.5, 1, 1.5, 2]} order={2.3} />
            </ControlBar>
            <BigPlayButton position="center" />
          </Player>
          <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography > 1. Reverse a sentence with two words</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography noWrap={false}>
            This is the First video of our Problem Solving series Series. <br />
            This Video is for Reversing an array which has two words.
            <br /> 
            Code <br />
            <Typography color='error'>
              
              <hr />
              s = input() <br />
              a, b = map(str,s.split(" ")) <br />
              print(b,a) <br />
              </Typography>
              <b>Solution by Santhosh Kumar</b>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper style={{padding:5}} elevation={6} >
          <Player  height={400} width='auto' fluid={false}
            poster={pic}
            ref={player => {
              this.player = player;
            }}
            videoId="video-1"
          >
            <source src="https://www.dropbox.com/s/kw9nxx90ud4eztq/prime.webm?raw=1" />
            <ControlBar autoHide={false}>
              <PlaybackRateMenuButton rates={[0.5, 1, 1.5, 2]} order={2.3} />
            </ControlBar>
            <BigPlayButton position="center" />
          </Player>
          <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography > 2. Prime Number</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            This Video is for identifying a number prime or not.
            <br /> 
            Code <br />
            <Typography color='error'>
              
              <hr />
              n = int(input()) <br />
              for i in range(2,n):<br />
              if( n % i == 0):<br />
              print("Not prime")<br />
              break<br />
              else:<br />
              print("prime")<br />
              </Typography>
              <b>Solution by Santhosh Kumar</b>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
          </Paper>
          
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper style={{padding:5}}  elevation={6}>
          <Player height={400} width='auto' fluid={false}
            poster={pic}
            ref={player => {
              this.player = player;
            }}
            videoId="video-1"
          >
            <source src="https://www.dropbox.com/s/amspi4204i6gb0d/km-mile.webm?raw=1" />
            <ControlBar autoHide={false}>
              <PlaybackRateMenuButton rates={[0.5, 1, 1.5, 2]} order={2.3} />
            </ControlBar>
            <BigPlayButton position="center" />
          </Player>
          <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography > 3. Kilometre to mile conversion</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            This Video is for converting kilometre to mile.
            <br /> 
            Code <br />
            <Typography color='error'>
              
              <hr />
              n = float(input()) <br />
              print("%.2f" %(n * 0.621371 ))
              </Typography>
              <b>Solution by Santhosh Kumar</b>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={3}>
        <Paper style={{padding:5}}  elevation={6}>
          <Player height={400} width='auto' fluid={false}
            poster={pic}
            ref={player => {
              this.player = player;
            }}
            videoId="video-1"
          >
            <source src="https://www.dropbox.com/s/ex6uq7dcrnt0j7r/sumof_max_min%20in%20list.webm?raw=1" />
            <ControlBar autoHide={false}>
              <PlaybackRateMenuButton rates={[0.5, 1, 1.5, 2]} order={2.3} />
            </ControlBar>
            <BigPlayButton position="center" />
          </Player>
          <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography > 4. Sum of Maximum and Minimum Number in list</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Find the sum of maximum and minimum number in the list.
            <br /> 
            Code <br />
            <Typography color='error'>
              
              <hr />
              n = int(input()) <br />
              list1  = []<br />
              for i in range(n):<br />
              list1.append(int(input()))<br />
              list1 = list(map(int,input().split(" ")))<br />
              print(max(list1) + min(list1)) <br />

              </Typography>
              <b>Solution by Santhosh Kumar</b>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
          </Paper>
        </Grid>
        <Grid container style={{padding:'10px'}}  spacing={3}>
        <Grid item xs={12} sm={3}>
          <Paper style={{padding:5}}  elevation={6}>
          <Player height={400} width='auto' fluid={false}
            poster={pic}
            ref={player => {
              this.player = player;
            }}
            videoId="video-1"
          >
            <source src="https://www.dropbox.com/s/ub6umz4609t4oyb/simple_interest.webm?raw=1" />
            <ControlBar autoHide={false}>
              <PlaybackRateMenuButton rates={[0.5, 1, 1.5, 2]} order={2.3} />
            </ControlBar>
            <BigPlayButton position="center" />
          </Player>
          <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography > 5. Simple Interest</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Find the simple interest given principal amount, number of years, rate of interest.
            <br /> 
            Code <br />
            <Typography color='error'>
              
              <hr />
              # p * n * r / 100 <br />
              p, n, r = map(float, input().split(" ")) <br />
              print( p * n * r / 100)<br />

              </Typography>
              <b>Solution by Santhosh Kumar</b>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
          </Paper>
        </Grid>
        </Grid>
        </Grid>
      </div>
    )
  }
}

export default App;
