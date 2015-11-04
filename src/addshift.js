var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
var Panel = ReactBootstrap.Panel;
var Accordion = ReactBootstrap.Accordion;

var Time = React.createClass({
    getInitialState: function() {
        return {value: '00:00'};
    },

    handleChange: function(event) {
        this.setState({value: event.target.value});
    },

    render: function() {
        return <input type="time" defaultValue={this.state.value} onChange={this.handleChange} className="col-xs-4 timeInput"/>
              
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
    	return	<div className="col-xs-12 line">
	        		<Time />
	    			<span className="col-xs-2 to">to</span>
	                <Time />
	                <a onClick={this.remove} className="col-xs-1 remove"><i className="fa fa-times-circle fa-2x"></i></a>
	            </div>
    }
});

var Break = React.createClass({

    getInitialState: function() {
        return {value: '30 min'};
    },

    handleChange: function(event) {
        this.setState({value: event.target.value});
    },

    remove(){
        ReactDOM.unmountComponentAtNode(document.getElementById(''))
    },

	render: function () {
		return <div className="col-xs-12 breakline">
					<span className="col-xs-6 break">Break</span>
					<label className="col-xs-4">
						<select name="break" defaultValue={this.state.value} onChange={this.handleChange} className="dropdown">
	  						<option value="15 min">15 min</option> 
	  						<option value="30 min">30 min</option>
	  						<option value="1 hour">1 hour</option>
						</select>
					</ label>
					<a onClick={this.remove} className="col-xs-1 remove"><i className="fa fa-times-circle fa-2x"></i></a>
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
                                	<AddedShift  number={this.state.i} />
                                </div>

                              </div>
        });
    },

    addBreak() {
    	    	this.setState({shift: <div>
        						{this.state.shift}
        						<div className="row v-spacing">
                                	<Break number={this.state.i} />
                                </div>
                                
                              </div>
        });
    },

	render: function() {
    	return <div className="shift-block">


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

var Week = React.createClass({
    render: function() {
    return  <div>
            <Accordion defaultActiveKey="1">
                <Panel header="Mon 02 Jan" eventKey="1">
                    <AddShift day="Mon 02 Jan" />
                </Panel>
                <Panel header="Tue 03 Jan" eventKey="2">
                    <AddShift day="Tue 03 Jan" />
                </Panel>
                <Panel header="Wed 04 Jan" eventKey="3">
                    <AddShift day="Wed 04 Jan" />
                </Panel>
                <Panel header="Thu 05 Jan" eventKey="4">
                    <AddShift day="Thu 05 Jan" />
                </Panel>
                <Panel header="Fri 06 Jan" eventKey="5">
                    <AddShift day="Fri 06 Jan" />
                </Panel>
                <Panel header="Sat 07 Jan" eventKey="6">
                    <AddShift day="Sat 07 Jan" />
                </Panel>
                <Panel header="Sun 08 Jan" eventKey="7">
                    <AddShift day="Sun 08 Jan" />
                </Panel>
            </Accordion>
            </div>
    }
});

ReactDOM.render(
	<div>
		<Week />
	</div>,
    document.getElementById('container')
);
