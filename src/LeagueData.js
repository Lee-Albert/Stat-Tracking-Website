import React from 'react';

let key = 'RGAPI-3e1bcdb9-d149-484e-95bc-15098d983991';

class FortniteData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data:[]
        };
    }

    componentDidMount() {
        fetch('https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/haloyo?api_key=' + key,
            {
                method: 'GET',
                mode: 'no-cors',
                headers: {
                    "Origin": "https://developer.riotgames.com",
                    "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
                    "X-Riot-Token": "RGAPI-3e1bcdb9-d149-484e-95bc-15098d983991",
                    "Accept-Language": "en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7",
                    "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.90 Safari/537.36"
                }
        }).then(results => {
            console.log(results);
            return results.json();  
        })
        .then(data => {
            // not sure for now
            // this.setState({data: data});
            // console.log("data", this.state.data);
            this.setState({data: data});
        })
        .catch(error => this.setState({error}))
    }

    render() {
        return (
            <div className="testContainer">
                {this.state.data.id}
            </div>
        )
    }
}

export default FortniteData