import React from 'react';


import { Cards, Chart, CountryPicker } from './components';

import { fetch } from './api'
 
import styles from './App.module.css';

class App extends React.Component {

    state = {
        data: {},
        country: '',
    }
    
    // When the component mount this function will be called
    async componentDidMount(){
        const fetchedData = await fetch();
        
        this.setState({ data: fetchedData });
    }

    handleCountryChange = async (country) => {
        //  Fetch Data
        //  Set State

        const fetchedData = await fetch(country)
        this.setState({ data: fetchedData, country: country })

    }
 
    render () {
        const { data, country } = this.state;

        return (
            <div className={styles.container}>
                <Cards data={data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart data={data} country={country} />
            </div>

        )
    }
}

export default App;