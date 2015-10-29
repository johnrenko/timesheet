var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var Time = React.createClass({
	
    render: function() {
        return <input type="time" className="col-xs-5 timeInput"/>
              
    }
});

var InitialShift = React.createClass({
	
    render: function() {
        return <div className="col-xs-12">
        			<Time/>
        				<span className="col-xs-2 to">to</span>
                    <Time/>
               </div>
    }
});

var AddedShift = React.createClass({
	
    render: function() {
    	return	<div className="col-xs-12">
	        		<Time />
	    					<span className="col-xs-2 to">to</span>
	                <Time />
	            </div>
    }
});

var Break = React.createClass({

	render: function () {
		return <div className="col-xs-12">
					<span className="col-xs-6 break">Break</span>
					<select name="break" className="col-xs-6">
  						<option value="15 min">15 min</option> 
  						<option value="30 min" selected>30 min</option>
  						<option value="1 hour">1 hour</option>
					</select>
				</div>
	}
});

var AddShift = React.createClass({

	getInitialState: function() {
    	return {shift: null};
  	},

    add() {
    	this.setState({shift: <div>
        						{this.state.shift}
        						<div className="row v-spacing">
                                	<AddedShift />
                                </div>
                              </div>
        });
    },

    addBreak() {
    	    	this.setState({shift: <div>
        						{this.state.shift}
        						<div className="row v-spacing">
                                	<Break />
                                </div>
                              </div>
        });
    },

	render: function() {
    	return <div className="shift-block">
    					<div className="row">
    						<div className="col-xs-12">
    							<span className="day">
    								{this.props.day}
    							</span>
    						</div>
    					</div>
    					<div className="row v-spacing">
    						<InitialShift />
    					</div>
    					<div className="">
    						{this.state.shift}
    					</div>
        				<div className="row v-spacing">
                        	<div className="col-xs-6">
                            	<a onClick={this.add}>+ Add shift</a>
                        	</div>
                        	<div className="col-xs-6">
                            	<a onClick={this.addBreak}>+ Add break</a>
                        	</div>
                            
                        </div>
                            
               </div>
    }
});


ReactDOM.render(
	<div>
		<AddShift day="Mon 02 Jan"/>
		<AddShift day="Tue 03 Jan"/>
		<AddShift day="Wed 04 Jan"/>
		<AddShift day="Thu 05 Jan"/>
		<AddShift day="Fri 06 Jan"/>
		<AddShift day="Sat 07 Jan"/>
		<AddShift day="Sun 08 Jan"/>
	</div>,
    document.getElementById('container')
);
