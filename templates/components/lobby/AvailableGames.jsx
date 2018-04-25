import React from 'react'

class AvailableGames extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            game_list: this.props.game_list
        }

     this.renderGameList = this.renderGameList.bind(this);

    }

    componentWillReceiveProps(newProp) {
        this.setState({ game_list: newProp.game_list })
    }

    renderGameList() {
        // clear out games owned by this player
        let player_removed = this.state.game_list 
		player_removed=player_removed.filter(x => x.p1.id != this.props.player.id) //for some reason if this is done on 1 line it throws a fit

        
        
        if (player_removed.length > 0) {
            return player_removed.map(function (game) {
                    return <li key={game.id} className="list-group-item">
                        <span className="badge pull-left">{game.id}</span>&nbsp; &nbsp;
                        <span>{game.p1.username} vs???</span>
                        <a className="btn btn-sm btn-primary pull-right" href={"/game/"+game.id+"/"}>Play</a>
                    </li>
            }, this)

        } else {
            return ("No Available Games")
        }
    }

    render() {
        return (
            <div>
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <span>Available Games</span>
                    </div>
                    <div className="panel-body">
                        <div>
                            <ul className="list-group games-list">
                                {this.renderGameList() }
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

AvailableGames.defaultProps = {

};

AvailableGames.propTypes = {
    //game_list: React.PropTypes.array,
    //player: React.PropTypes.object

};


export default AvailableGames
