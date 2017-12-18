import React, { Component } from 'react';
import { CatalogStore } from './Catalog.store';
import loadImg from '../../ajax-loader.gif';
import CatalogComponent from "../../components/catalog/Catalog.component";


class CatalogContainer extends Component {
    constructor(){
        super();
        this.unmounted = false;
        this.state = {
            catalog: [],
            isTimeout: true
        };
    }

    componentDidMount() {
        this.setState((state) => {
            if (this.unmounted) return;
            state.catalog = CatalogStore.getCatalogList();
            return {...state};
        });
        CatalogStore.subscribe('Catalog', (catalog) => {
            this.setState((state) => {
                if (this.unmounted) return;
                state.catalog = catalog;
                state.isTimeout = false;
                return {...state};
            })
        });

    }

    componentWillUnmount() {
        this.unmounted = true;
    }

    render() {
        const isTimeout = this.state.isTimeout;
        if(!isTimeout){
            return (
                <CatalogComponent phones={this.state.catalog}/>
            )
        } else {
            return (
                <img src={loadImg} alt={'Loading'}/>
            )
        }

    }
}

export default CatalogContainer;