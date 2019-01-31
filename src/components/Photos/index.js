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
		let results = [];
		for(let i = 0; i <= 2; i++){
			fetch(
			"https://api.unsplash.com/photos/?client_id=a6156d13f6fe3a05b742b926e9a6c74ed971d02dd547e9a28bc5ba6c06ac29ad&per_page=200&page="+i
			).then(res => res.json())
		     .then(result => {
		     	let reso = results.concat(result);
		     	this.setState({images: results})
		     	results = reso;
		     	reso = [];
		     }).catch(error => {
		     	this.setState({loaded:true})
		     })
		}
		console.log(results, "Results");
		
		this.setState({loaded: true});
		
	}
	render(){
		const {images, loaded} = this.state;
		console.log(images, "Images");
		return <div id="good">
		<Typography variant="h2">
		    Trending photos
		</Typography>
		<br/><br/><br/><br/>
		<Grid container spacing={24}>
		  {loaded ? images.map(image => (
		  	<Photo image={image} key={image.id}/>
		  )) : ''}
		  
		  </Grid>
		</div>;
	}
}

export default Photos;