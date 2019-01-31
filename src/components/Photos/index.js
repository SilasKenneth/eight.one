import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Photo from '../Photo';

class Photos extends Component {
	constructor(props){
		super(props);
		this.state = {
			images:[],
			loaded: false
		}
	}
	componentDidMount(){
		fetch(
			"https://api.unsplash.com/photos/?client_id=a6156d13f6fe3a05b742b926e9a6c74ed971d02dd547e9a28bc5ba6c06ac29ad&per_page=200"
			).then(res => res.json())
		     .then(result => {
		     	this.setState({images: result});
		     	this.setState({loaded: true});
		     }).catch(error => {
		     	this.setState({loaded:true})
		     })
	}
	render(){
		const {images, loaded} = this.state;
		console.log(images);
		return <div id="good">
		<Typography component="h1">
		    <h1>Trending photos</h1>
		</Typography>
		<br/><br/><br/><br/>
		<Grid container spacing={24}>
		  {loaded ? images.map(image => (
		  	<Photo image={image}/>
		  )) : ''}
		  
		  </Grid>
		</div>;
	}
}

export default Photos;