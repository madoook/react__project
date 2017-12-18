import { EventEmitter } from "../../EventEmitter";


class CatalogsStore extends EventEmitter {
    constructor(){
        super();
        this.apiUrl = 'http://localhost:4001/api/v1/phones/';
        this.catalog = []

    }

    getCatalogList(){
        this.fetchCatalog();
        return this.catalog;
    }

    filterCatalog (element) {
        console.log(element);
        if (element === 'price') {
            this.catalog = this.catalog.sort ((a,b) => {
                return a[element] - b[element];
            });
            this.publish('Catalog', this.catalog);
        }

        if (element === 'name') {
            this.catalog = this.catalog.sort((a,b) => {
                return a[element] > b[element] ? 1 : a[element] < b[element] ? -1 :0;
            });
            this.publish('Catalog', this.catalog);
        }

    }

    fetchCatalog() {
                fetch(`${this.apiUrl}`)
            .then(response => response.json())
            .then((data) => {
            this.catalog = [];
                data.map((arr)=> this.catalog.push(arr));
                this.publish('Catalog', this.catalog)
            })
            .catch((error) => {
                console.error(error);
            });

    }

}

const CatalogStore = new CatalogsStore();



export { CatalogStore };