import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Project extends Component {
	constructor(props) {
		super(props);
		this.state = { activeTab: 0};
	}

	toggleCategories() {
		if(this.state.activeTab === 0){
			return(
				
				<div  className="projects-grid">

						{/* Project 1 */}
						<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
							<CardTitle style={{ color:'#fff', height:'176px', background:'url(https://facebook.github.io/create-react-app/img/logo-og.png) center / cover'}} >React Project #1</CardTitle>
							<CardText>
									Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
							</CardText>

							<CardActions border>
								<Button colored>GitHub</Button>
								<Button colored>CodePen</Button>
								<Button colored>Live Demo</Button>
							</CardActions>

							<CardMenu style={{color:'#fff'}}>
								<IconButton name="share" />
							</CardMenu>
						</Card>

						{/* Project 2 */}
						<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
							<CardTitle style={{ color:'#fff', height:'176px', background:'url(https://facebook.github.io/create-react-app/img/logo-og.png) center / cover'}} >React Project #2</CardTitle>
							<CardText>
									Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
							</CardText>

							<CardActions border>
								<Button colored>GitHub</Button>
								<Button colored>CodePen</Button>
								<Button colored>Live Demo</Button>
							</CardActions>

							<CardMenu style={{color:'#fff'}}>
								<IconButton name="share" />
							</CardMenu>
						</Card>

						{/* Project 3 */}
						<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
							<CardTitle style={{ color:'#fff', height:'176px', background:'url(https://facebook.github.io/create-react-app/img/logo-og.png) center / cover'}} >React Project #3</CardTitle>
							<CardText>
									Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
							</CardText>

							<CardActions border>
								<Button colored>GitHub</Button>
								<Button colored>CodePen</Button>
								<Button colored>Live Demo</Button>
							</CardActions>

							<CardMenu style={{color:'#fff'}}>
								<IconButton name="share" />
							</CardMenu>
						</Card>

				   </div>


			)
		}else if(this.state.activeTab === 1){
			return(
				<div><h1>This is VueJs</h1></div>
			)
		}else if(this.state.activeTab === 2){
			return(
				<div><h1>This is Angular</h1></div>
			)
		}else if(this.state.activeTab === 3){
			return(
				<div><h1>This is MongoDB</h1></div>
			)
		}else if(this.state.activeTab === 4){
			return(
				<div><h1>This is Laravel</h1></div>
			)
		}	
	}

	

	render() {
		return(
			<div className="category-tabs">
				<Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
					<Tab>React</Tab>
					<Tab>Vue</Tab>
					<Tab>Angular</Tab>
					<Tab>MongoDB</Tab>
					<Tab>Laravel</Tab>
				</Tabs>

				
					<Grid>
						<Cell col={12}>
							<div className="content">{this.toggleCategories()}</div>
						</Cell>
					</Grid>
					
			</div>
		) 
	}
}

export default Project;