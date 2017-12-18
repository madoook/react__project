import React, { Component } from 'react';
import { CatalogItemComponent } from '../catalogItem/CatalogItem.component';
import { CatalogStore } from '../../container/catalog/Catalog.store'
import './catalog.css';
import 'font-awesome/css/font-awesome.css';

class CatalogComponent extends Component {

    filterString = () => {
        CatalogStore.filterCatalog('name');

    };
    filterPrice = () => {
        CatalogStore.filterCatalog('price');
    };
    render() {
        const elements = this.props.phones.map((item, i) => <CatalogItemComponent data={item} key={i}/>);
            return (
                <div className="catalog">
                <div className="catalog__items">
                    <div className="catalog__filter">
                        <div className="catalog__filter-title">Фильтр: </div>
                        <button className="catalog__filter-btn" onClick={this.filterString}>Название</button>
                        <button className="catalog__filter-btn" onClick={this.filterPrice}>Цена</button>
                    </div>
                    {elements}
                </div>
            </div>
            )
        }

}

export default CatalogComponent;