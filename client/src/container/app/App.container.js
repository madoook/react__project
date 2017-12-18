import React, { Component } from 'react';
import { Route} from 'react-router-dom';

import HeaderComponent from '../../components/header/Header.component';
import FooterComponent from '../../components/footer/Footer.component';
import CatalogContainer from '../catalog/Catalog.container';
import DetailContainer from '../detail/Detail.container';
import CartContainer from "../cart/Cart.container";


class App extends Component {

  render() {
    return (
        <div className="App">
            <HeaderComponent />
            <div className="content">
                <Route exact path='/' component={CatalogContainer}/>
                <Route path='/details/:id' component={DetailContainer} />
                <Route path='/cart/' component={CartContainer} />
            </div>
            <FooterComponent />
      </div>
    );
  }
}

export default App;
