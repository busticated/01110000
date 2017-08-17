export default class Libraries {
    constructor({ pageSize = 10 } = {}){
        this.pageNumber = 0;
        this.pageSize = pageSize;
        this.ids = new Set();
        this.entities = new Map();
    }

    count(){
        return this.ids.size;
    }

    set(id, json){
        this.entities.set(id, json.body.data);
        return this;
    }

    get(id){
        return this.entities.get(id);
    }

    getIDs(){
        return Array.from(this.ids);
    }

    addPage(json){
        const { data } = json.body;

        data.forEach(lib => {
            const id = (lib ? lib.id : '').toLowerCase();

            if (!this.ids.has(id)){
                this.ids.add(id);
                this.entities.set(id, lib); // NOTE: normally 'lib' would be a more formal model
            }
        });

        return this;
    }

    getPage(pgNum = 0){
        const entities = this.entities;
        const ids = this.getPageIDs(pgNum);
        return ids.map(id => entities.get(id));
    }

    getPageIDs(pgNum = 0){
        const start = pgNum * this.pageSize;
        const end = start + this.pageSize;
        return this.getIDs().slice(start, end);
    }

    next(){
        if (!this.hasNextPage()){ return; }
        this.pageNumber += 1;
        return this;
    }

    nextPage(){
        if (!this.hasNextPage()){ return; }
        return this.next().currentPage();
    }

    hasNextPage(){
        const start = (this.pageNumber + 1) * this.pageSize;
        return this.ids.size > start;
    }

    currentPage(){
        return this.getPage(this.pageNumber);
    }

    previous(){
        if (!this.hasPreviousPage()){ return; }
        this.pageNumber -= 1;
        return this;
    }

    previousPage(){
        if (!this.hasPreviousPage()){ return; }
        return this.previous().currentPage();
    }

    hasPreviousPage(){
        return this.pageNumber > 0;
    }
}
