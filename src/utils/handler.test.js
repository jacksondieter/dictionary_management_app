import { Dictionary} from './handler';


it('testing ok', () => {
    const graph = new Dictionary()

    graph._addVertex('StoneGrey')
    graph._addVertex('Anthracite')
    graph._addVertex('Dark Grey')
    graph._addVertex('Grey Cloud')
    graph._addVertex('Caribean Sea')
    graph._addVertex('Turquoise')
    graph._addEdge('Dark Grey','StoneGrey')
    graph._addEdge('Dark Grey','Grey Cloud')
    graph._addEdge('Turquoise','Caribean Sea')

    const response = graph.detectConsistency();
    expect(response.isChain).toBe(false);
    expect(response.isCycle).toBe(false);
    expect(response.isFork).toBe(false);
});

it('testing add row', () => {
    const graph = new Dictionary()
    graph.addRow('Dark Grey','StoneGrey')
    graph.addRow('Dark Grey','Grey Cloud')
    graph.addRow('Turquoise','Caribean Sea')

    const response = graph.detectConsistency();
    
expect(response.isChain).toBe(false);
    expect(response.isCycle).toBe(false);
    expect(response.isFork).toBe(false);
});

it('testing add row', () => {
    const graph = new Dictionary();
    const graph2 = new Dictionary(graph)
        .addRow('Dark Grey','StoneGrey')
        .addRow('Dark Grey','Grey Cloud')
        .addRow('Turquoise','Caribean Sea')
        .deleteRow('Turquoise','Caribean Sea')
        .updateRow('Anthracite','Grey Cloud')

    console.log(graph2.getValidatedList());
    const response = graph.detectConsistency();
    expect(response.isChain).toBe(false);
    expect(response.isCycle).toBe(false);
    expect(response.isFork).toBe(false); 
});

it('testing cycle', () => {
    const graph = new Dictionary()

    graph._addVertex('StoneGrey')
    graph._addVertex('Anthracite')
    graph._addVertex('Dark Grey')
    graph._addVertex('Blue')
    graph._addVertex('Caribean Sea')
    graph._addVertex('Turquoise')
    graph._addEdge('Dark Grey','StoneGrey')
    graph._addEdge('StoneGrey','Dark Grey')
    graph._addEdge('Anthracite','Dark Grey')
    graph._addEdge('Blue','Anthracite')
    graph._addEdge('Turquoise','Caribean Sea')

    const response = graph.detectConsistency();
    console.log(graph.getValidatedList());
    console.log(response);
    expect(response.isChain).toBe(true);
    expect(response.isCycle).toBe(true);
    expect(response.isFork).toBe(false);

});

it('testing chain', () => {
    const graph = new Dictionary()

    graph._addVertex('StoneGrey')
    graph._addVertex('Anthracite')
    graph._addVertex('Dark Grey')
    graph._addVertex('Blue')
    graph._addVertex('Caribean Sea')
    graph._addVertex('Turquoise')
    graph._addEdge('Dark Grey','StoneGrey')
    graph._addEdge('Anthracite','Dark Grey')
    graph._addEdge('Blue','Anthracite')
    graph._addEdge('Turquoise','Caribean Sea')

    const response = graph.detectConsistency();
    console.log(graph.getValidatedList());
    console.log(response);
    expect(response.isChain).toBe(true);
    expect(response.isCycle).toBe(false);
    expect(response.isFork).toBe(false);

});

it('testing fork', () => {
    const graph = new Dictionary()

    graph._addVertex('StoneGrey')
    graph._addVertex('Anthracite')
    graph._addVertex('Dark Grey')
    graph._addVertex('Blue')
    graph._addVertex('Caribean Sea')
    graph._addVertex('Turquoise')
    graph._addEdge('Dark Grey','StoneGrey')
    graph._addEdge('Anthracite','StoneGrey')
    graph._addEdge('Turquoise','Caribean Sea')

    const response = graph.detectConsistency();
    console.log(graph.getValidatedList());
    console.log(response);
    expect(response.isChain).toBe(false);
    expect(response.isCycle).toBe(false);
    expect(response.isFork).toBe(true);

});


it('testing fork and chain', () => {
    const graph = new Dictionary()

    graph._addVertex('StoneGrey')
    graph._addVertex('Anthracite')
    graph._addVertex('Dark Grey')
    graph._addVertex('Blue')
    graph._addVertex('Caribean Sea')
    graph._addVertex('Turquoise')
    graph._addEdge('Dark Grey','StoneGrey')
    graph._addEdge('Anthracite','StoneGrey')
    graph._addEdge('Anthracite','Dark Grey')
    graph._addEdge('Turquoise','Caribean Sea')

    const response = graph.detectConsistency();
    console.log(graph.getValidatedList());
    console.log(response);
    expect(response.isChain).toBe(true);
    expect(response.isCycle).toBe(false);
    expect(response.isFork).toBe(true);

});

it('testing fork and chain and cycle', () => {
    const graph = new Dictionary()

    graph._addVertex('StoneGrey')
    graph._addVertex('Anthracite')
    graph._addVertex('Dark Grey')
    graph._addVertex('Blue')
    graph._addVertex('Caribean Sea')
    graph._addVertex('Turquoise')
    graph._addEdge('Dark Grey','StoneGrey')
    graph._addEdge('Anthracite','StoneGrey')
    graph._addEdge('Anthracite','Dark Grey')
    graph._addEdge('StoneGrey','Turquoise')
    graph._addEdge('Turquoise','Anthracite')

    const response = graph.detectConsistency();
    console.log(graph.getValidatedList());
    console.log(response);
    console.log(graph.dataList);
    expect(response.isChain).toBe(true);
    expect(response.isCycle).toBe(true);

});

it('testing cycle cleaned', () => {
    const graph = new Dictionary()
    graph.addValidatedRow('Dark Grey','StoneGrey')
    graph.addValidatedRow('StoneGrey','Dark Grey')
    graph.addValidatedRow('Anthracite','Dark Grey')
    graph.addValidatedRow('Blue','Anthracite')
    graph.addValidatedRow('Turquoise','Caribean Sea')

    
    const response = graph.detectConsistency();
    
    expect(response.isChain).toBe(false);
    expect(response.isCycle).toBe(false);
    expect(response.isFork).toBe(false); 

});

it('testing chain cleaned', () => {
    const graph = new Dictionary()
    graph.addValidatedRow('Dark Grey','StoneGrey')
    graph.addValidatedRow('Anthracite','Dark Grey')
    graph.addValidatedRow('Blue','Anthracite')
    graph.addValidatedRow('Turquoise','Caribean Sea')

    
    const response = graph.detectConsistency();
    expect(response.isChain).toBe(false);
    expect(response.isCycle).toBe(false);
    expect(response.isFork).toBe(false);

});
it('testing fork cleaned', () => {
    const graph = new Dictionary()
    graph.addValidatedRow('Dark Grey','StoneGrey')
    graph.addValidatedRow('Anthracite','StoneGrey')
    graph.addValidatedRow('Turquoise','Caribean Sea')

    
    const response = graph.detectConsistency();
    expect(response.isChain).toBe(false);
    expect(response.isCycle).toBe(false);
    expect(response.isFork).toBe(false);
});


it('testing fork and chain cleaned', () => {
    const graph = new Dictionary()
    graph.addValidatedRow('Dark Grey','StoneGrey')
    graph.addValidatedRow('Anthracite','StoneGrey')
    graph.addValidatedRow('Anthracite','Dark Grey')
    graph.addValidatedRow('Turquoise','Caribean Sea')

    
    const response = graph.detectConsistency();
    expect(response.isChain).toBe(false);
    expect(response.isCycle).toBe(false);
    expect(response.isFork).toBe(false);
});

it('testing fork and chain and cycle cleaned', () => {
    const graph = new Dictionary()
    graph.addValidatedRow('Dark Grey','StoneGrey')
    graph.addValidatedRow('Anthracite','StoneGrey')
    graph.addValidatedRow('Anthracite','Dark Grey')
    graph.addValidatedRow('StoneGrey','Turquoise')
    graph.addValidatedRow('Turquoise','Anthracite')

    const response = graph.detectConsistency();
    expect(response.isChain).toBe(false);
    expect(response.isCycle).toBe(false);
    expect(response.isFork).toBe(false);
});