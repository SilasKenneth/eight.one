import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
class Login extends Component{
	render(){
		return <div className="form">
		<Grid className="form" xs={3}>
		<Typography variant="h4" color="textPrimary" align="center">
		  Sign in
		</Typography>
		  <TextField fullWidth
          id="outlined-email-input"
          label="Email address"
          type="email"
          name="email"
          autoComplete="email"
          margin="normal"
          variant="outlined"
        /><br/>
         <TextField fullWidth
          id="outlined-password-input"
          label="Password"
          type="password"
          name="email"
          autoComplete="email"
          margin="normal"
          variant="outlined"
        /><br/><br/>
        <Button color="secondary" variant="outlined" fullWidth={true} size="large">Get me in</Button>
        </Grid>
		</div>;
	}
}

export default Login;