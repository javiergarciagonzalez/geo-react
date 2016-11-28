import 'core-js/fn/object/assign';
import React from 'react';
import { render } from 'react-dom';
import CustomTabs from './components/CustomTabsComponent';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { locationReducer } from './reducers/location'

class Application extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
<<<<<<< Updated upstream
=======
        return (<Provider store={store} >
                    <CustomTabs {...this.props.location}/>
                </Provider>);
    }
}
render(<Application />, document.querySelector('.app'));
>>>>>>> Stashed changes

        const store = createStore(locationReducer);
        return (<Provider store={store} >
                            <CustomTabs />
                        </Provider>);
    }
}

render(<Application />, document.querySelector('.app'));
window.Application = new Application();
